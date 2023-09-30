import {
    View,
    StyleSheet
} from "react-native"

import { MotiImage, useDynamicAnimation  } from "moti";
import { SIZES, images } from "../constants"
import { useEffect } from "react";


const AnimationImagesTwo = ({animatedThree} : {animatedThree : boolean}) => {

    const motiImageOne = useDynamicAnimation(() => ({
        top: "20%",
        left: "15%"
    })) ;

    const motiImageTwo = useDynamicAnimation(() => ({
        top: "30%",
        left: "25%"
    })) ;

    const motiImageThree = useDynamicAnimation(() => ({
        top: "40%",
        left: "35%"
    })) ;

    const motiImageFour = useDynamicAnimation(() => ({
        top: "40%",
        left: "35%"
    })) ;


    useEffect(() => {
        if(animatedThree) {
            motiImageOne.animateTo({
                top:"25%" ,
                left :"10%"
            })
            motiImageTwo.animateTo({
                top:"58%" ,
                left :"50%" 
            })
            motiImageThree.animateTo({
                top:"60%" ,
                left :"5%"
            })

            motiImageFour.animateTo({
                top:"22%" ,
                left :"55%"
            })
      

        }
    }, [animatedThree])

 return (
    <View
            style={{
                flex: 1,
                overflow: "hidden"
            }}
        >
       

            <MotiImage
                state={motiImageOne}
                source={images.walkthrough_01_03}
                style={{
                    ...styles.image ,
                    width : 150 ,
                    height : 140 
                }}
            />

         <MotiImage
                state={motiImageFour}
                source={images.walkthrough_03_01}
                style={{
                    ...styles.image ,
                    width : 150 ,
                    height : 140 
                }}
            />


           <MotiImage
                state={motiImageTwo}
                source={images.walkthrough_01_01}
                style={{
                    ...styles.image ,
                    width : 150 ,
                    height : 140 
                }}
            />

          <MotiImage
                state={motiImageThree}
                source={images.walkthrough_01_04}
                style={{
                    ...styles.image ,
                    width : 150 ,
                    height : 140 
                }}
            />
 

    </View>
 )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        zIndex: 0,
        width: 86,
        height: 112,
        borderRadius: SIZES.radius
    }
})

export default AnimationImagesTwo
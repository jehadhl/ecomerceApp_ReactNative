import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native"

import { MotiImage, useDynamicAnimation  } from "moti";
import { SIZES, images } from "../constants"
import { useEffect } from "react";



const AnimationImagesOne = ({ animatedTwo }: { animatedTwo: boolean }) => {


    const motiImageOne = useDynamicAnimation(() => ({
        top: "30%",
        left: "25%"
    })) ;

    const motiImageTwo = useDynamicAnimation(() => ({
        top: "45%",
        left: "15%"
    })) ;

    const motiImageThree = useDynamicAnimation(() => ({
        top: "58%",
        left: "25%"
    }));

    const motiImageFour = useDynamicAnimation(() => ({
        top: "61%",
        left: "40%"
    }));

    const motiImageFive = useDynamicAnimation(() => ({
        top: "27%",
        left: "50%"
    }));


    const motiImageSix = useDynamicAnimation(() => ({
        top: "17%",
        left: "70%"
    }));


    useEffect(() => {
        if(animatedTwo) {
            motiImageOne.animateTo({
                top:"20%" ,
                left :"15%"
            })
            motiImageTwo.animateTo({
                top:"38%" ,
                left :-5
            })
            motiImageThree.animateTo({
                top:"62%" ,
                left :"5%"
            })
            motiImageFour.animateTo({
                top:"75%" ,
                left :"40%"
            })
            motiImageFive.animateTo({
                top:"16%" ,
                left :"65%"
            })
            motiImageSix.animateTo({
                top:"66%" ,
                left :"70%"
            })

        }
    }, [animatedTwo])

    return (
        <View
            style={{
                flex: 1,
                overflow: "hidden"
            }}
        >
            <Image
                source={images.walkthrough_02_01}
                style={{
                    ...styles.image,
                    width: 126,
                    height: 161,
                    zIndex: 1,
                    top: "35%",
                    left: "35%"
                }}
            />

       

            <MotiImage
                state={motiImageSix}
                source={images.walkthrough_02_02}
                style={
                    styles.image
                }
            />

            <MotiImage
                state={motiImageOne}
                source={images.walkthrough_02_03}
                style={
                    styles.image
                }
            />

            <MotiImage
                state={motiImageTwo}
                source={images.walkthrough_02_04}
                style={
                    styles.image
                }
            />

            <MotiImage
                state={motiImageThree}
                source={images.walkthrough_02_05}
                style={
                    styles.image
                }
            />
            <MotiImage
                state={motiImageFour}
                source={images.walkthrough_02_06}
                style={
                    styles.image
                }
            />
            <MotiImage
                state={motiImageFive}
                source={images.walkthrough_02_07}
                style={
                    styles.image
                }
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


export default AnimationImagesOne
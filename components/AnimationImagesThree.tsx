import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

import { MotiImage, useDynamicAnimation  } from "moti";
import { SIZES, images } from "../constants"
import { useEffect } from "react";

const AnimationImagesThree = ({animatedFour} : {animatedFour : boolean}) => {



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
    if(animatedFour) {
        motiImageTwo.animateTo({
            top:"38%" ,
            left :"60%" 
        })
        motiImageThree.animateTo({
            top:"65%" ,
            left :"5%"
        })

        motiImageFour.animateTo({
            top:"10%" ,
            left :"18%"
        })
  

    }
}, [animatedFour])

  return (
    <View
      style={{
          flex: 1,
          overflow: "hidden"
      }}
    >
      
         <Image
              source={images.walkthrough_04_01}
                style={{
                  ...styles.image,
                  width: 266,
                  height: 281,
                  zIndex: 0,
                  top: "25%",
                  left: "15%"
              }}
            />

         <MotiImage
                state={motiImageFour}
                source={images.walkthrough_04_02}
                style={{
                    ...styles.image ,
                    width : 150 ,
                    height : 140 
                }}
            />


           <MotiImage
                state={motiImageTwo}
                source={images.walkthrough_04_03}
                style={{
                    ...styles.image ,
                    width : 150 ,
                    height : 140 
                }}
            />

          <MotiImage
                state={motiImageThree}
                source={images.walkthrough_04_04}
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
export default AnimationImagesThree

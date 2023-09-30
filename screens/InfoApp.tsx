import React, { useRef, useState } from 'react'
import { View, Text, Animated , ViewToken  } from "react-native"
import { COLORS, SIZES, FONTS, constants } from '../constants'
import Button from '../components/Button';

import Walkthrough1 from '../components/Slider';
import AnimationImagesOne from '../components/AnimtionImagesOne';
import AnimationImagesTwo from '../components/AnimationImagesTwo';

type ViewChangeCallback = ({
  viewableItems,
  changed,
}: {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}) => void;


const InfoApp = () => {

  const [animatedTwo , setAnimatedTwo] = useState<boolean>(false)
  const [animtedThree , setAnimatedThree] = useState<boolean>(false)

  const onViewChangeRef = useRef<ViewChangeCallback>(({viewableItems  , changed}) => {
       if(viewableItems[0].index === 1){
          setAnimatedTwo(true)
       } 
       if(viewableItems[0].index === 2){
        setAnimatedThree(true)
     } 
  })

  const scrollX = useRef(new Animated.Value(0)).current;

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width)
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'center',
          marginVertical : 25
          
        }}
      >
        {
          constants.walkthrough.map((item, index: number) => {
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
              extrapolate: "clamp"
            })
            return (
              <Animated.View
                key={`dots_${index}`}
                style={{
                  backgroundColor: dotColor,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 6
                }}
              />
            )
          })
        }

      </View>
    )
  }

  function renderFooter() {
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: SIZES.height * 0.22,
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.height > 700 ? SIZES.padding : 20

      }}>
        <Dots />

        <View style={{
          flexDirection: 'row',
          height: 55 ,
           marginTop : 10 ,
          gap: 15
       
        }}>
          <Button
            label='Join Now'
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGrey,

            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3
            }}
          />

          <Button
            label='Login In'
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,

            }}
            labelStyle={{
              color: COLORS.light,
              ...FONTS.h3
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.light
    }}>
      <Animated.FlatList
        data={constants?.walkthrough}
        keyExtractor={(item: any) => item.id}
        horizontal
        decelerationRate={"fast"}
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: "center",

              }}
            >
              {/* ////////////Iamges////////////// */}
              <View style={{
                flex: 1,
                justifyContent :"center"
              }}>
                {index === 0 && (<Walkthrough1/>)}
                {index === 1 && (<AnimationImagesOne animatedTwo={animatedTwo}/>)}
                {index === 2 && (<AnimationImagesTwo animatedThree={animtedThree}/>)}
                 
              </View>
              <View style={{
                justifyContent: "flex-start",
                height: SIZES.height * 0.35,
                alignItems: "center",
                paddingHorizontal: SIZES.padding,
              }}>
                <Text style={{
                  ...FONTS.h1,
                  color: COLORS.dark
                }}>{item.title}</Text>
                <Text style={{
                  marginTop: SIZES.radius,
                  color: COLORS.grey,
                  textAlign: "center",
                  ...FONTS.body3
                }}>
                  {item.sub_title}
                </Text>
              </View>

            </View>
          )
        }}
      />

      {renderFooter()}


    </View>
  )
}

export default InfoApp

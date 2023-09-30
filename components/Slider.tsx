import {
    View , 
    Image
} from "react-native" 
import { useEffect, useRef, useState } from "react"

import { FlatList } from "react-native-gesture-handler"

import { SIZES , constants } from "../constants" 

const ITEM_WIDTH = 120  


const Walkthrough1 = () => {

    //Rows 1
    const [rows1Images , setRowsImages] = useState([
        ...constants.walkthrough_01_01_images ,
        ...constants.walkthrough_01_01_images
    ])

    const [currentPosition , setCurrentPosition] = useState<any>(0)

    //Rows 2
        const [rows2Images , setRows2Images] = useState([
            ...constants.walkthrough_01_02_images ,
            ...constants.walkthrough_01_02_images 
        ])

    const [current2Position , setCurrent2Position] = useState<any>(0)

    const row1FlatListRef = useRef<any>()
    const row2FlatListRef = useRef<any>()


    useEffect(() => {
        let positionTimer : any ;

        const timer = () => {
           positionTimer = setTimeout(() => {

           //slider 1
            setCurrentPosition((prev : number) => {
                const position = Number(prev) + 1 ;
                row1FlatListRef.current.scrollToOffset({offset : position , animated: false})

                const maxOffest = constants.walkthrough_01_01_images.length * ITEM_WIDTH ;

                if(prev > maxOffest) {
                     const offset = prev - maxOffest ;
                     row1FlatListRef.current.scrollToOffset({offset , animated: false})

                     return offset ;
                }else{
                    return position ;
                }
            })

            // slider 2
            setCurrent2Position((prevTwo : number) => {
                const position = Number(prevTwo) + 1 ;
                row2FlatListRef.current.scrollToOffset({offset : position , animated: false})

                const maxOffest = constants.walkthrough_01_02_images.length * ITEM_WIDTH ;

                if(prevTwo > maxOffest) {
                     const offset = prevTwo - maxOffest ;
                     row2FlatListRef.current.scrollToOffset({offset , animated: false})

                     return offset ;
                }else{
                    return position ;
                }
            })

                timer()
           }, 32)
        }

        timer() 

        return () => {
            clearTimeout(positionTimer)
        }
    })

    return (
    <View >
       <FlatList
        ref={row1FlatListRef}
        horizontal 
        
        decelerationRate={"fast"} 
        showsHorizontalScrollIndicator={false}
        data={rows1Images}
        scrollEnabled={false} 
        keyExtractor={(_ , index) => `Slider1_${index}` }
        renderItem={({item , index}) => {
           return (
           <View 
              style={{
                alignItems:"center", 
                justifyContent :'center',
                width : ITEM_WIDTH ,
                
              }}
             >
                <Image 
                 source={item} 
                 style={{
                    width : 110 ,
                    height : 110
                 }}
                 />
            
            </View >
           )
        }}
       />
       <FlatList
        ref={row2FlatListRef}
        horizontal 
        style={{
            padding : SIZES.padding ,
            transform : [{rotate : "180deg"}]
        }}
      
        decelerationRate={"fast"} 
        showsHorizontalScrollIndicator={false}
        data={rows2Images}
        scrollEnabled={false} 
        keyExtractor={(_ , index) => `Slider2_${index}` }
        renderItem={({item , index}) => {
           return (
           <View 
              style={{
                alignItems:"center", 
                justifyContent :'center',
                width : ITEM_WIDTH ,
                transform : [{rotate : "180deg"}]
                
              }}
             >
                <Image 
                 source={item} 
                 style={{
                    width : 110 ,
                    height : 110
                 }}
                 />
            
            </View >
           )
        }}
       />
     </View>
    )
}

export default Walkthrough1
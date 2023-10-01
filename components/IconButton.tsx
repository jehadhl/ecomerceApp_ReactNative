import {
  TouchableOpacity ,
  Image ,
  ImageSourcePropType
} from "react-native" 


import {COLORS, icons} from "../constants"

interface IconButtonProps {
  containerStyle ?: any ,
  onPress : () => void ,
  icon : ImageSourcePropType ,
  iconStyle : {
    tintColor : string
  }
}


const IconButton = ({
    containerStyle ,
    onPress ,
    icon ,
    iconStyle
}: IconButtonProps) => {
  return (
    <TouchableOpacity 
     style={{
         alignItems :"center" ,
         justifyContent :"center" ,
         ...containerStyle
     }}
     onPress={onPress}
    >
           <Image  
            source={icon}
            style={{
                width : 25 ,
                height : 25 ,
                ...iconStyle
            }}
            resizeMode="contain"
           />
    </TouchableOpacity>
  )
} 

export default IconButton 

import {
    View,
    TextInput,
    Text
} from "react-native"


import { SIZES, FONTS, images, COLORS } from "../constants"


const FormInputs = ({
    containerStyle,
    inputContainerStyle,
    placeHolder,
    value = "",
    inputStyle,
    onChange,
    onPress,
    prependComponent ,
    secureTextEntry,
    keyboardType = "default",
    maxLength,
    autoComplete = "off",
    autoCapitalize = "none",
    editable,
    appendComponent ,
    placeholderTextColor = COLORS.grey60,
}) => {
    return (
        <View style={{
             ...containerStyle
        }}>
            <View style={{
                flexDirection: "row",
                height: 55,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                alignItems: "center",
                backgroundColor: COLORS.lightGrey,
                ...inputContainerStyle

            }}>
                {prependComponent}
                <TextInput
                    style={{
                        flex: 1,
                        paddingVertical: 0,
                        ...FONTS.body3,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeHolder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoComplete={autoComplete}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChange={(text) => onChange(text)}
                    onPressIn ={onPress} 
                    editable={editable}
                />

                {appendComponent}
            </View>
        </View>
    )
}



export default FormInputs
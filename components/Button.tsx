import React from 'react'
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native"
import { COLORS, FONTS } from '../constants'


interface ButtonProps {
    disabled?: any,
    label: string;
    contentContainerStyle: {
        flex ?: number ,
        mariginLeft ?: number ,
        height?: number;
        borderRadius?: number;
        marginTop?: number;
        backgroundColor?: string | null
    };
    labelStyle: {
        color: string;
    };
    onPress?: () => void;
}

const Button = ({
    onPress,
    disabled,
    label,
    contentContainerStyle,
    labelStyle
}: ButtonProps) => {
    const buttonStyle: StyleProp<ViewStyle> = {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...(contentContainerStyle as Object),
    };
    return (
        <TouchableOpacity
            style={buttonStyle}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{ ...FONTS.h3, ...labelStyle }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

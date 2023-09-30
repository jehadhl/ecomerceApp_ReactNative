import React from 'react'
import { View, Text, Image, StatusBar, SafeAreaView } from "react-native"
import { COLORS, SIZES, FONTS, images } from '../constants';
import Button from '../components/Button';


const Intro = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={{flex :1}}>
            <StatusBar 
            animated={true}
            backgroundColor="#fff" 
            barStyle={"dark-content"}
            />
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.light
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Image
                        source={images?.logo}
                        style={{
                            width: 150,
                            height: 150
                        }}
                    />

                    <Text style={{ marginTop: SIZES.padding, ...FONTS.h1, color: "#000" }}>
                        Welcome to
                    </Text>
                    <Text style={{ marginTop: SIZES.small, ...FONTS.h2 }}>
                        Margaret
                    </Text>
                </View>


                <View style={{
                    paddingHorizontal: SIZES.padding,
                    marginBottom: 30
                }}>

                    <Button
                        label="Get Started"
                        contentContainerStyle={{
                            height: 60,
                            borderRadius: SIZES.radius,

                        }}
                        labelStyle={{
                            color: COLORS.light
                        }}
                        onPress={() => navigation.navigate("InfoApp")}
                    />

                    <Button
                        label="Already have an account"
                        contentContainerStyle={{
                            height: 50,
                            marginTop: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary
                        }}

                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Intro

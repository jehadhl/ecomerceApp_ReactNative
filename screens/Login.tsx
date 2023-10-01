import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image, StyleSheet, BackHandler } from "react-native"
import { COLORS, SIZES, images, FONTS, icons } from '../constants'

import { Shadow } from 'react-native-shadow-2'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormInputs from '../components/FormInputs'
import IconButton from '../components/IconButton'
import Button from '../components/Button'

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [isVisible, setIsVisible] = useState(false)

  const handleSubmit = () => {

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={"dark-content"}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.light,
          paddingHorizontal: SIZES.padding
        }}
      >
        <Image
          source={images.logo}
          style={{
            alignSelf: "center",
            width: 60,
            height: 60
          }}
        />
        <View
          style={{
            height: SIZES.height * 0.55,
            marginTop: SIZES.padding
          }}
        >
          <Shadow>
            <View style={styles.boxContainer}>
              <Text
                style={{
                  width: "60%",

                  marginTop: 5,
                  color: COLORS.dark,
                  ...FONTS.h1,
                }}
              >
                Sign In To Continue
              </Text>

              <KeyboardAwareScrollView
                enableOnAndroid={true}
                keyboardDismissMode='on-drag'
                extraScrollHeight={-300}
                keyboardShouldPersistTaps={"handled"}
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: 'center'
                }}
              >
                {/* email */}
                <FormInputs
                  containerStyle={{
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,

                  }}
                  placeHolder="Email"
                  prependComponent={
                    <Image
                      source={icons.email}
                      style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base
                      }}

                    />
                  }
                  value={formData.email}
                  onChange={(text: string) => setFormData({ ...formData, email: text })}

                />


                {/* password */}
                <FormInputs
                  containerStyle={{
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,

                  }}
                  placeHolder="Password"
                  prependComponent={
                    <Image
                      source={icons.lock}
                      style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base
                      }}

                    />
                  }
                  secureTextEntry={!isVisible}
                  value={formData.password}
                  onChange={(text: string) => setFormData({ ...formData, password: text })}
                  appendComponent={
                    <IconButton
                      icon={isVisible ? icons.eye_off : icons.eye}
                      iconStyle={{
                        tintColor: COLORS.grey
                      }}
                      onPress={() => setIsVisible(!isVisible)}
                    />
                  }

                />

                <View
                  style={{
                    alignItems: "flex-end",

                  }}
                >
                  <Button
                    label='Forget your password ?'
                    contentContainerStyle={{
                      backgroundColor: null,
                      marginTop: SIZES.radius
                    }}
                    labelStyle={{
                      color: COLORS.support3,
                      ...FONTS.h4
                    }}
                  />
                </View>
              </KeyboardAwareScrollView>

              <Button
                label='Log In'
                contentContainerStyle={{
                  height: 55,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.primary
                }}
                labelStyle={{
                  color: COLORS.light,
                  ...FONTS.h3
                }}
                onPress={handleSubmit}
              />
            </View>
          </Shadow>

          <View style={{
             alignItems :"center" ,
             marginTop : 15 ,
              flexDirection :"row" ,
             justifyContent :"center" ,
          }}>
            <Text style={{
               ...FONTS.h4
            }}>Don't have  Acoounts ? </Text>
            <Button
              label='Create New Accounts '
              contentContainerStyle={{
                backgroundColor: null,
               
              }}
              labelStyle={{
                color: COLORS.support3,
                ...FONTS.h4
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    width: SIZES.width - (SIZES.padding * 2),
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light

  }
})
export default Login

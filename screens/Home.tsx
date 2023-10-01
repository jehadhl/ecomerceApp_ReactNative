import React from 'react'
import { View,  SafeAreaView, StatusBar , Text } from "react-native"
import { COLORS, SIZES } from '../constants'

const Home = () => {
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
          backgroundColor: COLORS.light
        }}
      >
        <Text>
             hello home
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Home
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Screen1 = (props) => {
 

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

    <Text style={{fontsize:30}} onPress={()=>{
    navigation.openDrawer();
    }}>aaa </Text>
  </View>
  )
}

export default Screen1
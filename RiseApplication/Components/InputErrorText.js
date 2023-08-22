import { View, Text } from 'react-native'
import React from 'react'

const InputErrorText = ({error, visible}) => {
    if (!visible || !error) return null;
  return (
    <View>
      <Text style={{color:'red', fontSize:13, fontWeight:"300"}}>{error}</Text>
    </View>
  )
}

export default InputErrorText
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({onPress, title, style}) => {
  return (
    <View>
      <TouchableOpacity 
       style={[{
        backgroundColor:"#0898A0",
        width:355,
        padding:16,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
       }, style]}
       onPress={onPress}
       activeOpacity={0.7}
      >
        <Text style={{color:'#fff', fontWeight:"500", fontSize:18}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button
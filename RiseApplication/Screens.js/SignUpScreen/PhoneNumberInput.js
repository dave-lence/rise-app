import { View, Text } from 'react-native'
import React, {useState, useRef} from 'react'
import PhoneInput from 'react-native-phone-number-input'


const PhoneNumberInput = ({ref, defaultValue, onChangeText}) => {
  return (
    <View>
    <PhoneInput
            ref={ref}
            defaultValue={defaultValue}
            placeholder="Phone number"
            defaultCode="NG"
            layout="first"
            onChangeText={onChangeText}
            withDarkTheme
            containerStyle={{
              width: "100%",
              height: 53,
              marginVertical: 10,
              backgroundColor: "rgba(113, 135, 156, 0.10)",
              borderRadius: 5,
            }}
            textContainerStyle={{
              backgroundColor: "rgba(113, 135, 156, 0.10)",
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
            
          />
    </View>
  )
}

export default PhoneNumberInput
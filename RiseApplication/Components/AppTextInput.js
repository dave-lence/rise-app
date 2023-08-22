import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTextInput = ({style,  icon, showPass, secureTextEntry, iconName, ...otherProps }) => {
  return (
    <View
      style={[{
        padding: 10,
        backgroundColor: "rgba(113, 135, 156, 0.10)",
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        // borderColor:"#0898A0",
        // borderWidth:1,
      }, style]}
    >
      <TextInput
        cursorColor={"#0898A0"}
        style={{ fontSize: 14, fontWeight:"500",  flex: 1 }}
        {...otherProps}   
        secureTextEntry={secureTextEntry}
      />

      {icon && (
        <TouchableOpacity onPress={showPass}>
          <MaterialCommunityIcons name={iconName} size={24} color={"#0898A0"}/>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppTextInput;

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ww } from "../responsive";

const AppTextInput = ({
  style,
  icon,
  showPass,
  leftIcon,
  leftIconName,
  secureTextEntry,
  iconName,
  ...otherProps
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[
        {
          padding: ww(15),
          backgroundColor: "rgba(113, 135, 156, 0.10)",
          marginVertical: 10,
          borderRadius: 5,
          flexDirection: "row",
          borderColor: focus ? "#0898A0" : undefined,
          borderWidth: focus ? 1 : 0,
        },
        style,
      ]}
    >
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIconName}
          size={ww(24)}
          color="#0898A0"
          style={{marginRight:ww(10)}}
        />
      )}
      <TextInput
        cursorColor={"#0898A0"}
        style={{ fontSize: 14, fontWeight: "500", flex: 1 }}
        {...otherProps}
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />

      {icon && (
        <TouchableOpacity onPress={showPass}>
          <MaterialCommunityIcons name={iconName}  size={24} color={"#0898A0"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppTextInput;

import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { useFormikContext } from "formik";

const SubmitBtn = ({ title, style, disabled, onPress }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Pressable
      style={({pressed}) => [
        {
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 5,
          backgroundColor: "#0898A0",
          opacity: disabled ? 0.4 : 1,
          padding: 16,
          width: 335,
          marginTop: 50,
        },
        style,
        { backgroundColor: pressed ? "gray" : "white" },
      ]}
     
      android_ripple={{ color: "white" }}
      disabled={disabled}
      onPress={() => {
        handleSubmit, onPress;
      }}
    >
      <Text style={{ color: "white", fontWeight: "500" }}>{title}</Text>
    </Pressable>
  );
};

export default SubmitBtn;

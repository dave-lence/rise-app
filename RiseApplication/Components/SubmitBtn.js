import {
  Text,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useFormikContext } from "formik";

const SubmitBtn = ({ title, style, disabled, loading }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Pressable
      style={[
        {
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 5,
          backgroundColor: "#0898A0",
          opacity: disabled ? 0.4 : 1,
          padding: 16,
          width: 355,
          marginTop: 50,
        },
        style,
      ]}
      android_ripple={{ color: "white" }}
      disabled={disabled}
      onPress={handleSubmit}
    >
      {loading ? (
        <ActivityIndicator size={24} color={"#fff"} />
      ) : (
        <Text style={{ color: "white", fontWeight: "500" }}>{title}</Text>
      )}
    </Pressable>
  );
};

export default SubmitBtn;

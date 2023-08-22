import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFormikContext } from "formik";

const SubmitBtn = ({ title }) => {
  const { handleSubmit,} = useFormikContext();


  return (
    <TouchableOpacity
      style={{
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#0898A0",
        padding: 16,
        width: 335,
        marginTop: 50,
      }}
      activeOpacity={0.7}
      onPress={handleSubmit}
    >
      <Text style={{ color: "white", fontWeight: "500" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitBtn;

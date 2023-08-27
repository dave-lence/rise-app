import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DatePickeer = ({ onSelectDate, date }) => {

  return (
    <View>
      <View
        style={{
          padding: 10,
          backgroundColor: "rgba(113, 135, 156, 0.10)",
          marginVertical: 10,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
            color: "#000",
            fontWeight: "600",
            letterSpacing: 5,
          }}
        >
          {date}
        </Text>
        <TouchableOpacity onPress={onSelectDate}>
          <MaterialCommunityIcons name="calendar-month" size={26} color="#0898A0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePickeer;

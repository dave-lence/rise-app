import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// custom files
import { ww, windowWidth } from "../../responsive";


const PlanHeader = ({iconName, title}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: ww(12),
          borderRadius: 25,
          backgroundColor: "rgba(113, 135, 156, 0.10)",
          marginRight: windowWidth / 6,
        }}
      >
        <MaterialCommunityIcons name={iconName} size={24} color="#0898A0" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: ww(24),
          fontWeight: "700",
          alignSelf: "center",
        }}
      >
        {title}
      </Text>
    </View>
  )
}

export default PlanHeader
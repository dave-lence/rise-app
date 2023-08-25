import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//custome files
import { ww } from "../../responsive";

const PlanList = ({iconName, title, description}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: ww(20),
        marginVertical: ww(20),
      }}
    >
      <View
        style={{
          padding: ww(12),
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(113, 135, 156, 0.10)",
        }}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color="#0898A0"
        />
      </View>

      <View style={{ gap: 7 }}>
        <Text style={{ fontSize: ww(15), fontWeight: "700" }}>
         {title}
        </Text>
        <Text
          style={{
            fontSize: ww(14),
            width: ww(299),
            fontWeight: "400",
            color: "#71879C",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default PlanList;

import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//custome files
import { ww } from "../../responsive";

const PlanList = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: ww(10) }}>
      <View>
        <MaterialCommunityIcons
          name="progress-question"
          size={24}
          color="#0898A0"
        />
      </View>
    </View>
  );
};

export default PlanList;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// custom files
import { ww, windowWidth } from "../../responsive";
import PlanList from "./PlanList";

const CreatePlanScreen = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: ww(20) }}>
      <Header />

      {/* reach your goal faster */}
      <View style={{ alignItems: "center", gap: 20, marginVertical: ww(20) }}>
        <Text style={{ color: "#71879C", fontSize: ww(15), fontWeight: "400" }}>
          Reach your goals faster
        </Text>

        <Image
          source={require("../../assets/createplanImage.jpg")}
          style={{
            borderRadius: 60,
            width: ww(120),
            height: ww(120),
            marginVertical: ww(50),
          }}
        />
      </View>

      <PlanList/>
    </View>
  );
};

export default CreatePlanScreen;

const Header = () => {
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
        <MaterialCommunityIcons name="close" size={24} color="#0898A0" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: ww(24),
          fontWeight: "700",
          alignSelf: "center",
        }}
      >
        Create a plan
      </Text>
    </View>
  );
};

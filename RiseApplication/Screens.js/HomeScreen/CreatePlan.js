import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { ww } from "../../responsive";

const CreatePlan = () => {
  return (
    <View style={{ marginTop: ww(40) }}>
      <View>
        <Text style={{ color: "#000", fontSize: ww(20), fontWeight: "500" }}>
          Create a Plan
        </Text>
        <Text style={{ color: "#71879C", fontSize: ww(18) }}>
          Start your investment journey by creating a plan"
        </Text>
      </View>

      {/* create plan */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: ww(10), marginTop:ww(20) }}
      >
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </ScrollView>
    </View>
  );
};

export default CreatePlan;

const PlanCard = () => {
  return (
    <TouchableOpacity
      style={{
        height: ww(243),
        width: ww(200),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginHorizontal: ww(10),
        backgroundColor: "rgba(113, 135, 156, 0.10)",
      }}
    >
      <View
        style={{
          borderRadius: 20,
          width:ww(48),
          justifyContent: "center",
          alignItems: "center",
          padding: ww(3),
          backgroundColor:"rgba(64, 187, 195, 0.15)",
          marginBottom:ww(10),
          alignSelf:"center",
        }}
      >
        <MaterialCommunityIcons name="plus" size={ww(42)} color="#0898A0" />
      </View>

      <Text style={{ width: 121.4, fontSize: ww(14), textAlign:"center" , fontWeight: "700" }}>
        Create an investment plan
      </Text>
    </TouchableOpacity>
  );
};

import { View, Text } from "react-native";
import React from "react";

//custom files
import { ww } from "../../responsive";
import PlanHeader from "./PlanHeader";

const GoalScreen = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: ww(20) }}>
      <PlanHeader title={"Goal name"} iconName={"arrow-left-thin"} />

      <View style={{marginTop:ww(40)}}>
        <Text style={{fontSize:ww(15), color:"#71879C", fontWeight:"400"}}>Question 1 of 3</Text>
      </View>
    </View>
  );
};

export default GoalScreen;

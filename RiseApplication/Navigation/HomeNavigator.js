import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens.js/HomeScreen/HomeScreen";
import CreatePlanScreen from "../Screens.js/CreatePlanScreen/CreatePlanScreen";
import GoalScreen from "../Screens.js/CreatePlanScreen/GoalScreen";
import TargetScreen from "../Screens.js/CreatePlanScreen/TargetScreen";
import TargetDateScreen from "../Screens.js/CreatePlanScreen/DateScreen";
import BottomNav from "./BottomNav";

const Home = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Home.Navigator>
      <Home.Screen
        name="HomeScreen"
        component={BottomNav}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="CreatePlanScreen"
        options={{  presentation: "fullScreenModal", animation: "slide_from_bottom", headerShown: false,  }}
        component={CreatePlanScreen}
        
      />
      <Home.Screen
        component={GoalScreen}
        name="GoalSceen"
        options={{ animation: "slide_from_right", headerShown: false }}
      />
      <Home.Screen
        component={TargetScreen}
        name="TargetScreen"
        options={{ animation: "slide_from_right", headerShown: false }}
      />
      <Home.Screen
        component={TargetDateScreen}
        name="TargetDateScreen"
        options={{ animation: "slide_from_right", headerShown: false }}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;

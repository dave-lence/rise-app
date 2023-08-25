import { GestureHandlerRootView } from "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./Screens.js/OnboardingScreens/LandingScreen";
import LandingScreenTwo from "./Screens.js/OnboardingScreens/LandingScreenTwo";
import LandingScreenThree from "./Screens.js/OnboardingScreens/LandingScreenThree";
import LandingScreenFour from "./Screens.js/OnboardingScreens/LandingScreenFour";
import SignUpScreen from "./Screens.js/SignUpScreen/SignUpScreen";
import Screen from "./Components/Screen";
import MoreAboutUser from "./Screens.js/SignUpScreen/MoreAboutUser";
import LoginScreen from "./Screens.js/LoginScreen/LoginScreen";
import SignUpScuccesfulScreen from "./Screens.js/SignUpScreen/SignUpScuccesfulScreen";
import Auth from "./Navigation/Auth";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens.js/HomeScreen/HomeScreen";
import { myTheme } from "./Navigation/NavigationTheme";
import CreatePlanScreen from "./Screens.js/CreatePlanScreen/CreatePlanScreen";
import GoalScreen from "./Screens.js/CreatePlanScreen/GoalScreen";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <Screen>
        <GoalScreen />
      </Screen>
      {/* <Auth /> */}
    </NavigationContainer>
  );
}

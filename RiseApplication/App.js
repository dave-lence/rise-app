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

export default function App() {
  return (
    <NavigationContainer>
      <Screen>
        <Auth />
      </Screen>
    </NavigationContainer>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import LandingScreen from "../Screens.js/OnboardingScreens/LandingScreen";
import LandingScreenTwo from "../Screens.js/OnboardingScreens/LandingScreenTwo";
import LandingScreenThree from "../Screens.js/OnboardingScreens/LandingScreenThree";
import LandingScreenFour from "../Screens.js/OnboardingScreens/LandingScreenFour";
import SignUpScreen from "../Screens.js/SignUpScreen/SignUpScreen";
import LoginScreen from "../Screens.js/LoginScreen/LoginScreen";
import SignUpScuccesfulScreen from "../Screens.js/SignUpScreen/SignUpScuccesfulScreen";
import MoreAboutUser from "../Screens.js/SignUpScreen/MoreAboutUser";

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="Welcome"
        component={LandingScreen}
        options={{ animation: "fade" }}
        initialParams={LandingScreen}
      />
      <Stack.Screen
        name="WelcomeTwo"
        component={LandingScreenTwo}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="WelcomeThree"
        component={LandingScreenThree}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="WelcomeFour"
        component={LandingScreenFour}
        options={{ animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="SignUpSuccess"
        component={SignUpScuccesfulScreen}
        options={{ animation: "slide_from_bottom", headerLeft: null }}
      />
      <Stack.Screen
        name="MoreAbout"
        component={MoreAboutUser}
        options={{ animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};

export default Auth;

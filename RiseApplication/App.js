import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./Redux/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import TargetScreen from "./Screens.js/CreatePlanScreen/TargetScreen";
import TargetDateScreen from "./Screens.js/CreatePlanScreen/DateScreen";
import BottomNav from "./Navigation/BottomNav";
import HomeNavigator from "./Navigation/HomeNavigator";
import ReviewScreen from "./Screens.js/CreatePlanScreen/ReviewScreen";
import { useEffect } from "react";
import CreatePlanScuccesfulScreen from "./Screens.js/CreatePlanScreen/CreatePlanSuccessful";
import ProfileScreen from "./Screens.js/ProfileScreen.js/ProfileScreen";

const AuthSession = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserSignIn = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        if (user) {
          dispatch(setUser(JSON.parse(user))); // Dispatch the setUser action from your userSlice
        }
      } catch (error) {
        console.log("Error retrieving user from AsyncStorage:", error);
      }
    };

    checkUserSignIn();
  }, []);

  return (
    <NavigationContainer theme={myTheme}>
      {user ? <HomeNavigator/>  : <Auth />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
     <AuthSession/>
    </Provider>
  );
}

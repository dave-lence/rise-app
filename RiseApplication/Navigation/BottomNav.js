import { View, Text, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//custom files
import HomeScreen from "../Screens.js/HomeScreen/HomeScreen";
import PlanScreeen from "../Screens.js/PlanScreen/PlanScreeen";
import WalletScreen from "../Screens.js/WalletScreen/WalletScreen";
import Feed from "../Screens.js/FeedScreen.js/Feed";
import ProfileScreen from "../Screens.js/ProfileScreen.js/ProfileScreen";

const Bottom = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#0898A0",
        tabBarInactiveTintColor: "#94A1AD",
        tabBarItemStyle: { paddingVertical: 10 },
        tabBarStyle: {
          height: Platform.OS=="android" ? 70 : 100,
          backgroundColor: "#fff",
          elevation: 10,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth:0,
        },
      }}
    >
      <Bottom.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ), 
          title: "Home",
          headerShown: false,
        }}
      />
      <Bottom.Screen
        name="Plans"
        component={PlanScreeen}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons name="layers" size={size} color={color} />
          ),
          title: "Plans",
          headerShown: false,
          
        }}
      />
      <Bottom.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons name="wallet" size={size} color={color} />
          ),
          title: "Wallet",
          headerShown: false,
        }}
      />
      <Bottom.Screen
        name="Feeds"
        component={Feed}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons
              name="view-quilt"
              size={size}
              color={color}
            />
          ),
          title: "Feeds",
          headerShown: false,
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color, focused }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          title: "Account",
          headerShown: false,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNav;

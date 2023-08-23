import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[{ marginTop: Constants.statusBarHeight, flex:1 }, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

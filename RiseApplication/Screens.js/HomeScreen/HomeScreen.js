import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ww } from "../../responsive";
import { LinearGradient } from "expo-linear-gradient";

//custom files
import HomeHeader from "./HomeHeader";
import Card from "./Card";
import CreatePlan from "./CreatePlan";
import ContactUsTodaysQuote from "./ContactUs_TodaysQuote";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["rgba(113, 135, 156, 0.10)", "#fff", "#fff", "#fff"]}
          style={{ flex: 1, paddingHorizontal: ww(20) }}
        >
          <HomeHeader />
          <Card />
          <CreatePlan />

          <ContactUsTodaysQuote />
        </LinearGradient>

        <Text
          style={{
            fontSize: ww(50),
            color: "rgba(113, 135, 156, 0.20)",
            fontWeight: "800",
            alignSelf: "center",
            marginVertical:ww(30),
          }}
        >
          rise.
        </Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

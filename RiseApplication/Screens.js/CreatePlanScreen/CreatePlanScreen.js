import { View, Text,  Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// custom files
import { ww, } from "../../responsive";
import PlanHeader from "./PlanHeader";
import Button from "../../Components/Button";
import PlanList from "./PlanList";
import Screen from "../../Components/Screen";


const CreatePlanScreen = ({}) => {
  const navigation = useNavigation()
  return (
    <Screen style={{flex: 1, paddingHorizontal: ww(20)}}>
      <PlanHeader title={"Create a plan"}
        iconName={"close"}
      />

      {/* reach your goal faster */}
      <View style={{ alignItems: "center", gap: 20, marginVertical: ww(20) }}>
        <Text style={{ color: "#71879C", fontSize: ww(15), fontWeight: "400" }}>
          Reach your goals faster
        </Text>

        <Image
          source={require("../../assets/createplanImage.jpg")}
          style={{
            borderRadius: 60,
            width: ww(120),
            height: ww(120),
            marginVertical: ww(50),
          }}
        />
      </View>

      <PlanList
        iconName={"progress-question"}
        title={"Give us a few details"}
        description={
          "Tell us what you want to achieve and we will help you get there"
        }
      />
      <PlanList
        iconName={"calendar-month"}
        title={"Turn on auto-invest"}
        description={
          "The easiest way to get your investment working for you is to fund to periodically. "
        }
      />
      <PlanList
        iconName={"tools"}
        title={"Modify as you progress"}
        description={
          "You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more."
        }
      />

      <Button title={"Continue"} style={{ marginTop: ww(90)  }} onPress={() => navigation.navigate("GoalSceen")} />
    </Screen>
  );
};

export default CreatePlanScreen;


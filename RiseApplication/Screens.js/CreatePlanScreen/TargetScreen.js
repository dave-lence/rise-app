import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import * as Yup from "yup";

//custom files
import { ww } from "../../responsive";
import PlanHeader from "./PlanHeader";
import AppFormik from "../../Components/AppFormik";
import AppFormFields from "../../Components/AppFormFields";
import SubmitBtn from "../../Components/SubmitBtn";
import Screen from "../../Components/Screen";

const TargetScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    amount: Yup.number().required("Field Required").label("Amount"),
  });

  const [progressAnim, setProgressAnim] = useState(0.3);
  useEffect(() => {
    setTimeout(() => {
      setProgressAnim(0.6);
    }, 300);
  }, []);

  return (
    <Screen style={{ flex: 1, paddingHorizontal: ww(20) }}>
      <PlanHeader title={"Target amount"} iconName={"arrow-left-thin"} />

      <View style={{ marginTop: ww(40) }}>
        <Text style={{ fontSize: ww(15), color: "#71879C", fontWeight: "400" }}>
          Question 2 of 3
        </Text>
        <Progress.Bar
          progress={progressAnim}
          color="#0898A0"
          height={ww(10)}
          width={ww(380)}
          style={{ marginTop: ww(20) }}
        />
      </View>

      {/* input section */}
      <View style={{ marginTop: ww(50) }}>
        <Text style={{ fontSize: ww(17), fontWeight: "700" }}>
          How much do you need?
        </Text>

        <AppFormik
          initialValues={{ amount: "" }}
          validationSchema={validationSchema}
          onSubmit={({amount}) => {
            console.log(amount);
            navigation.navigate("TargetDateScreen", amount);
          }}
        >
          <AppFormFields
            leftIcon
            leftIconName={"currency-ngn"}
            name={"amount"}
            placeholder={"840,000.00"}
          />

          <SubmitBtn title={"continue"} style={{ marginTop: 20 }} />
        </AppFormik>
      </View>
    </Screen>
  );
};

export default TargetScreen;

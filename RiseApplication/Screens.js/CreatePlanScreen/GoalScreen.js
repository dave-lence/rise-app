import { View, Text } from "react-native";
import React, { useEffect, useState, } from "react";
import * as Progress from "react-native-progress";
import * as Yup from "yup";

//custom files
import { ww } from "../../responsive";
import PlanHeader from "./PlanHeader";
import AppFormik from "../../Components/AppFormik";
import AppFormFields from "../../Components/AppFormFields";
import SubmitBtn from "../../Components/SubmitBtn";
import Screen from "../../Components/Screen";

const GoalScreen = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    investment: Yup.string().required("Field Required").label("Investment"),
  });

  const [progressAnim, setProgressAnim] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgressAnim(0.3);
    }, 200);
  }, []);

  return (
    <Screen style={{ flex: 1, paddingHorizontal: ww(20) }}>
      <PlanHeader title={"Goal name"} iconName={"arrow-left-thin"} />

      <View style={{ marginTop: ww(40) }}>
        <Text style={{ fontSize: ww(15), color: "#71879C", fontWeight: "400" }}>
          Question 1 of 3
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
          What are you saving for
        </Text>

        <AppFormik
          initialValues={{ investment: "" }}
          validationSchema={validationSchema}
          onSubmit={({investment}) => {
            //console.log(investment);
            navigation.navigate("TargetScreen", {investment})
          }}
        >
          <AppFormFields name={"investment"} placeholder={"Investment"} />

          <SubmitBtn title={"continue"} style={{ marginTop: 20 }} />
        </AppFormik>
      </View>
    </Screen>
  );
};

export default GoalScreen;

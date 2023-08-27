import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";


//custom files
import { ww } from "../../responsive";
import PlanHeader from "./PlanHeader";
import AppFormik from "../../Components/AppFormik";
import AppFormFields from "../../Components/AppFormFields";
import SubmitBtn from "../../Components/SubmitBtn";
import DatePickeer from "../SignUpScreen/DatePickeer";
import Screen from "../../Components/Screen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TargetDateScreen = ({ route }) => {
  const navigation = useNavigation()
  const validationSchema = Yup.object().shape({
    date: Yup.string().required("Field Required").label("Date of Birth"),
  });

  // calender state
  const { investment, amount } = route.params;
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //console.log(investment, amount, selected);
  const [progressAnim, setProgressAnim] = useState(0.3);
  useEffect(() => {
    setTimeout(() => {
      setProgressAnim(1);
    }, 200);
  }, []);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token != null) {
        Alert.alert("your tojen is ", token);
      }
    } catch (error) {
      console.log("error", error);
    }
  };



  return (
    <Screen style={{ flex: 1, paddingHorizontal: ww(20) }}>
      <PlanHeader title={"Target date"} iconName={"arrow-left-thin"} />
    
      <View style={{ marginTop: ww(40) }}>
        <Text style={{ fontSize: ww(15), color: "#71879C", fontWeight: "400" }}>
          Question 3 of 3
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
          When do you want to withdraw?
        </Text>

        <AppFormik
          initialValues={{ date: "" }}
          validationSchema={validationSchema}
          onSubmit={({date}) => {
            setIsLoading(true)
            setTimeout(() => {
              setIsLoading(false)
              navigation.navigate("ReviewScreen", {date, investment, amount} )
            }, 5000);
          
            //console.log(value);
          }}
        >
          <AppFormFields
            icon
            iconName={"calendar-month"}
            name={"date"}
            placeholder={"date - month - year"}
          />

          <SubmitBtn loading={isLoading}  title={"continue"} style={{ marginTop: 20 }} />
        </AppFormik>
      </View>
    </Screen>
  );
};

export default TargetDateScreen;

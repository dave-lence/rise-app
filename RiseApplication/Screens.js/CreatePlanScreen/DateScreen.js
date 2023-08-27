import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import * as Yup from "yup";
import { Calendar } from "react-native-calendars";

//custom files
import { ww } from "../../responsive";
import PlanHeader from "./PlanHeader";
import AppFormik from "../../Components/AppFormik";
import AppFormFields from "../../Components/AppFormFields";
import SubmitBtn from "../../Components/SubmitBtn";
import DatePickeer from "../SignUpScreen/DatePickeer";
import Screen from "../../Components/Screen";

const TargetDateScreen = () => {
  const validationSchema = Yup.object().shape({
    amount: Yup.number().required("Field Required").label("Amount"),
  });

  // calender state
  const [selected, setSelected] = useState("");
  const [showCalender, setShowCalender] = useState(false);

  const [progressAnim, setProgressAnim] = useState(0.3);
  useEffect(() => {
    setTimeout(() => {
      setProgressAnim(1);
    }, 200);
  }, []);

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
          initialValues={{ amount: "" }}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          <DatePickeer
            date={selected}
            onSelectDate={() => setShowCalender(!showCalender)}
          />

          {showCalender && (
            <Calendar
              onDayPress={(day) => {
                setSelected(day.dateString);
                setShowCalender(false);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedDotColor: "orange",
                },
              }}
            />
          )}

          <SubmitBtn title={"continue"} style={{ marginTop: 20 }} />
        </AppFormik>
      </View>
    </Screen>
  );
};

export default TargetDateScreen;

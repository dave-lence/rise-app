import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import AppFormFields from "../../Components/AppFormFields";
import AppFormik from "../../Components/AppFormik";
import SubmitBtn from "../../Components/SubmitBtn";
import PhoneNumberInput from "./PhoneNumberInput";
import { Calendar} from "react-native-calendars";
import DatePickeer from "./DatePickeer";
import Button from "../../Components/Button";
import { ww } from "../../responsive";

const MoreAboutUser = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().label("First Name"),
    lastName: Yup.string().label("Last Name"),
    nickName: Yup.string().label("Nick Name"),
    phone: Yup.number().label("Phone Number"),
  });
  //DECLERATION OF STATES
  // phone number state that takes the phone number
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  
  // calender state
  const [selected, setSelected] = useState("");
  const [showCalender, setShowCalender] = useState(false)
  const phoneInput = useRef(null);

  // this function is used to check if the phone number is vallid or not
  const handlePhoneValidate = (value) => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setValid(checkValid ? checkValid : false);
  };

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
      {/* top description */}
      <View style={{ marginTop: 75, marginBottom: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Tell Us More About You
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#71879C",
            fontWeight: "400",
            marginTop: 10,
            paddingRight: 20,
          }}
        >
          Please use your name as it appears on your ID.
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#71879C",
            fontWeight: "400",
            marginTop: 10,
            paddingRight: 20,
          }}
        >
          You can filled the form to tell us more about you but its not
          recommended
        </Text>
      </View>

      {/* FORM FEILDS */}
      <View>
        <AppFormik
          initialValues={{
            firstName: "",
            lastName: "",
            nickName: "",
            phone: "",
          }}
          onSubmit={() => {}}
          validationSchema={validationSchema}
          validate={(value) => handlePhoneValidate(value)}
        >
          <AppFormFields placeholder={"Legal first name"} name={"firstName"} />

          <AppFormFields placeholder={"Legal last name"} name={"lastName"} />

          <AppFormFields placeholder={"Nick name"} name={"nickName"} />

          <PhoneNumberInput
            ref={phoneInput}
            defaultValue={value}
            onChangeText={(phone) => {
              setValue(phone);
              //  console.log(value)
            }}
          />

          {/* DatePickeer is a component that holds the value from the calender */}
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

          <Button title={"Continue"} style={{marginTop:ww(100)}} onPress={() => navigation.navigate("SignUpSuccess")}/>
        </AppFormik>
      </View>
    </ScrollView>
  );
};

export default MoreAboutUser;

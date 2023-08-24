import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import * as Yup from "yup";
import AppFormik from "../../Components/AppFormik";
import AppFormFields from "../../Components/AppFormFields";
import SubmitBtn from "../../Components/SubmitBtn";

const SignUpScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$/, "Password is invalid")
      .required()
      .min(8)
      .label("Password"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [valid, setValid] = useState(false);
  const [valid8char, setValid8char] = useState(false);
  const [validUpperCase, setValidUpperCase] = useState(false);

  // function to check if the forms are valid to enable the button
  const checkValid = (values) => {
    passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$/;
    if (!values.email) {
      setValid(false);
    } else if (!values.password) {
      setValid(false);
    } else if (!passwordRegex.test(values.password)) {
      setValid(false);
      setValid8char(false);
    } else if (!/[A-Z]/.test(values.password)) {
      setValid(false);
      setValidUpperCase(false);
    } else {
      setValid8char(true);
      setValidUpperCase(true);
      setValid(true);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {/* top description */}
      <View style={{ marginTop: 75, marginBottom: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Create an account
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
          Start building your dollar-denominated investment portfolio.
        </Text>
      </View>

      {/* login forms */}
      <View>
        <AppFormik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validate={(values) => {
            checkValid(values);
            console.log(values);
          }}
          onSubmit={(value) => {
            // console.log(value);
          }}
        >
          <AppFormFields
            placeholder={"Email Address"}
            name={"email"}
            autoCorrect={false}
            autoCapitalize={"none"}
            keyboardType={"email-address"}
          />

          <AppFormFields
            icon
            iconName={showPassword ? "eye-off" : "eye"}
            showPass={() => setShowPassword(!showPassword)}
            placeholder={"Create Password"}
            name={"password"}
            autoCorrect={false}
            autoCapitalize={"none"}
            secureTextEntry={showPassword ? false : true}
          />

          {/* check boxes */}
          <View style={{ marginTop: 10 }}>
            <CheckBoxFields
              description={"Minimum of 8 characters"}
              value={valid8char}
              onValueChange={setValid8char}
            />
            <CheckBoxFields
              description={"One UPPERCASE character"}
              value={validUpperCase}
              onValueChange={setValidUpperCase}
            />
            <CheckBoxFields
              description={"One unique character (e.g: !@#$%^&*?)"}
              value={valid}
              onValueChange={setValid}
            />
          </View>

          {/* sign up button */}
          <SubmitBtn title={"Sign Up"} disabled={valid ? false : true} />
        </AppFormik>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

// CHECKBOX UI
const CheckBoxFields = ({ description, value, onValueChange }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Checkbox
        disabled
        value={value}
        onValueChange={onValueChange}
        style={{
          borderRadius: 50,
          marginRight: 10,
          backgroundColor: "#0898A0",
        }}
      />
      <Text style={{ fontWeight: "400", fontSize: 13 }}>{description}</Text>
    </View>
  );
};

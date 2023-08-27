import { View, Text, ScrollView, ActivityIndicator, Alert } from "react-native";
import React, { useRef, useState } from "react";
import Checkbox from "expo-checkbox";
import * as Yup from "yup";


// custom files
import AppFormik from "../../Components/AppFormik";
import AppFormFields from "../../Components/AppFormFields";
import SubmitBtn from "../../Components/SubmitBtn";
import { ww } from "../../responsive";
import Screen from "../../Components/Screen";


const SignUpScreen = ({ navigation }) => {
  const phoneRegex = `^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$`;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().label("First name"),
    lastName: Yup.string().required().label("Last name"),
    userName: Yup.string().label("Username"),
    phoneNumber: Yup.string().label("Phone Number"),
    dateOfBirth: Yup.string().required().label("Date of birth"),
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
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [signUpError, setSignUpError] = useState("");

 

  const createUser = async ({
    email,
    password,
    userName,
    phoneNumber,
    firstName,
    lastName,
    dateOfBirth,
  }) => {
    const response = await fetch(
      "https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/users",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username: userName,
          phone_number: phoneNumber,
          date_of_birth: dateOfBirth,
          email_address: email,
          password: password,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setNewUser(result);
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          Alert.alert(error);
        } else {
          console.log("success");
        }
      });
  };

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
    <Screen style={{ flex: 1, paddingHorizontal: ww(20) }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
            initialValues={{
              firstName: "",
              lastName: "",
              userName: "",
              phoneNumber: "",
              dateOfBirth: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            validate={(values) => {
              checkValid(values);
            }}
            onSubmit={(value) => {
              createUser(value);
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                navigation.navigate("Login");
              }, 5000);
            }}
          >
            <AppFormFields
              placeholder={"First Name"}
              name={"firstName"}
              autoCorrect={false}
              autoCapitalize={"none"}
            />
            <AppFormFields
              placeholder={"Last Name"}
              name={"lastName"}
              autoCorrect={false}
              autoCapitalize={"none"}
            />
            <AppFormFields
              placeholder={"Username"}
              name={"userName"}
              autoCorrect={false}
              autoCapitalize={"none"}
            />
            <AppFormFields
              placeholder={"Phone Number"}
              name={"phoneNumber"}
              autoCorrect={false}
              autoCapitalize={"none"}
              keyboardType={"numeric"}
            />
            <AppFormFields
              placeholder={"DOB"}
              name={"dateOfBirth"}
              autoCorrect={false}
              autoCapitalize={"none"}
            />
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
            <SubmitBtn
              loading={isLoading}
              title={"Sign Up"}
              disabled={valid ? false : true}
            />
          </AppFormik>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginVertical: ww(50),
            }}
          >
            <Text style={{ color: "#71879C", fontWeight: "500", fontSize: 16 }}>
              Already have an account?
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontWeight: "600",
                color: "#0898A0",
                fontSize: 16,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SignUpScreen;

// CHECKBOX UI
const CheckBoxFields = ({ description, value, onValueChange }) => {
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

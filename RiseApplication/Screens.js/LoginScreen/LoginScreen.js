import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import {useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

// cutom files 
import AppFormik from "../../Components/AppFormik";
import AppFormFields from "../../Components/AppFormFields";
import SubmitBtn from "../../Components/SubmitBtn";
import { ww } from "../../responsive";

const LoginScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string()
      .matches(/^(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$/, "Password is invalid")
      .required()
      .min(8)
      .label("Password"),
  });

  // initializing useDispatch
  const dispatch = useDispatch()
 


  const [showPassword, setShowPassword] = useState(false);
  const [valid, setValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [valid8char, setValid8char] = useState(false);
  const [validUpperCase, setValidUpperCase] = useState(false);

  const LoginUser = async ({ email, password }) => {
    axios
      .post(
        "https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/sessions",

        // body of request
        {
          email_address: email,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
            //"Authorization": `Bearer ${token}`
          },
        }
      )

      .then(({ data }) => {
        const { token, ...rest } = data;
        const respData = { token, user: { ...rest } };
        dispatch(setUser(respData.user));
        AsyncStorage.setItem("user", JSON.stringify(respData.user))
        AsyncStorage.setItem("token", JSON.stringify(respData.token))
        console.log("success", respData);
      })
      .catch((error) => console.log("error", error));
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
    <ScrollView style={{ flex: 1, paddingHorizontal: ww(20) }}>
      {/* top description */}
      <View style={{ marginTop: 75, marginBottom: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Welcome back</Text>
        <Text
          style={{
            fontSize: 15,
            color: "#71879C",
            fontWeight: "400",
            marginTop: 10,
            paddingRight: 20,
            lineHeight: 20,
          }}
        >
          Let’s get you logged in to get back to building your
          dollar-denominated investment portfolio.
        </Text>
      </View>

      {/* login forms */}
      <View>
        <AppFormik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validate={(values) => {
            checkValid(values);
          }}
          onSubmit={(value) => {
            LoginUser(value);
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 5000);
            navigation.navigate("HomeScreen");
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

          {/* sign up button */}
          <SubmitBtn
            loading={isLoading}
            title={"Login"}
            style={{ marginTop: ww(80) }}
          />
        </AppFormik>

        {/* forgotten password text */}
        <Text
          style={{
            marginTop: -100,
            color: "#0898A0",
            alignSelf: "center",
            fontWeight: "600",
            fontSize: 16,
          }}
          onPress={() => {}}
        >
          I forgot my Password
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: ww(350),
          }}
        >
          <Text style={{ color: "#71879C", fontWeight: "500", fontSize: 16 }}>
            Dont have an account?
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontWeight: "600",
              color: "#0898A0",
              fontSize: 16,
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

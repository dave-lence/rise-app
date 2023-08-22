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
      .matches(/^(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$/, 'Password is invalid')
      .required()
      .min(8)
      .label("Password"),
  });
  
  const [showPassword, setShowPassword] = useState(false);

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
          onSubmit={(value) => {
            console.log(value);
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
            <CheckBoxFields description={"Minimum of 8 characters"} />
            <CheckBoxFields description={"One UPPERCASE character"} />
            <CheckBoxFields
              description={"One unique character (e.g: !@#$%^&*?)"}
            />
          </View>

          {/* sign up button */}
           <SubmitBtn title={"Sign Up"}/>
        </AppFormik>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

// CHECKBOX UI
const CheckBoxFields = ({ description }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <Checkbox
        value={isSelected}
        onValueChange={setSelection}
        style={{ borderRadius: 50, marginRight: 10 }}
      />
      <Text style={{ fontWeight: "400", fontSize: 13 }}>{description}</Text>
    </View>
  );
};

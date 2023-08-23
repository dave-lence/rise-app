import { View, Text, ScrollView } from "react-native";
import React from "react";
import * as Yup from "yup";
import AppFormFields from "../../Components/AppFormFields";
import AppFormik from "../../Components/AppFormik";
import SubmitBtn from "../../Components/SubmitBtn";

const MoreAboutUser = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().label("First Name"),
    lastName: Yup.string().label("Last Name"),
    nickName: Yup.string().label("Nick Name"),
  });

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
          initialValues={{ firstName: "", lastName: "", nickName: "" }}
          onSubmit={console.log("ok")}
          validationSchema={validationSchema}
        >
          <AppFormFields placeholder={"Legal first name"} name={"firstName"} />

          <AppFormFields placeholder={"Legal last name"} name={"lastName"} />

          <AppFormFields placeholder={"Nick name"} name={"nickName"} />

          <SubmitBtn title={"Continue"} />
        </AppFormik>
      </View>
    </ScrollView>
  );
};

export default MoreAboutUser;

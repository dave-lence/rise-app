import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      {/* top description */}
      <View style={{ marginTop: 75 }}>
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
    </SafeAreaView>
  );
};

export default SignUpScreen;

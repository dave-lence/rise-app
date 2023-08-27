import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ww } from "../../responsive";


const LandingScreenFour = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6FFFE", paddingHorizontal: ww(20) }}>
      <View
        style={{ alignSelf: "center", marginTop: ww(100), height: ww(300), width: ww(300) }}
      >
        <Image
          source={require("../../assets/image48.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={{ marginTop: ww(50) }}>
        <Text
          style={{
            color: "#0898A0",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: ww(20),
          }}
        >
          Better Performance
        </Text>
        <Text
          style={{
            lineHeight: 20,
            marginTop: ww(10),
            fontSize: ww(15),
            fontWeight: "400",
          }}
        >
          You earn more returns, achieve more of your financial goals and
          protect your money from devaluation.
        </Text>
      </View>

      {/* buttons */}
      <View
        style={{
          gap: 10,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: ww(100),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "#0898A0",
            padding: 16,
            borderRadius: 5,
            width: ww(365),
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={{ color: "#fff", fontWeight: "500" }}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "rgba(113, 135, 156, 0.10)",
            padding: 16,
            borderRadius: 5,
            width: ww(365),
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#0898A0", fontWeight: "500" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreenFour;

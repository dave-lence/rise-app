import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";


const LandingScreenFour = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F6FFFE", padding: 20 }}>
      <View
        style={{ alignSelf: "center", marginTop: 100, height: 300, width: 300 }}
      >
        <Image
          source={require("../../assets/image48.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            color: "#0898A0",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 20,
          }}
        >
          Better Performance
        </Text>
        <Text
          style={{
            lineHeight: 20,
            marginTop: 10,
            fontSize: 15,
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
          gap:10,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "#0898A0",
            padding: 16,
            borderRadius: 5,
            width:335,
            alignItems:"center"
          }}
        >
          <Text style={{color:"#fff", fontWeight:"500"}}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "rgba(113, 135, 156, 0.10)",
            padding: 16,
            borderRadius: 5,
            width:335,
            alignItems:"center"
          }}
        >
          <Text style={{ color: "#0898A0", fontWeight:"500" }}>Sign In</Text>
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreenFour;

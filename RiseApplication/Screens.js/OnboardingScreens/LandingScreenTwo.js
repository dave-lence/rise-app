import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Pressable
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ww } from "../../responsive";

const LandingScreenTwo = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FEFAF7", paddingHorizontal: ww(20) }}>
      <View
        style={{ alignSelf: "center", marginTop: 100, height: 300, width: 300 }}
      >
        <Image
          source={require("../../assets/image46.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            color: "#FE7122",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 20,
          }}
        >
          Quality assets
        </Text>
        <Text
          style={{
            lineHeight: 20,
            marginTop: 10,
            fontSize: 15,
            fontWeight: "400",
          }}
        >
          Rise invests your money into the best dollar investments around the
          world.
        </Text>
      </View>

      {/* buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 150,
        }}
      >
        <Pressable
          activeOpacity={0.7}
          style={{
            backgroundColor: "rgba(113, 135, 156, 0.10)",
            padding: 10,
            borderRadius: 5,
            opacity: 0.3
          }}
          disabled
          
        >
          <Ionicons name="arrow-back" size={24} color="#FE7122" />
        </Pressable>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "rgba(113, 135, 156, 0.10)",
            padding: 10,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("WelcomeThree")}
        >
          <Text style={{ color: "#FE7122", marginRight: 10 }}>NEXT</Text>
          <Ionicons name="arrow-forward" size={24} color="#FE7122" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreenTwo;

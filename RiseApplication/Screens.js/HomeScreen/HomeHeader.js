import { View, Text } from "react-native";
import React, { useState } from "react";
import { ww } from "../../responsive";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeHeader = ({ userName }) => {
 // const [currentTime, setCurrentTime] = useState();

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  const currentTime = time < 12 ? "morning" : time < 17 ? "afternoon" : "evening";


  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ gap: 7 }}>
        <Text style={{ fontSize: ww(15), fontWeight: "400" }}>
          Good {currentTime} ☀
        </Text>
        <Text style={{ fontSize: ww(20), fontWeight: "400" }}>{userName}</Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            backgroundColor: "#0898A0",
            borderRadius: 20,
            width: ww(120),
            height: ww(35),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: ww(12), color: "white", fontWeight: "400" }}>
            Earn 3% bonus{" "}
          </Text>
        </View>

        <View style={{ position: "relative" }}>
          <MaterialCommunityIcons name="bell" size={24} color="#0898A0" />
          <View
            style={{
              padding: 5,
              backgroundColor: "red",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: -10,
              right: -10,
            }}
          >
            <Text
              style={{ fontSize: ww(12), color: "#fff", fontWeight: "400" }}
            >
              9+
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

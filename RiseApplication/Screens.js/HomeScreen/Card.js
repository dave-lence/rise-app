import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ww } from "../../responsive";

// this card components is the card on the home screen
const Card = ({}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingHorizontal: ww(50),
          justifyContent: "center",
          alignItems: "center",
          height: ww(175),
          width: ww(335),
          alignSelf: "center",
          marginTop: ww(20),
          elevation:8,
          shadowColor: 'black', 
          shadowOffset: { width: 0, height: 2 }, 
          shadowOpacity: 0.25,
          shadowRadius: 3,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 6,
            marginTop: 10,
          }}
        >
          <Text
            style={{ color: "#71879C", fontWeight: "400", fontSize: ww(15) }}
          >
            Total Balance
          </Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="eye" size={ww(20)} color="#0898A0" />
          </TouchableOpacity>
        </View>

        {/* amount */}
        <Text
          style={{
            fontSize: ww(32),
            fontWeight: "400",
            marginVertical: ww(20),
          }}
        >
          $0.00
        </Text>

        {/* total gains */}
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: 6,
            marginTop: 10,
          }}
        >
          <Text
            style={{ color: "#71879C", fontWeight: "400", fontSize: ww(15) }}
          >
            Total Gains
          </Text>

          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="arrow-top-right-thin"
              size={ww(20)}
              color="#27BF41"
            />
            <Text
              style={{ color: "#27BF41", fontWeight: "500", fontSize: ww(16) }}
            >
              0.00%
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={ww(24)}
              color="#71879C"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          justifyContent: "center",
          width: ww(355),
          padding: ww(16),
          marginTop: ww(20),
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "rgba(113, 135, 156, 0.20)",
          alignSelf: "center",
          
        }}
        activeOpacity={0.3}
      >
        <MaterialCommunityIcons name="plus" size={ww(24)} color="#0898A0" />
        <Text style={{ fontSize: ww(15), fontWeight: "700", color: "#0898A0" }}>
          Add money
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

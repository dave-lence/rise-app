import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ww } from "../../responsive";
const ContactUsTodaysQuote = () => {
  return (
    <View style={{ marginTop: ww(30) }}>
      <View
        style={{
          marginTop: ww(10),
          elevation: 8,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          padding: ww(16),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: ww(355),
          borderRadius: 10,
          alignSelf: "center",
          backgroundColor: "whitesmoke",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: ww(10),
          }}
        >
          <MaterialCommunityIcons
            name="progress-question"
            size={24}
            color="#0898A0"
          />
          <Text>Need help?</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#0898A0",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            width: ww(123),
            padding: ww(10),
          }}
          activeOpacity={0.7}
        >
          <Text style={{ color: "white", alignItems: "center" }}>
            Contact us
          </Text>
        </TouchableOpacity>
      </View>

      {/* quote */}
      <TodayQuote />
    </View>
  );
};

export default ContactUsTodaysQuote;

const TodayQuote = () => {
  const [isLoading, setIsLoading] = useState();
  const [quote, setQuote] = useState();

  const getQuote = async () => {
    try {
      let response = await axios.get(
        "https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/quotes"
      );
      setQuote(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getQuote();
    }, 2000);
  }, []);

  console.log(quote);

  return (
    <View
      style={{
        padding: ww(20),
        borderRadius: 20,
        backgroundColor: "#0898A0",
        gap: 10,
        marginTop: ww(35),
      }}
    >
      <Text style={{ color: "#fff", fontSize: ww(14), fontWeight: "700" }}>
        TODAY’S QUOTE
      </Text>
      <View
        style={{ width: ww(50), height: ww(2), backgroundColor: "#fff" }}
      ></View>
      <Text
        style={{
          color: "#fff",
          fontSize: ww(15),
          fontWeight: "400",
          lineHeight: 22,
        }}
      >
        {quote?.quote}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "800", fontSize: ww(15), color: "#fff" }}>
          {quote?.author}
        </Text>

        <TouchableOpacity
          style={{
            padding: ww(12),
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(300, 300, 300, 0.20)",
            elevation: 10,
            shadowColor: "#63666A",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3,
          }}
        >
          <MaterialCommunityIcons
            name="share-variant-outline"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

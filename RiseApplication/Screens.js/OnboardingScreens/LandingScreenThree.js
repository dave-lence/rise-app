import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  
  
  const LandingScreenThree = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FDF4F9", padding: 20 }}>
        <View style={{ alignSelf: "center", marginTop: 100, height:300, width:300 }}>
          <Image
            source={require("../../assets/image47.png")}
            style={{ width: "100%", height:"100%" }}
          />
        </View>
  
        <View style={{ marginTop: 50 }}>
          <Text
            style={{
              color: "#B80074",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 20,
            }}
          >
            Superior Selection
          </Text>
          <Text
            style={{
              lineHeight: 20,
              marginTop: 10,
              fontSize: 15,
              fontWeight: "400",
            }}
          >
            Our expert team and intelligent algorithms select assets that beat the markets. 

          </Text>
        </View>
  
        {/* buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop:150,
          }}
        >
          <TouchableOpacity
          activeOpacity={0.7}
            style={{ backgroundColor: "rgba(113, 135, 156, 0.10)", padding: 10, borderRadius: 5 }}
          >
            <Ionicons name="arrow-back" size={24} color="#B80074" />
          </TouchableOpacity>
  
          <TouchableOpacity
          activeOpacity={0.7}
            style={{ backgroundColor:  "rgba(113, 135, 156, 0.10)", padding: 10, borderRadius: 5, flexDirection:"row", alignItems:"center" }}
          >
            <Text style={{color:"#B80074", marginRight:10,}}>NEXT</Text>
            <Ionicons name="arrow-forward" size={24} color="#B80074" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

export default LandingScreenThree
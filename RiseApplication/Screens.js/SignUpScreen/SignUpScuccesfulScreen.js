import { View, Text, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../Components/Button";

const SignUpScuccesfulScreen = ({navigation}) => {
  const bounceValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(bounceValue, {
      toValue: 1,
      friction: 5, // Adjust friction to control bounce effect
      useNativeDriver: true,
    }).start();
  });

  return (
    <View style={{ flex: 1,  }}>
      <View style={{ alignItems: "center", marginTop: 150 }}>
        <Animated.View
          style={{
            transform: [{ scale: bounceValue }],
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(113, 135, 156, 0.10)",
              padding: 20,
              borderRadius: 60,
              justifyContent: "center",
              width: 120,
              height: 120,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="check-bold"
              size={60}
              color="#0898A0"
            />
          </View>
        </Animated.View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "500",
              paddingHorizontal: 60,
              textAlign: "center",
            }}
          >
            You just created your Rise account
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#71879C",
              fontWeight: "400",
              marginTop: 10,
              paddingHorizontal: 70,
              textAlign: "center",
            }}
          >
            Welcome to Rise, let’s take you home
          </Text>
        </View>
      </View>

      <Button title={"Okay"} style={{marginTop:250 }} onPress={() => navigation.navigate()} />
    </View>
  );
};

export default SignUpScuccesfulScreen;

import { View, Text, Animated } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";
import { setLocale } from "yup";

const CreatePlanScuccesfulScreen = ({ navigation }) => {
  const bounceValue = useRef(new Animated.Value(0)).current;
  const user = useSelector((state) => state.user.user);
  const username = user ? user.username : " ";
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      Animated.spring(bounceValue, {
        toValue: 1,
        friction: 1, // Adjust friction to control bounce effect
        useNativeDriver: true,
      }).start();
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
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
            You just created your plan.
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
            Well done, {username}
          </Text>
        </View>
      </View>

      <Button
      loading={isLoading}
        title={"Okay"}
        style={{ marginTop: 250 }}
        onPress={() => {
            setIsLoading(true)
            setTimeout(() => {
                 setLocale(false)
                navigation.navigate("HomeScreen")
            }, 4000);
        }}
      />
    </View>
  );
};

export default CreatePlanScuccesfulScreen;

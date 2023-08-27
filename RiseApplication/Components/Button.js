import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Button = ({ onPress, title, textStyle, loading, style, profileBtn, iconName, iconColor }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          {
            backgroundColor: "#0898A0",
            width: 355,
            padding: 16,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: profileBtn ? "space-between" : "center",
            borderRadius: 5,
            flexDirection: profileBtn ? "row" : null
          },
          style,
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {loading ? (
          <ActivityIndicator color={"white"} size={24} />
        ) : (
          <Text
            style={[
              { color: "#fff", fontWeight: "500", fontSize: 18 },
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}

        {profileBtn && 
         <MaterialCommunityIcons
         name={iconName}
         size={24}
         color={iconColor}
       />
        }
      </TouchableOpacity>
    </View>
  );
};

export default Button;

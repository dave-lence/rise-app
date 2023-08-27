import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ww } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearUser } from "../../Redux/UserSlice";

const ProfileScreen = () => {
  const user = useSelector((state) => state.user.user);
  const username = user ? user.username : " ";
  const email = user ? user.email_address : "";
  const firstName = user ? user.first_name : "hojn";
  const lastName = user ? user.last_name : "";
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* green section */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#0898A0",
          paddingHorizontal: ww(20),
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            marginVertical: ww(40),
            fontSize: ww(24),
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Profile
        </Text>

        <View style={{ alignItems: "center", marginTop: ww(20) }}>
          <View
            style={{
              width: ww(150),
              height: ww(150),
              borderWidth: 2,
              borderColor: "#fdfff5",
              borderRadius: 75,
              position: "relative",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 75 }}
              resizeMode="cover"
              source={{
                uri: "https://images.unsplash.com/photo-1538690560694-c770d02e202c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJtd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
            />

            <TouchableOpacity
              style={{
                width: ww(50),
                height: ww(50),
                borderRadius: 25,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: ww(90),
                top: ww(100),
              }}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons name="camera" size={24} color="#0898A0" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: ww(24),
              fontWeight: "500",
              color: "#fff",
              marginVertical: ww(20),
            }}
          >
            {username}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                width: 100,
              }}
            >
              <Text
                style={{ fontWeight: "400", color: "#fff", fontSize: ww(18) }}
              >
                {firstName}
              </Text>
              <Text
                style={{
                  marginLeft: ww(20),
                  fontWeight: "400",
                  color: "#fff",
                  fontSize: ww(18),
                }}
              >
                {lastName}
              </Text>
            </View>
            <View
              style={{ borderRightWidth: 2, borderColor: "#fff", height: 20 }}
            ></View>
            <Text
              style={{ fontWeight: "400", color: "#fff", fontSize: ww(18) }}
            >
              {email}
            </Text>
          </View>
        </View>
      </View>

      {/* white section */}

      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: ww(20),
          marginTop: ww(40),
          gap: 10,
        }}
      >
        <Button
          profileBtn
          iconColor={"#fff"}
          iconName={"arrow-right-thin"}
          title={"Change password"}
        />
        <Button
          profileBtn
          iconColor={"#fff"}
          iconName={"tools"}
          title={"Change settings"}
        />
        <Button
          profileBtn
          iconColor={"#fff"}
          iconName={"delete-sweep"}
          title={"Delete Account"}
        />
        <View
          style={{
            width: "100%",
            borderTopWidth: 1,
            borderColor: "#0898A0",
            paddingTop: ww(20),
            marginTop: ww(80),
          }}
        >
          <Button
            profileBtn
            iconColor={"#fff"}
            iconName={"logout-variant"}
            loading={isLoading}
            title={"Logout"}
            onPress={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                dispatch(clearUser());
                AsyncStorage.removeItem("user");
                navigation.navigate("Login");
              }, 3000);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

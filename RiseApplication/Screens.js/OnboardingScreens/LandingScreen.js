import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import React, { useEffect } from "react"

const LandingScreen = ({navigation}) => {

   useEffect(() => {
    setTimeout(() => {
      navigation.navigate("WelcomeTwo")
    }, 5000);
   })

  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
         source={require("../../assets/onboardingImg.png")}
         resizeMode="cover"
         style={{flex:1, alignItems:"center", paddingHorizontal:20}}
      >
        <View style={{flex:1, }}>
            <View style={{ marginTop:200, alignItems:"center",}}>
                <Text style={{color:"white", fontSize:40,  fontWeight:"bold"}}>rise.</Text>
                <Text style={{color:'white', fontSize:17, fontWeight:"200", paddingHorizontal:70, textAlign:"center"}}>Dollar investments that help you grow </Text>
            </View>

            <View style={{position:"absolute", bottom:30, alignItems:"center"}}>
                <Text style={{color:"white", fontWeight:"200", textAlign:"center", paddingHorizontal:100}}>All rights reserved  (c) 2021</Text>
            </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LandingScreen;

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import React, {useEffect, useState} from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

//cuatom files
import { ww } from "../../responsive";


const CreatePlan = () => {

   const [isLoading, setIsLoading] = useState(true)
   const [plan, setPlan] = useState()

    const getPlans = async () => {
       try {
         let response = await axios.request('https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/plans');
         setPlan(response.data);
         setIsLoading(false)
       } catch (error) {
          console.log(error)
       }
    }

    useEffect(() => {
      getPlans()
    }, [])

    console.log(plan)

  return (
    <View style={{ marginTop: ww(40) }}>
      <View>
        <Text style={{ color: "#000", fontSize: ww(20), fontWeight: "500" }}>
          Create a Plan
        </Text>
        <Text style={{ color: "#71879C", fontSize: ww(18) }}>
          Start your investment journey by creating a plan"
        </Text>
      </View>

      {/* create plan */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: ww(10), marginTop: ww(20) }}
      >
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </ScrollView>
    </View>
  );
};

export default CreatePlan;

const PlanCard = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        height: ww(243),
        width: ww(200),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginHorizontal: ww(10),
        backgroundColor: "rgba(113, 135, 156, 0.10)",
      }}
      onPress={() => navigation.navigate("CreatePlanScreen")}
    >
      <View
        style={{
          borderRadius: 20,
          width: ww(48),
          justifyContent: "center",
          alignItems: "center",
          padding: ww(3),
          backgroundColor: "rgba(64, 187, 195, 0.15)",
          marginBottom: ww(10),
          alignSelf: "center",
        }}
      >
        <MaterialCommunityIcons name="plus" size={ww(42)} color="#0898A0" />
      </View>

      <Text
        style={{
          width: 121.4,
          fontSize: ww(14),
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        Create an investment plan
      </Text>
    </TouchableOpacity>
  );
};

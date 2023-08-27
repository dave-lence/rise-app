import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

// custom files
import Screen from "../../Components/Screen";
import { ww } from "../../responsive";
import PlanHeader from "./PlanHeader";
import Button from "../../Components/Button";

const ReviewScreen = ({ }) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  //const {investment, amount, date} = route.params
  const { params :{ investment, amount, date }} = useRoute() ;
  console.log(investment, amount, date);

  const createPlan = async ({}) => {

    axios
      .post(
        "https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1/plans",

        // body of request
        {
          plan_name: investment,
          target_amount: amount,
          maturity_date: date,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then(({ data }) => {
        const { token, ...rest } = data;
        const respData = { token, user: { ...rest } };
        dispatch(setUser(respData.user));
        AsyncStorage.setItem("user", JSON.stringify(respData.user));
        console.log("success", respData);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Screen style={{ flex: 1, paddingHorizontal: ww(20) }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <PlanHeader iconName={"arrow-left-thin"} title={"Review plan"} />

        {/* ventures */}
        <View style={{ alignItems: "center", marginTop: ww(40) }}>
          <Text style={{ color: "#94A1AD", fontSize: ww(12) }}>
            Kate ventures
          </Text>
          <Text
            style={{ fontSize: ww(24), marginTop: ww(10), fontWeight: "700" }}
          >
            $10,930.00
          </Text>
          <Text
            style={{
              fontSize: ww(15),
              fontWeight: "400",
              color: "#94A1AD",
              marginTop: ww(5),
            }}
          >
            by 20 June 2023
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: ww(20),
              width: ww(355),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#94A1AD",
                  marginRight: ww(5),
                }}
              ></View>
              <Text>Investment - $50,400</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#0898A0",
                  marginRight: ww(5),
                }}
              ></View>
              <Text>Returns - $20,400</Text>
            </View>
          </View>
        </View>

        {/* chart */}
        <Chart />

        {/* ESTIMATES MONTHLY INVESTMENT */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: ww(30),
          }}
        >
          <Text
            style={{ color: "#71879C", fontWeight: "400", fontSize: ww(15) }}
          >
            Estimated monthly investment
          </Text>
          <Text style={{ color: "#000", fontWeight: "500", fontSize: ww(15) }}>
            $120
          </Text>
        </View>

        {/* border */}
        <View
          style={{
            width: "100%",
            borderColor: "#71879C",
            borderWidth: 0.3,
            marginVertical: ww(30),
          }}
        ></View>

        {/* description and agreement */}
        <View
          style={{
            backgroundColor: "rgba(113, 135, 156, 0.3)",
            borderRadius: 5,
            padding: ww(15),
            flexDirection: "row",
            alignItems: "center",
            gap: ww(10),
          }}
        >
          <View
            style={{
              padding: ww(2),
              borderWidth: 2,
              borderColor: "rgba(8, 152, 160, 1)",
              borderRadius: 50,
            }}
          >
            <MaterialCommunityIcons
              name="exclamation"
              size={24}
              color="rgba(8, 152, 160, 1)"
            />
          </View>

          <Text
            style={{ color: "#71879C", lineHeight: ww(22), fontSize: ww(15) }}
          >
            Returns not guaranteed. Investing involves risk. Read our
            Disclosures.
          </Text>
        </View>

        <Text
          style={{
            color: "#71879C",
            fontSize: ww(15),
            lineHeight: ww(22),
            marginVertical: ww(30),
            width: ww(300),
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          These are your starting settings, they can always be updated.
        </Text>

        <Button
          loading={isLoading}
          onPress={() => {
            createPlan()
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              navigation.navigate("CreatePlanScuccesfulScreen");
            }, 5000);
          }}
          title={"Agree & Continue"}
          style={{ elevation: 8, width: ww(365), marginVertical: ww(10) }}
        />
        <Button
          title={"Start over"}
          textStyle={{ color: "rgba(8, 152, 160, 1)" }}
          style={{
            backgroundColor: "rgba(113, 135, 156, 0.10)",
            width: ww(365),
            marginVertical: ww(10),
            marginBottom: ww(40),
          }}
        />
      </ScrollView>
    </Screen>
  );
};

export default ReviewScreen;

const Chart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["2004", "2006", "2010", "2012", "2016", "2020", "2023"],
          datasets: [
            {
              data: [4000, 4000, 4000, 5000, 5000, 7000, 10000],
            },
          ],
        }}
        width={Dimensions.get("window").width - 35} // from react-native
        height={250}
        yAxisLabel={"$"}
        withVerticalLines={false}
        yAxisInterval={2} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",

          color: (opacity = 0.4) => `rgba(8, 152, 160, 1) ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "7",
            stroke: "#0898A0",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          marginTop: ww(30),
        }}
      />
    </View>
  );
};

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Chart from "../assets/img/cal.svg";

const CaloriesComponent = ({ setCalPage, cal, ingredient }) => {
  return (
    <>
      <View style={{ marginTop: "5%", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setCalPage()}
          style={{ alignSelf: "flex-end", paddingRight: 20 }}>
          <MaterialIcons name="close" size={45} color="#9F9494" />
        </TouchableOpacity>
        <View style={{ marginTop: "5%", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name={"local-fire-department"} size={30} color="#FF421D" style={{ marginHorizontal: 5 }} />
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#444349" }}>
              พลังงานทั้งหมด
            </Text>
          </View>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#FF6536", marginTop: 5 }}>
            {cal} Kcal
          </Text>
        </View>
        <View style={{ marginTop: "6%" }}>
          <Chart width={210} height={210} />
          <View style={{ position: "absolute", top: "40%", right: "10%", alignItems: "flex-end" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              คาร์โบไฮเดรต 35 g.
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{ backgroundColor: "#6993FF", width: 9, height: 9, borderRadius: 9 / 2, marginHorizontal: 5 }} />
              <Text style={{ color: "#616161", fontSize: 12, marginTop: "2%" }}>
                {ingredient.length} ingredients
              </Text>
            </View>
            <Text style={{ color: "#B4B4B4", fontSize: 8, marginTop: "2%" }}>
              ฟักทอง ข้าวโพด
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CaloriesComponent;

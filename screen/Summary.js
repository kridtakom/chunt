import React, { useState } from "react";
import { Image, ScrollView, Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import Bowl from "../assets/img/bowl.svg";
import Box from "../assets/img/box.svg";
import Card from "../assets/img/card.svg";
import Edit from "../assets/img/edit.svg";
import Baht from "../assets/img/baht.svg";
import Feather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { selectCard } from "../redux/cartSlice";
import { useNavigation } from "@react-navigation/native";

const Summary = () => {
  const navigation = useNavigation();
  const [btnSelect, setBtnSelect] = useState(1);
  const cart = useSelector(selectCard);
  const groupByType = (arr, key) => {
    return arr.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
  };
  const mainList = Object.values(groupByType(cart.filter((item) => item.type == "food" || item.type == "noodle"), "id"));
  const optionList = Object.values(groupByType(cart.filter((item) => item.type == "fruit" || item.type == "beverage"), "id"));
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <ScrollView style={{ paddingHorizontal: 20, flex: 1 }}>
      <View style={{ marginVertical: "10%" }}>
        <View>
          <Text style={styles.textHeader}>รายการสินค้าของคุณ</Text>
          <View style={{ marginVertical: "6%" }}>
            {mainList.map((main, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("MenuDetail", { food: main[0] })}
                key={index}
                style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: "2%" }}>
                <Image source={main[0].foodImg} style={{ width: 77, height: 75, borderRadius: 10 }} />
                <View style={{ width: "70%", justifyContent: "space-between" }}>
                  <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={styles.textGeneral}>{main[0].name}</Text>
                      <Text style={styles.textPrimary}>{main[0].price} B</Text>
                    </View>
                    <Text style={styles.subTextLight}>{main[0].ingredients.length} ingredients</Text>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.subText}>จำนวน</Text>
                    <Text style={styles.subText}>x {main.length}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {optionList.length > 0 ? (
          <View>
            <Text style={styles.textHeader}>สินค้าเพิ่มเติม (optional)</Text>
            <View style={{ marginVertical: "6%" }}>
              {optionList.map((option, index) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("MenuDetail", { food: option[0] })}
                  key={index}
                  style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: "2%" }}>
                  <Image source={option[0].foodImg}
                         style={{ width: 77, height: 75, borderRadius: 10 }} />
                  <View style={{ width: "70%", justifyContent: "space-between" }}>
                    <View>
                      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.textGeneral}>{option[0].name}</Text>
                        <Text style={styles.textPrimary}>{option[0].price} B</Text>
                      </View>
                      <Text style={styles.subTextLight}>optional</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={styles.subText}>จำนวน</Text>
                      <Text style={styles.subText}>x {option.length}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : null}
        <Text style={styles.textHeader}>เลือกวิธีการรับสินค้า</Text>
        <View style={{ marginVertical: "6%", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setBtnSelect(1)}
            style={{
              backgroundColor: btnSelect == 1 ? "#FF8267" : "#EDC4BB",
              borderRadius: 5,
            }}>
            <View style={styles.btnStyle}>
              <Bowl size={20} style={{ marginRight: 8 }} />
              <Text style={styles.btnText}>Bokbun</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setBtnSelect(2)}
            style={{
              backgroundColor: btnSelect == 2 ? "#FF8267" : "#EDC4BB",
              borderRadius: 5,
              marginHorizontal: "10%",
            }}>
            <View style={styles.btnStyle}>
              <Box size={20} style={{ marginRight: 8 }} />
              <Text style={styles.btnText}>Pick up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.payment}>
          <View style={styles.subPayment}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Card size={22} />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: "#525252", fontSize: 12, fontWeight: "500" }}>ABC Freedom</Text>
                <Text style={{ color: "#FF8267", fontSize: 12 }}>XXXX XXXX XX56</Text>
              </View>
            </View>
            <Edit size={10} />
          </View>
        </View>
        <TouchableOpacity style={styles.btnPay}>
          <View style={styles.btnSubPay}>
            <Text style={styles.btnPayText}>Pay </Text>
            <Baht size={20} style={{ marginLeft: 8, marginRight: 6 }} />
            <Text style={styles.btnPayText}> {totalPrice}</Text>
            <Feather name="arrow-right" size={18} color="white" style={{ marginLeft: "8%" }} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF8267",
  },
  textPrimary: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8267",
  },
  textGeneral: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#444349",
  },
  subTextLight: {
    color: "#B4B4B4",
    fontSize: 10,
  },
  subText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#A7A7A7",
  },
  btnText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  btnStyle: {
    marginVertical: 11,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  payment: {
    backgroundColor: "rgba(255, 130, 103, 0.15)",
    borderRadius: 10,
  },
  subPayment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "3%",
    paddingHorizontal: 20,
  },
  btnPay: {
    backgroundColor: "#FF8267",
    marginVertical: "3%",
    borderRadius: 10,
  },
  btnSubPay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "4%",
    borderRadius: 10,
  },
  btnPayText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },

});

export default Summary;

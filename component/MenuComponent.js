import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCard,
} from "../redux/cartSlice";

const MenuComponent = ({ setCalPage, food }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCard);
  const foodSelect = cart.filter(f => f.id == food.id);
  const count = foodSelect.length;
  const incrCount = () => {
    dispatch(addToCart(food));
  };
  const dcrCount = () => {
    dispatch(removeFromCart(food.id));
  };
  return (
    <>
      <View style={{ marginTop: "10%", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {food.name}
        </Text>
        <View style={{ marginTop: "3%", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => dcrCount()}
            style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#F5F7FA" }}>
            <Text style={{ margin: "4%" }}>-</Text>
          </TouchableOpacity>
          <View style={styles.input}>
            <Text style={{ fontSize: 18 }}>{count}</Text>
          </View>
          <TouchableOpacity
            onPress={() => incrCount()}
            style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#F5F7FA" }}>
            <Text style={{ margin: "4%" }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cal}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {food.ingredients.length} ingredients
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setCalPage()}
            style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ justifyContent: "center", marginHorizontal: "2%" }}>
              <MaterialIcons name={"local-fire-department"} size={25} color="#FF421D" />
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={{ color: "#FF6536", fontSize: 12 }}>
                ดูพลังงานทั้งหมด
              </Text>
              <Text style={{ fontSize: 12 }}>
                {food.calories} <Text style={{ fontWeight: "bold", fontSize: 14, color: "#444349" }}>Kcal</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: "5%" }}>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            {food.ingredients.map((ingredient, index) => (
              <View key={index} style={{ alignItems: "center", marginHorizontal: 8 }}>
                <Image source={ingredient.img}
                       style={{ width: 100, height: 100, borderRadius: 10 }} />
                <Text> {ingredient.name} </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    width: 106,
    alignItems: "center",
    justifyContent: "center",
  },
  cal: {
    height: 50,
    marginTop: "3%",
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MenuComponent;

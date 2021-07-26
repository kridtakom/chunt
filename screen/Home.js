import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CartComponent from "../component/cartComponent";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import foodData from "../data/FoodData";

const Home = () => {
  const menuList = [
    {
      id: 1,
      type: "all",
      name: "ทั้งหมด",
    },
    {
      id: 2,
      type: "food",
      name: "กับข้าว",
    },
    {
      id: 3,
      type: "noodle",
      name: "เมนูเส้น",
    },
    {
      id: 4,
      type: "fruit",
      name: "ผลไม้",
    },
    {
      id: 5,
      type: "beverage",
      name: "น้ำปานะ",
    },
  ];

  const navigation = useNavigation();
  const [text, onChangeText] = useState("");
  const [dataToShow, setDataToShow] = useState(foodData);
  const [selectMenu, setSelectMenu] = useState({ id: 1, type: "all", name: "ทั้งหมด" });
  const dispatch = useDispatch();

  useEffect(() => {
    let selectType = selectMenu.id != 1 ? foodData.filter(food => food.type == selectMenu.type) : foodData;
    setDataToShow(selectType);
  }, [selectMenu]);

  return (
    <>
      <ScrollView>
        <View
          style={{ paddingHorizontal: Dimensions.get("window").width * 0.06, marginTop: "10%", marginBottom: "25%" }}>
          <View>
            <Text style={styles.textHello}>Hello Chonticha</Text>
          </View>
          <View>
            <Text style={styles.textOrder}>let's order</Text>
          </View>
          <View style={{ marginTop: "10%" }}>
            <Icon
              name="search1"
              size={25}
              color="#FF8267"
              style={{ position: "absolute", alignSelf: "flex-end", top: "20%", right: "5%" }}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Search food"
            />
          </View>
          <View style={{ marginTop: "10%" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              {menuList.map((menu, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectMenu(menu)}>
                  <Text style={selectMenu.id == menu.id ? styles.textMenuSelected : styles.textMenu}>
                    {menu.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginTop: "10%" }}>
            {dataToShow.map((food, index) => (
              <View key={food.id} style={{ width: 150, marginVertical: "5%" }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MenuDetail", { food: food })}
                  style={{ justifyContent: "flex-end" }}>
                  <Image source={food.foodImg} style={{ width: 150, height: 220, borderRadius: 10 }} />
                  <View style={styles.foodImgDesc}>
                    <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
                      <View>
                        <Text style={{ color: "#444349", fontWeight: "bold", fontSize: 16 }}>
                          {food.name.length > 11 ? food.name.substr(0, 8) + "..." : food.name}
                        </Text>
                        <Text style={{ color: "#B4B4B4", fontSize: 10 }}>
                          {food.ingredients.length} ingredients
                        </Text>
                      </View>
                      <Text style={{ color: "#FF8267", fontWeight: "bold", fontSize: 16 }}>
                        {food.price} B
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={{ marginTop: "5%" }}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addToCart(food));
                    }}
                    style={styles.btnCart}>
                    <Text style={{ fontSize: 14, color: "white" }}>Add to Cart</Text>
                    <FontAwesome name="shopping-basket" size={18} color="white" style={{ marginLeft: 10 }} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <CartComponent />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  textMenu: {
    color: "#B4B4B4",
    fontSize: 14,
  },
  textMenuSelected: {
    color: "#FF8267",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  textHello: {
    color: "#FF8267",
    fontWeight: "bold",
    fontSize: 36,
  },
  textOrder: {
    color: "#444349",
    fontWeight: "normal",
    fontSize: 24,
  },
  foodImgDesc: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.84)",
    height: 60,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnCart: {
    backgroundColor: "#FF8267",
    width: "100%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});


export default Home;

import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { selectCard } from "../redux/cartSlice";

const CartComponent = ({ pressAction = null }) => {
  const cart = useSelector(selectCard);
  let totalPrice = cart.reduce((a, food) => a + food.price, 0);
  return (
    <>
      <TouchableOpacity
        onPress={pressAction && (pressAction)}
        activeOpacity={pressAction ? 0.5 : 1}
        style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.cartList}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="shopping-basket" size={16} color="white" style={{ marginHorizontal: 10 }} />
              <Text style={{ fontSize: 16, color: "white" }}>
                {cart.length} รายการ
              </Text>
            </View>
          </View>
          <View style={styles.priceList}>
            <Text style={{ fontSize: 16, color: "white" }}>
              {totalPrice} Baht
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5A7E50",
    width: "75%",
    height: 65,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    bottom: 30,
    borderRadius: 20,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cartList: {
    alignItems: "center",
    width: "50%",
    borderRightWidth: 1,
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, 0.23)",
    height: 30,
  },
  priceList: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.23)",
    height: 30,
  },
});

export default CartComponent;

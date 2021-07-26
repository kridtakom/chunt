import React, { useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import CartComponent from "../component/cartComponent";
import MenuComponent from "../component/MenuComponent";
import CaloriesComponent from "../component/CaloriesComponent";
import { useNavigation } from "@react-navigation/native";

const MenuDetail = ({ route }) => {
  const { food } = route.params;
  const [isCalories, setIsCalories] = useState(false);
  const navigation = useNavigation();
  const setCalPage = () => {
    setIsCalories(!isCalories);
  };
  return (
    <>
      <ImageBackground
        source={food.foodImg}
        style={styles.image}
        imageStyle={{ resizeMode: "stretch" }}>
      </ImageBackground>
      <View style={{
        width: "100%",
        height: Dimensions.get("window").height * 0.65,
        backgroundColor: "white",
        borderTopLeftRadius: 120,
      }}>
        {!isCalories ?
          <>
            <MenuComponent setCalPage={setCalPage} food={food} />
            <CartComponent pressAction={() => navigation.navigate("Summary")} />
          </> :
          <CaloriesComponent setCalPage={setCalPage} cal={food.calories} ingredient={food.ingredients} />
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "stretch",
    height: 430,
  },
});

export default MenuDetail;

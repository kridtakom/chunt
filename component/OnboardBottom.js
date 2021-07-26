import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import data from "../data/OnboardingData";
import { useNavigation } from "@react-navigation/native";
import window from "@react-navigation/native/src/__mocks__/window";

const SIZES = { base: 10 };
const COLORS = {
  primary: "#FF8267",
  black: "#171717",
  white: "#FFFFFF",
  background: "#FFFFFF",
  gray: "#898A8D",
  lightGray: "#E1E1E1",
};

const OnboardBottom = ({ currentPage, handleNext }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {
          data.map((obData, index) => (
            <View
              key={index}
              style={[styles.pagingDot, {
                backgroundColor: index == currentPage
                  ? COLORS.gray
                  : COLORS.lightGray,
              }]}
            />
          ))
        }
      </View>
      {
        currentPage != data.length - 1 ? (
          <TouchableOpacity
            onPress={() => handleNext()}
            style={styles.btnNext}
            activeOpacity={0.8}>
            <AntDesignIcons name="right" style={{ fontSize: 25, color: COLORS.white }} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btnGetStart}>
            <Text style={styles.textGetStart}>Get Started</Text>
            <AntDesignIcons name="right" style={{ fontSize: 25, color: "white", marginLeft: SIZES.base }} />
          </TouchableOpacity>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  btnNext: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
  },
  btnGetStart: {
    paddingHorizontal: SIZES.base * 2,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textGetStart: {
    color: COLORS.white,
    fontSize: 18,
    marginLeft: SIZES.base,
  },
  pagingDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    paddingVertical: Dimensions.get("window").height * 0.009,
    //backgroundColor: "blue",
  },
});

export default OnboardBottom;

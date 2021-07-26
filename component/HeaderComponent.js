import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const HeaderComponent = ({ textHeader, back = true }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        {back && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              zIndex: 1,
              flexDirection: "row",
              paddingLeft: 20,
              paddingRight: 15,
            }}>
            <Icon name="arrow-left" size={20} color="#900" />
          </TouchableOpacity>
        )}
        <View style={styles.styleViewCenter}>
          <Text style={styles.frontHeader}>
            {textHeader}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    backgroundColor: "#FDD2BF",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  frontHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#492F10",
  },
  styleViewCenter: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default HeaderComponent;

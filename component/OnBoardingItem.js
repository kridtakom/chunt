import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  PixelRatio,
} from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const OnBoardingItem = ({ item, prev, current }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.headerContainer}>
        {
          current != 0 ?
            <TouchableOpacity onPress={() => prev()} style={styles.btnPrev}>
              <AntDesignIcons name="left" style={{ fontSize: 20, color: "white" }} />
            </TouchableOpacity> : null
        }
        {
          current != 2 ?
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={[styles.btnSkip, { left: current == 0 ? Dimensions.get("window").width / 1.45 : 0 }]}>
              <Text style={{ color: "white", fontSize: 16, margin: "8%" }}>Skip</Text>
            </TouchableOpacity>
            : null
        }
      </View>
      <View style={{ flex: 0.75 }}>
        <Image source={item.img} style={styles.image} />
      </View>
      <View style={{ flex: 0.25 }}>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#444349",
  },
  description: {
    fontSize: 16,
    color: "#000000",
    marginTop: "4%",
  },
  content: {
    paddingHorizontal: Dimensions.get("window").width * 0.04,
    justifyContent: "center",
  },
  headerContainer: {
    position: "absolute",
    top: 20,
    zIndex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  btnPrev: {
    backgroundColor: "rgba(255, 255, 255, 0.46)",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  btnSkip: {
    backgroundColor: "rgba(255, 255, 255, 0.46)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});

export default OnBoardingItem;

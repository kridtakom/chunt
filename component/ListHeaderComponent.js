import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ListHeaderComponent = (props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "rgba(255, 255, 255, 0.46)", borderRadius: 12, alignItems: "flex-end" }}>
      <Text style={{ margin: 15, color: "black", fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
  );
};

export default ListHeaderComponent;

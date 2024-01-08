import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  sortTitle: string;
  sortDescription: string;
};
const RestaurantListHeader: React.FC<Props> = ({
  sortTitle,
  sortDescription,
}) => {
  return (
    <View style={s.container}>
      <View>
        <Text style={s.sortTitle}>{sortTitle}</Text>
        <Text style={s.sortDescription}>{sortDescription}</Text>
      </View>
      <AntDesign name="arrowright" size={24} color="#00CCBB" />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sortTitle: {
    fontWeight: "bold",
    fontSize: 18,

    color: "#1d1d1f",
  },
  sortDescription: {
    color: "#6e6e73",
  },
});

export default RestaurantListHeader;

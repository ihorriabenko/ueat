import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
  restaurantName: string;
};
const BasketHeader: React.FC<Props> = ({ restaurantName }) => {
  const navigation = useNavigation();

  return (
    <View style={s.container}>
      <View></View>
      <View style={s.titleWrapper}>
        <Text style={s.basket}>Basket</Text>
        <Text style={s.title}>{restaurantName}</Text>
      </View>
      <TouchableOpacity style={s.button} onPress={() => navigation.goBack()}>
        <Ionicons name="ios-close" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "android" ? 30 : 15,
    marginBottom: 20,

    backgroundColor: "#fff",
  },
  basket: {
    marginBottom: 3,

    fontSize: 18,
    fontWeight: "bold",

    color: "#1d1d1f",
  },
  titleWrapper: {
    alignItems: "center",
  },
  title: {
    color: "#6e6e73",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",

    width: 35,
    height: 35,
    borderRadius: 9999,

    backgroundColor: "#00CCBB",
  },
});

export default BasketHeader;

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  uri: string;
};
const CategoryCard: React.FC<Props> = ({ title, uri }) => {
  const navigation = useNavigation();

  return (
    <View style={s.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SearchedRestaurant", { category: title })
        }
      >
        <Image source={{ uri: `${uri}` }} style={s.img} />
      </TouchableOpacity>
      <Text style={s.text}>{title}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  img: {
    borderRadius: 10,
    width: 72,
    height: 72,
  },
  text: {
    fontWeight: "bold",
    color: "#000",
  },
});

export default CategoryCard;

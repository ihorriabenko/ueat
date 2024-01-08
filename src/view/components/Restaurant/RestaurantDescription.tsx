import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  rating: string;
  genre: string;
  address: string;
  description: string;
};
const RestaurantDescription: React.FC<Props> = ({
  title,
  rating,
  genre,
  address,
  description,
}) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>{title}</Text>
      <View style={s.descriptionWrapper}>
        <Ionicons style={s.icon} name="star" size={18} color="#00ab6b80" />
        <Text style={s.rating}>{rating}</Text>
        <Text style={s.category}>{genre}</Text>
        <SimpleLineIcons
          style={s.icon}
          name="location-pin"
          size={18}
          color="#0000008f"
        />
        <Text style={s.address}>{address}</Text>
      </View>
      <Text>{description}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 15,

    borderBottomWidth: 1,

    borderBottomColor: "#f5f5f7",
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 5,

    fontSize: 28,
    fontWeight: "bold",

    color: "#1d1d1f",
  },
  descriptionWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",

    marginBottom: 4,
  },
  icon: {
    marginRight: 4,
  },
  rating: {
    marginRight: 2,
  },
  category: {
    marginRight: 5,
  },
  address: {
    fontWeight: "500",
    color: "#6e6e73",
  },
});

export default RestaurantDescription;

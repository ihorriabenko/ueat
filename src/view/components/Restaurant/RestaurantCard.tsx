import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Restaurant } from "../../../lib/types/restaurant";

type Props = Restaurant & {
  imageWidth?: number | "auto";
  imageHeight?: number;
};
const RestaurantCard: React.FC<Props> = (props) => {
  const {
    _id,
    title,
    description,
    uri,
    address,
    dishes,
    category,
    rating,
    lon,
    lat,
    imageWidth = 250,
    imageHeight = 150,
  } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { ...props })}
    >
      <Image
        source={{ uri: `${uri}` }}
        style={{
          width: imageWidth,
          height: imageHeight,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      />
      <View style={s.descriptionWrapper}>
        <Text style={s.title}>{title}</Text>
        <View style={s.ratingCategoryWrapper}>
          <Ionicons style={s.icon} name="star" size={18} color="#00ab6b80" />
          <Text style={s.ratingCategory}>{rating}</Text>
          <Text style={s.ratingCategory}> · {category}</Text>
        </View>
        <View style={s.locationWrapper}>
          <SimpleLineIcons
            style={s.icon}
            name="location-pin"
            size={18}
            color="#0000008f"
          />
          <Text style={s.address}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  icon: {
    marginRight: 4,
  },
  descriptionWrapper: {
    padding: 12,

    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,

    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 4,

    fontWeight: "bold",
    fontSize: 18,

    color: "#1d1d1f",
  },
  ratingCategoryWrapper: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 2,
  },
  ratingCategory: {
    fontWeight: "500",
    color: "#6e6e73",
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  address: {
    fontWeight: "500",
    color: "#6e6e73",
  },
});

export default RestaurantCard;

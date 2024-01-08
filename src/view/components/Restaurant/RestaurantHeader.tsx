import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import ButtonBack from "../reusable/ButtonBack";

type Props = {
  uri: string;
};

const RestaurantHeader: React.FC<Props> = ({ uri }) => {
  return (
    <View style={s.imageWrapper}>
      <Image style={s.image} source={{ uri: `${uri}` }} />
      <TouchableOpacity style={s.buttonBackWrapper}>
        <ButtonBack />
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  imageWrapper: {
    position: "relative",
  },
  image: {
    flex: 1,
    height: 200,
  },
  buttonBackWrapper: {
    position: "absolute",
    top: 50,
    left: 15,

    justifyContent: "center",
    alignItems: "center",

    width: 34,
    height: 34,
    borderRadius: 99,
    backgroundColor: "#f5f5f7",
  },
});

export default RestaurantHeader;

import React from "react";
import { StyleSheet, View } from "react-native";

import ButtonBack from "../reusable/ButtonBack";
import SearchBar from "../reusable/SearchBar";

const SearchedRestaurantHeader = () => {
  return (
    <View style={s.container}>
      <View style={s.buttonBackWrapper}>
        <ButtonBack />
      </View>
      <SearchBar />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonBackWrapper: {
    marginRight: 5,
  },
});

export default SearchedRestaurantHeader;

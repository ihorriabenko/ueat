import { useRef, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [restaurantTitle, setRestaurantTitle] = useState("");
  const navigation = useNavigation();
  const inputRef = useRef<TextInput>(null);

  const handleSearchPress = () => {
    if (!restaurantTitle) {
      inputRef.current?.focus();
    } else {
      setRestaurantTitle("");
      navigation.navigate("SearchedRestaurant", { title: restaurantTitle });
    }
  };

  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        ref={inputRef}
        value={restaurantTitle}
        onChangeText={(text) => setRestaurantTitle(text)}
        placeholder={"Restaurants and cuisines"}
        enterKeyHint={"search"}
        onSubmitEditing={handleSearchPress}
      />
      <TouchableOpacity onPress={handleSearchPress}>
        <Ionicons name="ios-search" size={28} color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,

    marginRight: 10,

    paddingVertical: 14,
    paddingHorizontal: 10,

    color: "#1d1d1f",
    backgroundColor: "#f5f5f7",
  },
});

export default SearchBar;

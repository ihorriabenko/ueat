import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import SearchBar from "../reusable/SearchBar";

const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: 12,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
      }}
    >
      <View style={s.wrapper}>
        <Image
          style={s.image}
          source={require("../../../../assets/images/wru.png")}
        />
        <View>
          <Text style={s.textName}>uEat</Text>
          <Text style={s.textDescription}>Delivery Now!</Text>
        </View>
      </View>
      <SearchBar />
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 12,
  },
  image: {
    marginRight: 10,

    width: 40,
    height: 40,
    borderRadius: 99,

    backgroundColor: "#f5f5f7",
  },
  textName: {
    fontWeight: "bold",
    fontSize: 20,

    color: "#1d1d1f",
  },
  textDescription: {
    fontWeight: "bold",
    color: "#6e6e73",
  },
});

export default HomeHeader;

import { Image, StyleSheet, Text, View } from "react-native";

const DeliverTime = () => {
  return (
    <View style={s.container}>
      <View style={s.imgWrapper}>
        <Image
          source={require("../../../../assets/images/wru.png")}
          style={s.img}
        />
        <Text style={s.text}>Deliver in 45-55 min</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,

    backgroundColor: "#fff",
  },
  imgWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    marginRight: 10,

    width: 40,
    height: 40,
    borderRadius: 99,

    backgroundColor: "#f5f5f7",
  },
  text: {
    fontSize: 15,

    color: "#1d1d1f",
  },
});

export default DeliverTime;

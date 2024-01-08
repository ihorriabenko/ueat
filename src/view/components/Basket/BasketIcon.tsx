import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../../lib/hooks/useAppSelector";
import { selectDishesLength, selectBasketTotal } from "../../../state/basketSlice";

const BasketIcon = () => {
  const dishesLength = useAppSelector(selectDishesLength);
  const basketTotal = useAppSelector(selectBasketTotal);
  const navigation = useNavigation();

  if (!dishesLength) return null;

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.button}
        onPress={() => navigation.navigate("Basket")}
      >
        <View style={s.itemsBasketWrapper}>
          <Text style={s.itemsBasket}>{dishesLength}</Text>
        </View>
        <Text style={s.viewBasket}>View Basket</Text>
        <Text style={s.totalBasket}>${basketTotal.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,

    width: "100%",
    paddingHorizontal: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 15,
    paddingHorizontal: 15,

    borderRadius: 10,

    backgroundColor: "#00CCBB",
  },
  itemsBasketWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 5,

    borderRadius: 4,

    backgroundColor: "#3b3535",
  },
  itemsBasket: {
    fontSize: 18,
    fontWeight: "bold",

    color: "#fff",
  },
  viewBasket: {
    fontSize: 18,
    fontWeight: "bold",

    color: "#fff",
  },
  totalBasket: {
    fontSize: 18,
    fontWeight: "bold",

    color: "#fff",
  },
});

export default BasketIcon;

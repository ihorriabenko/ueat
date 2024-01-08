import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dish } from "../../../lib/types/restaurant";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch";
import { removeFromBasket } from "../../../state/basketSlice";

type Props = {
  id: string;
  dishes: Dish[];
};
const BasketItemCard: React.FC<Props> = ({ id, dishes }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={s.container}>
      <View style={s.infoWrapper}>
        <Text style={s.quantity}>{dishes.length} x </Text>
        <Image style={s.img} source={{ uri: `${dishes[0].uri}` }} />
        <Text style={s.name}>{dishes[0].name}</Text>
      </View>
      <View style={s.priceWrapper}>
        <Text style={s.price}>${dishes[0].price}</Text>
        <TouchableOpacity onPress={() => dispatch(removeFromBasket(id))}>
          <Text style={s.button}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 10,
    paddingHorizontal: 15,

    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f7",

    backgroundColor: "#fff",
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    color: "#00CCBB",
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  name: {
    color: "#1d1d1f",
  },
  priceWrapper: {
    flexDirection: "row",
  },
  price: {
    marginRight: 5,

    color: "#1d1d1f",
  },
  button: {
    color: "#00CCBB",
  },
});

export default BasketItemCard;

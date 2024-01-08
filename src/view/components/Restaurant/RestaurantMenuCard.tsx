import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { useAppDispatch } from "../../../lib/hooks/useAppDispatch";
import { useAppSelector } from "../../../lib/hooks/useAppSelector";
import {
  addToBasket,
  removeFromBasket,
  selectDishQuantity,
} from "../../../state/basketSlice";

type Props = {
  _id: string;
  name: string;
  description: string;
  price: number;
  uri: string;
};
const RestaurantMenuCard: React.FC<Props> = (props) => {
  const { _id, name, price, description, uri } = props;
  const [isShowButton, setIsShowButton] = useState(false);
  const dispatch = useAppDispatch();
  const dishQuantity = useAppSelector((state) =>
    selectDishQuantity(state, _id),
  );

  const addItemToBasket = () => {
    dispatch(addToBasket({ ...props }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(_id));
  };

  return (
    <View>
      <TouchableOpacity
        style={s.container}
        onPress={() => setIsShowButton(!isShowButton)}
      >
        <View>
          <Text style={s.name}>{name}</Text>
          <Text style={s.description}>{description}</Text>
          <Text style={s.price}>${price}</Text>
        </View>
        <Image style={s.img} source={{ uri: `${uri}` }} />
      </TouchableOpacity>
      {isShowButton && (
        <View style={s.btnWrapper}>
          <TouchableOpacity
            style={dishQuantity ? s.btnCount : s.btnCountDisabled}
            onPress={removeItemFromBasket}
            disabled={!dishQuantity}
          >
            <Entypo name="minus" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={s.countText}>{dishQuantity}</Text>
          <TouchableOpacity style={s.btnCount} onPress={addItemToBasket}>
            <Entypo name="plus" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 15,
    paddingVertical: 15,

    borderBottomWidth: 1,

    borderColor: "#f5f5f7",
    backgroundColor: "#fff",
  },
  name: {
    marginBottom: 5,

    fontSize: 18,
    fontWeight: "500",
    color: "#1d1d1f",
  },
  description: {
    marginBottom: 5,

    maxWidth: 250,

    color: "#6e6e73",
  },
  price: {
    marginBottom: 10,

    color: "#00CCDD",
  },
  img: {
    width: 70,
    height: 70,
  },
  btnWrapper: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
    paddingHorizontal: 15,

    backgroundColor: "f5f5f7",
  },
  btnCount: {
    justifyContent: "center",
    alignItems: "center",

    width: 25,
    height: 25,
    borderRadius: 99,

    backgroundColor: "#00CCDD",
  },
  btnCountDisabled: {
    justifyContent: "center",
    alignItems: "center",

    width: 25,
    height: 25,
    borderRadius: 99,

    backgroundColor: "#6e6e73",
  },
  countText: {
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
});

export default RestaurantMenuCard;

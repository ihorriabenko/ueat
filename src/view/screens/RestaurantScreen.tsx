import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import RestaurantHeader from "../components/Restaurant/RestaurantHeader";
import RestaurantDescription from "../components/Restaurant/RestaurantDescription";
import RestaurantMenuCard from "../components/Restaurant/RestaurantMenuCard";
import BasketIcon from "../components/Basket/BasketIcon";

import { useAppDispatch } from "../../lib/hooks/useAppDispatch";
import { setRestaurant } from "../../state/basketSlice";

import {
  RootStackParamList,
  NativeStackScreenProps,
} from "../../lib/types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Restaurant">;
const RestaurantScreen: React.FC<Props> = ({ route }) => {
  const {
    params: {
      _id,
      uri,
      rating,
      category,
      lat,
      lon,
      dishes,
      title,
      description,
      address,
    },
  } = route;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        _id,
        title,
        description,
        lat,
        lon,
        dishes: [],
      }),
    );
    setIsLoading(true);
  }, []);

  if (!isLoading) return null;

  return (
    <React.Fragment>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={
          <React.Fragment>
            <RestaurantHeader uri={uri} />
            <RestaurantDescription
              title={title}
              rating={rating}
              genre={category}
              address={address}
              description={description}
            />
            <View style={s.sectionWrapper}>
              <Text style={s.sectionText}>Menu</Text>
            </View>
          </React.Fragment>
        }
        renderItem={({ item }) => (
          <RestaurantMenuCard
            _id={item._id}
            name={item.name}
            price={item.price}
            uri={item.uri}
            description={item.description}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      />
      <BasketIcon />
    </React.Fragment>
  );
};

const s = StyleSheet.create({
  sectionWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15,

    backgroundColor: "#f5f5f7",
  },
  sectionText: {
    fontSize: 19,
    fontWeight: "bold",

    color: "#1d1d1f",
  },
});

export default RestaurantScreen;

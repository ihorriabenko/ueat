import { FlatList, StyleSheet, View } from "react-native";
import { useAppSelector } from "../../lib/hooks/useAppSelector";
import { selectRestaurant } from "../../state/basketSlice";
import BasketHeader from "../components/Basket/BasketHeader";
import DeliverTime from "../components/Delivery/DeliverTime";
import BasketItemCard from "../components/Basket/BasketItemCard";
import PlaceOrder from "../components/Order/PlaceOrder";
import { useMemo, useState } from "react";
import { Dish } from "../../lib/types/restaurant";

const BasketScreen = () => {
  const [groupedBasketItems, setGroupedBasketItems] = useState<
    { [key: string]: Dish[] } | []
  >([]);
  const restaurant = useAppSelector(selectRestaurant);
  const basketItems = restaurant.dishes;

  useMemo(() => {
    const groupedItems = basketItems.reduce(
      (results: { [key: string]: typeof basketItems }, item) => {
        (results[item._id] = results[item._id] || []).push(item);
        return results;
      },
      {},
    );

    setGroupedBasketItems(groupedItems);
  }, [basketItems]);

  return (
    <View style={s.container}>
      <View style={s.heroWrapper}>
        <BasketHeader restaurantName={restaurant.title} />
        <DeliverTime />
        <FlatList
          data={Object.entries(groupedBasketItems)}
          keyExtractor={([key]) => key}
          renderItem={({ item }) => (
            <BasketItemCard id={item[0]} dishes={item[1]} />
          )}
          contentContainerStyle={{ paddingBottom: 400 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={s.placeOrderWrapper}>
        <PlaceOrder restaurant={restaurant} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroWrapper: {
    backgroundColor: "#f5f5f7",
  },
  placeOrderWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BasketScreen;

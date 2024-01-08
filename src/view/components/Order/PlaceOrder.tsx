import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import { useAppSelector } from "../../../lib/hooks/useAppSelector";
import { Restaurant, selectBasketTotal } from "../../../state/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { postOrder } from "../../../lib/api/order";

const PlaceOrder = ({ restaurant }: { restaurant: Restaurant }) => {
  const navigation = useNavigation();
  const inserts = useSafeAreaInsets();
  const basketTotal = useAppSelector(selectBasketTotal);

  const handlePress = async () => {
    const ids = restaurant.dishes.map((item) => item._id);
    await postOrder({ restaurantId: restaurant._id, dishes: [...ids] });
  };

  return (
    <View style={s.container}>
      <View style={{ paddingBottom: Platform.OS === 'ios' ? inserts.bottom : 10 }}>
        <View style={s.wrapper}>
          <Text style={s.subtotal}>Subtotal</Text>
          <Text style={s.basketTotal}>${basketTotal.toFixed(2)}</Text>
        </View>
        <View style={s.wrapper}>
          <Text style={s.fee}>Delivery Fee</Text>
          <Text style={s.feePrice}>$5.99</Text>
        </View>
        <View style={s.wrapper}>
          <Text style={s.orderTotal}>Order Total</Text>
          <Text style={s.orderTotalPrice}>
            ${(basketTotal + 5.99).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={[s.button, !basketTotal && { backgroundColor: "#6e6e73" }]}
          onPress={async () => {
            await handlePress();
            navigation.navigate("PreparingOrder");
          }}
          disabled={!basketTotal}
        >
          <Text style={s.order}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,

    backgroundColor: "#fff",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 10,
  },
  subtotal: {
    fontSize: 15,
    color: "#6e6e73",
  },
  basketTotal: {
    fontSize: 15,
    color: "#6e6e73",
  },
  fee: {
    fontSize: 15,
    color: "#6e6e73",
  },
  feePrice: {
    fontSize: 15,
    color: "#6e6e73",
  },
  orderTotal: {
    fontSize: 15,
    fontWeight: "bold",

    color: "#1d1d1f",
  },
  orderTotalPrice: {
    fontSize: 15,
    fontWeight: "bold",

    color: "#1d1d1f",
  },
  button: {
    alignItems: "center",

    marginTop: 5,
    paddingVertical: 15,

    width: "100%",
    borderRadius: 6,

    backgroundColor: "#00CCBB",
  },
  order: {
    fontSize: 16,
    fontWeight: "bold",

    color: "#fff",
  },
});

export default PlaceOrder;

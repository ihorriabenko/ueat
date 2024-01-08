import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Dish } from "../lib/types/restaurant";

export type Restaurant = {
  _id: string;
  title: string;
  description: string;
  lat: number;
  lon: number;
  dishes: Dish[];
};

type InitialState = {
  targetRestaurantIndex: number;
  baskets: Restaurant[];
};

const initialState: InitialState = {
  targetRestaurantIndex: 0,
  baskets: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
      let restaurantIndex = state.baskets.findIndex(
        (item) => item._id === action.payload._id
      );

      if (~restaurantIndex) {
        state.targetRestaurantIndex = restaurantIndex;
      } else {
        state.baskets.push(action.payload);
        state.targetRestaurantIndex = state.baskets.length - 1;
      }
    },
    addToBasket: (state, action: PayloadAction<Dish>) => {
      state.baskets[state.targetRestaurantIndex].dishes.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const restaurantIndex = state.targetRestaurantIndex;

      const index = state.baskets[restaurantIndex].dishes.findIndex(
        (item) => item._id === action.payload
      );
      if (~index) state.baskets[restaurantIndex].dishes.splice(index, 1);
    },
    clearBasket: (state) => {
      state.baskets[state.targetRestaurantIndex].dishes = [];
    },
  },
});

export const { setRestaurant, addToBasket, removeFromBasket, clearBasket } =
  basketSlice.actions;

export const selectRestaurant = (state: RootState) =>
  state.basket.baskets[state.basket.targetRestaurantIndex];

export const selectDishQuantity = (state: RootState, id: string) => {
  const basket = state.basket.baskets[state.basket.targetRestaurantIndex];
  return basket.dishes.filter((item) => item._id === id).length;
};

export const selectDishesLength = (state: RootState) =>
  state.basket.baskets[state.basket.targetRestaurantIndex].dishes.length;

export const selectBasketTotal = (state: RootState) => {
  const total = state.basket.baskets[
    state.basket.targetRestaurantIndex
  ].dishes.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return total;
};

export default basketSlice.reducer;

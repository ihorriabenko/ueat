import { Restaurant } from "./restaurant";

export type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: Restaurant;
  Basket: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
  SearchedRestaurant: {
    title?: string;
    category?: string;
  };
  NotFound: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

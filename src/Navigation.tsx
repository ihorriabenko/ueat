import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./view/screens/HomeScreen";
import RestaurantScreen from "./view/screens/RestaurantScreen";
import BasketScreen from "./view/screens/BasketScreen";
import PreparingOrderScreen from "./view/screens/PreparingOrderScreen";
import DeliveryScreen from "./view/screens/DeliveryScreen";
import SearchedRestaurantScreen from "./view/screens/SearchedRestaurantScreen";

import { RootStackParamList } from "./lib/types/navigation";
import { NotFoundScreen } from "./view/screens/NotFoundScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const NativeStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"SearchedRestaurant"} component={SearchedRestaurantScreen} />
        <Stack.Screen name={"Restaurant"} component={RestaurantScreen} />
        <Stack.Screen
          name={"Basket"}
          component={BasketScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen
          name={"PreparingOrder"}
          component={PreparingOrderScreen}
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen
          name={"Delivery"}
          component={DeliveryScreen}
          options={{ presentation: "fullScreenModal" }}
        />
        <Stack.Screen name={"NotFound"} getComponent={() => NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NativeStackNavigation;

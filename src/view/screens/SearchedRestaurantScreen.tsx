import { FlatList, StyleSheet, View, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RestaurantCard from "../components/Restaurant/RestaurantCard";

import SearchedRestaurantHeader from "../components/Restaurant/SearchedRestaurantHeader";

import { Restaurant } from "../../lib/types/restaurant";
import { NativeStackScreenProps, RootStackParamList } from "../../lib/types/navigation";

import { getSpecificRestaurants } from "../../lib/api/restaurant";
import RenderLoading from "../components/reusable/RenderLoading";

type Props = NativeStackScreenProps<RootStackParamList, "SearchedRestaurant">;
const SearchedRestaurantScreen: React.FC<Props> = ({ route }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const restaurantData = await getSpecificRestaurants(route.params);
        setRestaurants(restaurantData);
      } catch (error) {
        throw new Error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [route.params]);

  return (
    <React.Fragment>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: 12,
          paddingHorizontal: 15,
          backgroundColor: "#fff",
        }}
      >
        <SearchedRestaurantHeader />
      </View>
      {isLoading ? (
          <RenderLoading />
        ) : (
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginBottom: index === restaurants.length - 1 ? 0 : 15,
              }}
            >
              <RestaurantCard {...item} imageWidth={"auto"} imageHeight={200} />
            </View>
          )}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : 10,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </React.Fragment>
  );
};

const s = StyleSheet.create({});

export default SearchedRestaurantScreen;

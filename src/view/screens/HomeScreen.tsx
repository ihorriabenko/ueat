import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import HomeHeader from "../components/Home/HomeHeader";
import CategoryList from "../components/Category/CategoryList";
import RestaurantCardList from "../components/Restaurant/RestaurantCardList";

import { getSortedRestaurants } from "../../lib/api/restaurant";
import { getCategories } from "../../lib/api/categories";

import { SortedRestaurants } from "../../lib/types/restaurant";
import { Category } from "../../lib/types/category";
import RenderLoading from "../components/reusable/RenderLoading";

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [sortedRestaurants, setSortedRestaurants] = useState<SortedRestaurants[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const restaurantData = await getSortedRestaurants();
        setSortedRestaurants(restaurantData);
        const categoryData = await getCategories();
        setCategories(categoryData);
      } catch (error) {
        throw new Error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <HomeHeader />
      <View style={{ backgroundColor: "#f5f5f7" }}>
        {isLoading ? (
          <RenderLoading />
        ) : (
          <>
            <CategoryList categories={categories} />
            <RestaurantCardList sortedRestaurants={sortedRestaurants} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

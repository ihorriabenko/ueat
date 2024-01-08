import React from "react";
import { FlatList, View, Platform } from "react-native";

import RestaurantListHeader from "./RestaurantListHeader";
import RestaurantCard from "./RestaurantCard";

import { SortedRestaurants } from "../../../lib/types/restaurant";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  sortedRestaurants: SortedRestaurants[];
};

const RestaurantCardList: React.FC<Props> = ({ sortedRestaurants }) => {
  const insets = useSafeAreaInsets();

  const renderSortedRestaurants = sortedRestaurants.map(
    ({ sortTitle, sortDescription, data }) => (
      <React.Fragment key={sortTitle}>
        <RestaurantListHeader
          sortTitle={sortTitle}
          sortDescription={sortDescription}
        />
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => (
            <View style={{ marginRight: index === data.length - 1 ? 0 : 10 }}>
              <RestaurantCard {...item} />
            </View>
          )}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </React.Fragment>
    ),
  );

  return (
    <View style={{ paddingBottom: Platform.OS === 'ios' ? insets.bottom : 10 }}>
      {renderSortedRestaurants}
    </View>
  );
};

export default RestaurantCardList;

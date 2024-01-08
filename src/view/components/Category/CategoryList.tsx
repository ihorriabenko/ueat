import React from "react";
import { FlatList, View } from "react-native";

import CategoryCard from "./CategoryCard";

import { Category } from "../../../lib/types/category";

type Props = {
  categories: Category[];
};
const CategoryList: React.FC<Props> = ({ categories }) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => (
        <View style={{ marginRight: index === categories.length - 1 ? 0 : 9 }}>
          <CategoryCard title={item.title} uri={item.uri} />
        </View>
      )}
      keyExtractor={(item) => item._id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    />
  );
};

export default CategoryList;

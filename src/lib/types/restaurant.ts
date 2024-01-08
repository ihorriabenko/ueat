export type Restaurant = {
  _id: string;
  title: string;
  description: string;
  address: string;
  category: string;
  sort: string;
  rating: string;
  uri: string;
  lat: number;
  lon: number;
  dishes: Dish[];
};

export type Dish = {
  _id: string;
  name: string;
  description: string;
  price: number;
  uri: string;
};

export type SortedRestaurants = {
  sortTitle: string;
  sortDescription: string;
  data: Restaurant[];
};

export type Specific = {
  title?: string;
  category?: string;
};

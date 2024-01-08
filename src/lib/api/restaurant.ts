import { Restaurant, SortedRestaurants, Specific } from "../types/restaurant";

export const getSortedRestaurants = async (): Promise<SortedRestaurants[]> => {
  const data = await fetch("https://ueat.onrender.com/restaurants/sorted");
  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  const restaurants = await data.json();
  return restaurants;
};

export const getSpecificRestaurants = async (
  specific: Specific
): Promise<Restaurant[]> => {
  const data = await fetch("https://ueat.onrender.com/restaurants/specific", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(specific),
  });
  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  const restaurants = await data.json();
  return restaurants;
};

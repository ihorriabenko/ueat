import { Category } from "../types/category";

export const getCategories = async (): Promise<Category[]> => {
    const data = await fetch("https://ueat.onrender.com/categories");
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const categories = await data.json();
    return categories;
};
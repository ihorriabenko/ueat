interface Order {
  restaurantId: string;
  dishes: string[];
}

export const postOrder = async (order: Order) => {
  try {
    await fetch("https://ueat.onrender.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  } catch (error) {
    console.log(error);
  }
};

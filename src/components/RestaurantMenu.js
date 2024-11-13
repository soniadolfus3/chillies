import React from "react";
import { useParams } from "react-router-dom";
import { restaurants } from "../restaurants"; // Your restaurant data

const RestaurantMenu = () => {
  const { restaurantId } = useParams(); // Get the restaurant ID from URL
  const restaurant = restaurants.find(
    (res) => res.info.id === parseInt(restaurantId)
  );

  if (!restaurant) {
    return <div>Restaurant not found!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        {restaurant.info.name} Menu
      </h1>

      {/* Display menu items */}
      <div className="flex flex-wrap gap-6">
        {restaurant.menu.map((item) => (
          <div
            key={item.id}
            className="w-64 bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-blue-600 mb-2">Price: {item.price}</p>
            <p className="text-gray-600 mb-2">
              Description: {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

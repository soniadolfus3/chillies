import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { restaurants } from "../restaurants";

const RestaurantList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  const navigate = useNavigate(); // Hook to navigate programmatically

  // Filtered restaurants based on search and filters
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.info.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCuisine =
      selectedCuisine === "All" ||
      restaurant.info.cuisines.includes(selectedCuisine);

    const matchesRating =
      selectedRating === "All" ||
      restaurant.info.avgRating >= parseFloat(selectedRating);

    return matchesSearch && matchesCuisine && matchesRating;
  });

  // Handle restaurant click to navigate to the menu page
  const handleRestaurantClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search restaurants by name or cuisine..."
          className="p-2 border border-gray-300 rounded-lg w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter for cuisine */}
      <div className="mb-4">
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        >
          <option value="All">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>

      {/* Filter for rating */}
      <div className="mb-4">
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        >
          <option value="All">All Ratings</option>
          <option value="4.0">4.0 & Above</option>
          <option value="4.5">4.5 & Above</option>
        </select>
      </div>

      {/* Display filtered restaurants */}
      <div className="flex flex-wrap gap-6">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.info.id}
            className="w-64 bg-white rounded-lg shadow-md p-4 flex flex-col cursor-pointer"
            onClick={() => handleRestaurantClick(restaurant.info.id)} // Handle click
          >
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
              alt={restaurant.info.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {restaurant.info.name}
            </h3>
            <p className="text-blue-600 mb-2">
              Cost for Two: {restaurant.info.costForTwo}
            </p>
            <p className="text-gray-600 mb-2">
              Cuisines: {restaurant.info.cuisines.join(", ")}
            </p>
            <p className="text-yellow-500 font-semibold mb-2">
              Rating: {restaurant.info.avgRating}
            </p>
            <p className="text-gray-600">
              Delivery Time: {restaurant.info.deliveryTime} minutes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

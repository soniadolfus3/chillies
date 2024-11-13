import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import OrderSummary from "./components/OrderSummary";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={<RestaurantList />} // Display the RestaurantList component on the home page
          />
          {/* Other routes */}
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route
            path="/orders"
            element={<OrderSummary cartItems={cartItems} />}
          />
          <Route
            path="/restaurant/:restaurantId"
            element={<RestaurantMenu />}
          />{" "}
          {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

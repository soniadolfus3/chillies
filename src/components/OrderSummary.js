// components/OrderSummary.js

import React, { useState } from "react";
import { saveOrder } from "../firebaseUtils"; // Import the saveOrder function

const OrderSummary = ({ cartItems = [] }) => {
  // Default to empty array if undefined
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0); // Ensure cartItems is an array

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderDetails = {
      items: cartItems,
      totalPrice,
      timestamp: new Date(),
    };

    // Call saveOrder to store the order in Firestore
    const orderId = await saveOrder(orderDetails);

    if (orderId) {
      setIsOrderPlaced(true);
      alert("Your order has been placed successfully!");
    } else {
      alert("There was an issue placing your order. Please try again.");
    }
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      {cartItems.length > 0 ? (
        <div className="order-details">
          {cartItems.map((item, index) => (
            <div key={index} className="order-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty. Please add items to your cart.</p>
      )}
      <h3>Total: ${totalPrice}</h3>
      <button className="checkout-btn" onClick={handleCheckout}>
        Checkout
      </button>

      {isOrderPlaced && (
        <p>Thank you for your order! Your order is being processed.</p>
      )}
    </div>
  );
};

export default OrderSummary;

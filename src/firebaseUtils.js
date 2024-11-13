import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// Function to save the order details to Firestore
export const saveOrder = async (orderDetails) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderDetails);
    console.log("Order saved with ID: ", docRef.id);
    return docRef.id; // Return the order ID for further use
  } catch (e) {
    console.error("Error adding document: ", e);
    return null; // Handle the error gracefully
  }
};

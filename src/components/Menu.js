// components/Menu.js

import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Assuming firebase is initialized
import { collection, getDocs } from "firebase/firestore";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMenuItems = async () => {
      const menuRef = collection(db, "menu");
      const menuSnapshot = await getDocs(menuRef);
      const menuList = menuSnapshot.docs.map((doc) => doc.data());
      setMenuItems(menuList);
    };
    fetchMenuItems();
  }, []);

  const filteredMenu = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="menu-list">
        {filteredMenu.map((item, index) => (
          <div key={index} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

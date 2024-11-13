import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="text-white">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/orders" className="text-white">
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

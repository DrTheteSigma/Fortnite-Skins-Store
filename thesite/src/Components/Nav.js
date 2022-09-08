import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png"
      ></img>
      <ul className="Nav-List">
        <Link to="/about">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

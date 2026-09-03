import React from "react";
import { NavLink , Link } from "react-router-dom";
import logo from "./images/logo1.png"; 
import cartIcon from "./images/Icons/Cart1.png";
import heartIcon from "./images/Icons/Heart1.png";
import "./Header.css"; 
import SearchBar from "./components/SearchBar";



function Header() {
  return (
    <header className="header">
      <SearchBar /> 
      <div className="logo-section">
        <Link to ="/">
          <img src={logo} alt="Transform Cosmetics Logo" className="logo" />
        </Link>
        <h1 className="brand-name">Transform Cosmetics</h1>
      </div>

      <nav className="nav-links">
        <NavLink to="/shop"className={({ isActive }) => isActive ? "active-link" : ""}>Shop</NavLink>
        <NavLink to="/about"className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        <NavLink to="/sets"className={({ isActive }) => isActive ? "active-link" : ""}>Sets</NavLink>
        <NavLink to="/quiz"className={({ isActive }) => isActive ? "active-link" : ""}>Quiz</NavLink>
        <NavLink to="/wholesale"className={({ isActive }) => isActive ? "active-link" : ""}>Wholesale</NavLink>
        <NavLink to="/courses"className={({ isActive }) => isActive ? "active-link" : ""}>Courses</NavLink>
      </nav>

      <div className="header-icons">
        <Link to="/wishlist" className="icon-link">
          <img src={heartIcon} alt="wishlist" />
          <span>Wishlist</span>
        </Link>
        <Link to="/cart" className="icon-link">
          <img src={cartIcon} alt="cart" />
          <span>Cart</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

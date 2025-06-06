import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import logo from '../images/Icons/s4.png'; //

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search products or sets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <img src={logo} alt="search" className="search-icon" />
      </button>
    </form>
  );
}

export default SearchBar;

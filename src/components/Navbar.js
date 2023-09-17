import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { MagnifyingGlass } from "phosphor-react";
//import "./navbar.css";

const Navbar = ({ onSearch }) => {
 
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Pass the search query to the parent component
  };
  return (
    <div className="h-12 p-4 ">
      <div className="flex flex-nowrap justify-between">
        <Link to="/" className="font-semibold text-lg"> Groceries </Link>
        <div className="flex flex-nowrap">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-96"
        />
        <MagnifyingGlass size={24} className="bg-white rounded w-8 h-8"/>
      </div>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
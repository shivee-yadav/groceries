import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";




const Navbar = () => {
  const [results, setResults] = useState([]);
  
  return (
    <>
    <div className="h-12 p-4 ">
      <div className="flex flex-nowrap justify-between">
        <Link to="/" className="font-semibold text-lg"> Groceries </Link>
       <Searchbar  setResults={setResults} />
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
    <div>
      <SearchResults results={results} />
    </div>
    </>
  );
};

export default Navbar;
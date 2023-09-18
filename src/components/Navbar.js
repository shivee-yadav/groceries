import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";




const Navbar = () => {
  const [results, setResults] = useState([]);
  
  return (
    <>
   <nav class="flex justify-between px-8 py-4 items-center bg-white sm:justify-between sm:m-0 p-0">
   <Link to="/" class="text-xl text-gray-800 font-bold flex justify-start"> Groceries </Link>
       
        <div class="flex items-center">
       <Searchbar  setResults={setResults}  class="ml-2 outline-none bg-transparent font-"/>
     </div>
    
        <Link to="/cart" className="flex justify-end">
          <ShoppingCart size={32} />
        </Link>
   </nav>
    <div className="">
      <SearchResults results={results} />
    </div>
    
    </>
  );
};

export default Navbar;
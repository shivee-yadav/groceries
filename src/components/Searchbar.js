import React, { useState } from 'react'
import { MagnifyingGlass } from "phosphor-react";

const Searchbar = ({ setResults }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = (value) => {
        fetch("https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=all").then((response) => response.json()).then((json) => {
            const results = json.filter((item) => {
                return (value && item && (item.name || item.type) && (item.name.toLowerCase().includes(value) || item.type.toLowerCase().includes(value)));
            });
            setResults(results);
        })
    }

    const handleSearchInputChange = (value) => {
        setSearchQuery(value);
        fetchData(value); // Pass the search query to the parent component
    };
    return (
        <div>
            <div className="flex flex-nowrap">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => handleSearchInputChange(e.target.value)}
                    className="w-96"
                />
                <MagnifyingGlass size={24} className="bg-white rounded w-8 h-8" />
            </div>
        </div>
    )
}

export default Searchbar
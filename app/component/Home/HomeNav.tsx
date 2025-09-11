"use client";
import React, { useState } from "react";
import { NavbarDemo } from "../../utils/MiddleNav";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { SidebarDemo } from "../../utils/SidebarDemo"; // import your sidebar

function HomeNav() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      console.log("Searching for:", query);
      // Call your API or search logic here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-screen">
      {/* Desktop / large screens */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center h-10 px-6">
          <h1 className="text-2xl font-bold">Logo</h1>
          <div className="flex items-center space-x-6">
            <Heart className="w-6 h-6 cursor-pointer hover:text-pink-500" />
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-[#658b17]" />
            <User className="w-6 h-6 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
 <div className="flex   justify-center ">
          <NavbarDemo />
        </div>
        {/* Search */}
        <div className="relative flex justify-start py-4 ml-6 mt-12">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full max-w-lg pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

      
      </div>
  
      {/* Tablet / mobile screens: show sidebar */} 
      <div className="block md:hidden">
        <SidebarDemo/>
      </div>
    </div>
  );
}

export default HomeNav;

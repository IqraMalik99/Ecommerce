"use client";
import React, { useState } from "react";
import { NavbarDemo } from "../../utils/MiddleNav";
import { Heart, ShoppingCart, User, Search } from "lucide-react";
import { SidebarDemo } from "../../utils/SidebarDemo";

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
    <div className="w-screen bg-gray-50/25 h-[12vh]">
      {/* ✅ Desktop / large screens */}
      <div className="hidden md:flex items-center justify-between px-6 pt-5">
        {/* Logo */}
        <h1 className="text-2xl font-bold whitespace-nowrap">Logo</h1>

        {/* Search (smaller width) */}
        <div className="relative w-[30vw] mb-3">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-1.5 border rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* NavbarDemo */}
        <div className="flex-shrink-0">
          <NavbarDemo />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Heart className="w-5 h-5 cursor-pointer hover:text-pink-500" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#658b17]" />
          <User className="w-5 h-5 cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* ✅ Mobile / tablet */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        {/* Logo */}

        <NavbarDemo />
        {/* Hamburger */}
        <SidebarDemo />
      </div>
    </div>
  );
}

export default HomeNav;

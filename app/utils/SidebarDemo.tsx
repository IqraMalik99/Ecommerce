"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Menu,
  X,
  Heart,
  ShoppingCart,
  User,
  Home,
  Search
} from "lucide-react";



export function SidebarDemo() {
  const [open, setOpen] = useState(false);
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
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-gray-700 dark:text-white"
      >
        <Menu className="h-7 w-7" />
      </button>

      {/* Sidebar Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: open ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed top-0 left-0 h-full w-64 bg-white/40 dark:bg-gray-900/60 backdrop-blur-lg z-50 shadow-lg p-6 flex flex-col space-y-8"
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="self-end mb-6 text-gray-600 dark:text-gray-300"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-2">

          <span className="text-xl font-bold">Logo</span>
        </div>
 <div className="relative flex justify-start py-4 ml-1 mt-3">
          <Search
            className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500  cursor-pointer "
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full max-w-2xl pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        {/* Links */}
        <nav className="flex flex-col space-y-6 mt-6">
          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-gray-600"
          >
            <Home className="h-6 w-6" />
            <span>Home</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-pink-300"
          >
            <Heart className="h-6 w-6" />
            <span>Wishlist</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-[#8FBC8F]"
          >
            <ShoppingCart className="h-6 w-6" />
            <span>Cart</span>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-gray-800"
          >
            <User className="h-6 w-6" />
            <span>Profile</span>
          </a>
        </nav>
      </motion.div>
    </div>
  );
}

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
  Search,
} from "lucide-react";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      console.log("Searching for:", query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="relative z-80">
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
        className="fixed top-0 left-0 h-full w-64 bg-white/40 dark:bg-gray-900/60 backdrop-blur-lg z-50 shadow-lg flex flex-col px-5 py-6"
      >
        {/* Header (close + logo) */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold">Logo</span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 dark:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-2 rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-5">
          <SidebarLink icon={<Home className="h-6 w-6" />} label="Home" href="#" />
          <SidebarLink icon={<Heart className="h-6 w-6" />} label="Wishlist" href="#" hoverColor="hover:text-pink-300" />
          <SidebarLink icon={<ShoppingCart className="h-6 w-6" />} label="Cart" href="#" hoverColor="hover:text-[#8FBC8F]" />
          <SidebarLink icon={<User className="h-6 w-6" />} label="Profile" href="#" hoverColor="hover:text-gray-800" />
        </nav>
      </motion.div>
    </div>
  );
}

function SidebarLink({
  icon,
  label,
  href,
  hoverColor = "hover:text-gray-600",
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  hoverColor?: string;
}) {
  return (
    <a
      href={href}
      className={`flex items-center space-x-3 text-gray-700 dark:text-gray-200 px-2 py-2 rounded-md transition-all ${hoverColor}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

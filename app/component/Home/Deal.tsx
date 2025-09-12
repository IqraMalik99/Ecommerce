"use client";

import React from "react";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";


export function Deal() {
  return (
    <div className="h-[30rem] antialiased bg-gray-50! rounded-md flex flex-col dark:bg-black dark:bg-grid-white/[0.05] relative overflow-hidden">
      {/* Heading aligned left with margin */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4 ml-8">
        Deals of the Day
      </h2>

      {/* Cards */}
      <div className="flex-1 flex items-center justify-center">
        <InfiniteMovingCards items={deals} direction="left" speed="fast" />
      </div>
    </div>
  );
}

// Dummy deals data (later replace with axios)
const deals = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "Noise-cancelling headphones with premium sound quality",
    price: 299.99,
    discountPrice: 399.99,
    rating: 4.8,
    reviews: 1245,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    discount: 25,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your health metrics with this advanced smartwatch",
    price: 199.99,
    discountPrice: 249.99,
    rating: 4.6,
    reviews: 876,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    discount: 20,
  },
  {
    id: 3,
    name: "Designer Leather Handbag",
    description: "Elegant handcrafted leather bag with ample storage",
    price: 159.99,
    discountPrice: 199.99,
    rating: 4.9,
    reviews: 542,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    discount: 20,
  },
  {
    id: 4,
    name: "Professional Camera Kit",
    description: "Capture stunning photos with this professional camera",
    price: 1299.99,
    discountPrice: 1599.99,
    rating: 4.7,
    reviews: 321,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    discount: 19,
  },
];

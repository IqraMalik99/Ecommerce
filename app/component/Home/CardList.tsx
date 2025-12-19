"use client";

import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar, FaRegHeart } from "react-icons/fa";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
};

const defaultProducts: Product[] = [
  // 🔹 SAME DATA (unchanged)
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    description: "Soft, breathable cotton with perfect fit for everyday comfort",
    price: "$49.99",
    rating: 4.7,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    category: "Clothing",
  },
  // … rest unchanged
];

// ✅ ProductCard
const ProductCard = ({ product }: { product: Product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="group relative flex-shrink-0 w-56 
      bg-gradient-to-b from-[#fdf6f0] to-[#f7ece2] 
      border border-[#e2d2c6] text-[#4a3326] 
      rounded-xl overflow-hidden cursor-pointer 
      transition-all duration-300 hover:shadow-xl shadow-md"
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7ece2]/40 to-transparent z-10"></div>
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          fill
        />

        {/* Rating */}
        <div className="absolute top-2 left-2 z-20 bg-[#fff8f2]/90 
        backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 
        shadow-sm text-xs">
          <FaStar className="text-yellow-500" />
          <span className="font-medium text-[#5a3e2b]">{product.rating}</span>
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-2 right-2 bg-[#fff8f2]/80 
          backdrop-blur-md rounded-full p-2 
          hover:bg-[#fff0e6] transition-all z-20 shadow-sm"
        >
          {isWishlisted ? (
            <FaHeart className="text-rose-500 text-sm" />
          ) : (
            <FaRegHeart className="text-[#6b4b3a] text-sm" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-base font-semibold mb-1 text-[#3b2f2a]">
          {product.title}
        </h3>

        <p className="text-xs text-[#8c6c58] mb-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#3b2f2a]">
            {product.price}
          </span>

          <button
            onClick={(e) => e.stopPropagation()}
            className="bg-[#f5e9df]/60 backdrop-blur-md 
            border border-[#d7c4b8]/60 rounded-full 
            px-3 py-1 flex items-center gap-1 
            text-xs font-medium text-[#5a3e2b] 
            shadow-sm hover:bg-[#f1dccb] 
            hover:shadow-md hover:scale-105 
            transition-all duration-300"
          >
            <FaShoppingCart className="text-[#5a3e2b] text-sm" />
            Add
          </button>
        </div>

        <div className="flex items-center mt-2 text-xs text-[#9c7c66]">
          <span>{product.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default function ProductCarousel() {
  const [products] = useState<Product[]>(defaultProducts);

  return (
   <div className="p-6 bg-[#f3e8df] h-[30rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#3b2f2a] mb-2">
            Featured Collection
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

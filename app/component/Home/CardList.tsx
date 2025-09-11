"use client";

import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar, FaRegHeart } from "react-icons/fa";

const defaultProducts = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    description: "Soft, breathable cotton with perfect fit for everyday comfort",
    price: "$49.99",
    rating: 4.7,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    category: "Clothing"
  },
  {
    id: 2,
    title: "Elegant Silver Necklace",
    description: "Handcrafted sterling silver necklace with premium finish",
    price: "$79.99",
    rating: 4.9,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    category: "Jewelry"
  },
  {
    id: 3,
    title: "Classic Leather Watch",
    description: "Genuine leather strap with precision movement",
    price: "$129.99",
    rating: 4.8,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  },
  {
    id: 4,
    title: "Wireless Bluetooth Headphones",
    description: "Premium sound quality with noise cancellation",
    price: "$159.99",
    rating: 4.6,
    reviews: 187,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  },
  {
    id: 5,
    title: "Designer Sunglasses",
    description: "UV protection with stylish frame design",
    price: "$89.99",
    rating: 4.5,
    reviews: 212,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  },
  {
    id: 6,
    title: "Minimalist Backpack",
    description: "Sleek design with ample storage space",
    price: "$74.99",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    category: "Bags"
  },
  {
    id: 7,
    title: "Luxury Perfume",
    description: "Elegant fragrance with long-lasting scent",
    price: "$119.99",
    rating: 4.9,
    reviews: 301,
    image: "https://images.unsplash.com/photo-1592945403407-9de659572da6?auto=format&fit=crop&w=800&q=80",
    category: "Beauty"
  },
  {
    id: 8,
    title: "Smart Fitness Tracker",
    description: "Track your activity and health metrics",
    price: "$99.99",
    rating: 4.4,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=800&q=80",
    category: "Electronics"
  },
  {
    id: 9,
    title: "Cashmere Sweater",
    description: "Luxuriously soft and warm for cool days",
    price: "$149.99",
    rating: 4.8,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&w=800&q=80",
    category: "Clothing"
  },
  {
    id: 10,
    title: "Ceramic Coffee Set",
    description: "Elegant handcrafted ceramic coffee cups and saucers",
    price: "$64.99",
    rating: 4.7,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    category: "Home"
  },
  {
    id: 11,
    title: "Gold Plated Earrings",
    description: "Delicate gold plated earrings with pearl details",
    price: "$59.99",
    rating: 4.9,
    reviews: 332,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    category: "Jewelry"
  },
  {
    id: 12,
    title: "Leather Journal",
    description: "Handcrafted leather journal for writing and sketching",
    price: "$44.99",
    rating: 4.6,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80",
    category: "Stationery"
  },
  {
    id: 13,
    title: "Yoga Mat Premium",
    description: "Eco-friendly yoga mat with non-slip surface",
    price: "$69.99",
    rating: 4.7,
    reviews: 223,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    category: "Fitness"
  },
  {
    id: 14,
    title: "Artisan Chocolate Box",
    description: "Handcrafted chocolates with exotic flavors",
    price: "$39.99",
    rating: 4.9,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=800&q=80",
    category: "Food"
  },

  {
    id: 16,
    title: "Wooden Watch",
    description: "Eco-friendly wooden watch with minimalist design",
    price: "$79.99",
    rating: 4.5,
    reviews: 176,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
    category: "Accessories"
  },
  {
    id: 17,
    title: "Skincare Set",
    description: "Premium natural skincare products for daily routine",
    price: "$129.99",
    rating: 4.8,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    category: "Beauty"
  },
  {
    id: 18,
    title: "Minimalist Desk Lamp",
    description: "Sleek LED desk lamp with adjustable brightness",
    price: "$59.99",
    rating: 4.6,
    reviews: 154,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    category: "Home"
  },
  
  {
    id: 20,
    title: "Leather Desk Organizer",
    description: "Handcrafted leather organizer for your workspace",
    price: "$74.99",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    category: "Office"
  }
];

const ProductCard = ({ product }: any) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    alert(`Wishlist clicked for ${product.title}`);
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Added ${product.title} to cart`);
  };

  const handleCardClick = () => {
    alert(`Open product details for ${product.title}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex-shrink-0 w-56 
                 bg-white/80 backdrop-blur-lg border border-white 
                 text-gray-800 rounded-xl overflow-hidden cursor-pointer 
                 transition-all duration-300 hover:bg-white/90 
                 hover:shadow-xl hover:border-gray-200 shadow-md"
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent z-10"></div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Rating badge */}
        <div className="absolute top-2 left-2 z-20 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm text-xs">
          <FaStar className="text-yellow-500" />
          <span className="font-medium text-gray-700">{product.rating}</span>
        </div>

        {/* Wishlist */}
        <button
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-md 
                     rounded-full p-2 hover:bg-white transition-all z-20 shadow-sm"
          onClick={handleWishlistClick}
        >
          {isWishlisted ? (
            <FaHeart className="text-red-500 text-sm" />
          ) : (
            <FaRegHeart className="text-gray-600 text-sm" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-base font-semibold mb-1 text-gray-900">{product.title}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <button
  onClick={handleCartClick}
  className="bg-white/30 backdrop-blur-md border border-gray-300/40 
             rounded-full px-3 py-1 flex items-center gap-1 
             text-xs font-medium text-gray-700 shadow-sm 
             hover:bg-white/50 hover:shadow-md hover:scale-105 
             transition-all duration-300"
>
  <FaShoppingCart className="text-[#454643] text-sm" />
  Add
</button>
        </div>

        <div className="flex items-center mt-2 text-xs text-gray-500">
          <span>{product.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default function ProductCarousel() {
  const [products] = useState(defaultProducts);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 h-[30rem]">
      <div className="max-w-7xl mx-auto">
        <div className=" mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
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

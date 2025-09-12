"use client";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { FaShoppingCart, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Animation
import Image from "next/image";

// Main Component
export function TopSeller() {
  const [pages, setPages] = useState(1);

  const defaultItems = [
    { img: "/images/jewel4.jpg", name: "Classic Jewelry", price: "45", discount: "20%", topSeller: true, large: true },
    { img: "/images/cloth1.jpg", name: "Running Sneakers", price: "89", discount: "15%", topSeller: false, large: false },
    { img: "/images/men1.jpg", name: "Leather Jacket", price: "120", discount: "", topSeller: true, large: false },
    { img: "/images/men2.jpg", name: "Jacket", price: "199", discount: "10%", topSeller: false, large: false },
    { img: "/images/shoe1.jpg", name: "Running Sneakers", price: "60", discount: "5%", topSeller: false, large: false },
  ];

  const handleCardClick = (item: any) => alert(`Clicked on ${item.name}`);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 mx-8 text-gray-800 dark:text-gray-100">
        Top Sellers
      </h2>
      <div className="max-w-5xl mx-auto p-1">
        <BentoGrid className="max-w-5xl mx-2 md:mx-auto">
          {defaultItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title=""
              description=""
              header={
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard {...item} onClick={() => handleCardClick(item)} />
                </motion.div>
              }
              className={item.large ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>

        {/* Explore More Button */}
        <div className="flex justify-end mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPages((prev) => prev + 1)}
            className="px-4 py-2 text-xs font-semibold tracking-wide 
               rounded-xl bg-white/10 dark:bg-gray-700/20 
               backdrop-blur-md border border-white/20 
               text-gray-800 dark:text-gray-100 
               shadow-md hover:shadow-lg 
               hover:bg-white/20 hover:dark:bg-gray-600/30 
               transition-all duration-300 ease-in-out"
          >
            Explore More
          </motion.button>
        </div>
      </div>
    </>
  );
}

// Compact Product Card
const ProductCard = ({
  img,
  name,
  price,
  discount,
  topSeller,
  onClick,
}: {
  img: string;
  name: string;
  price: string;
  discount?: string;
  topSeller?: boolean;
  onClick?: () => void;
}) => {
  const [wishlisted, setWishlisted] = useState(false);
  const discountPercent = discount ? parseInt(discount.replace("%", "")) : 0;
  const finalPrice = discountPercent
    ? (Number(price) - (Number(price) * discountPercent) / 100).toFixed(2)
    : price;

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 6px 20px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={onClick}
      className="flex flex-col w-full h-auto rounded-xl overflow-hidden 
                 bg-white/10 dark:bg-gray-900/30 backdrop-blur-sm 
                 border border-white/20 shadow-sm cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-32">
        <Image src={img} alt={name} className="w-full h-full object-cover"  fill/>
        {discount && (
          <span className="absolute top-1 left-1 bg-red-500/80 text-white text-xs font-semibold px-1 py-0.5 rounded">
            -{discount}
          </span>
        )}
        {topSeller && (
          <span className="absolute top-1 right-1 flex items-center gap-1 bg-yellow-400/90 text-black text-xs font-bold px-1 py-0.5 rounded">
            <FaCrown className="w-3 h-3" /> Top
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-2 flex flex-col gap-1 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{name}</h3>
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-gray-900 dark:text-white">${finalPrice}</span>
            {discount && <span className="text-xs line-through text-gray-400">${price}</span>}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
            {/* Cart Button */}
            <button
              onClick={(e) => { e.stopPropagation(); alert(`Added ${name} to cart`); }}
              className="flex items-center justify-center px-2 py-1 text-xs font-medium"
            >
              <FaShoppingCart className="text-lg text-gray-800 dark:text-gray-200 hover:text-green-500 transition" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setWishlisted(!wishlisted); }}
              className="p-1 rounded-full transition"
            >
              <Heart className={`text-sm ${wishlisted ? "text-pink-500" : "text-gray-400 dark:text-gray-200 hover:text-pink-500"}`} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

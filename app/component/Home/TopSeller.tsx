"use client";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { FaShoppingCart, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

// Define product type
type Product = {
  img: string;
  name: string;
  price: string;
  discount?: string;
  topSeller?: boolean;
  large?: boolean;
};

// Main Component
export function TopSeller() {
  const defaultItems: Product[] = [
    { img: "/images/jewel4.jpg", name: "Classic Jewelry", price: "45", discount: "20%", topSeller: true, large: true },
    { img: "/images/cloth1.jpg", name: "Running Sneakers", price: "89", discount: "15%", topSeller: false, large: false },
    { img: "/images/men1.jpg", name: "Leather Jacket", price: "120", topSeller: true, large: false },
    { img: "/images/men2.jpg", name: "Jacket", price: "199", discount: "10%", topSeller: false, large: false },
    { img: "/images/shoe1.jpg", name: "Running Sneakers", price: "60", discount: "5%", topSeller: false, large: false },
  ];

  const handleCardClick = (item: Product) => alert(`Clicked on ${item.name}`);

  return (
    <section className="py-6 bg-[#f9f3ed] dark:bg-[#2c1f1b]">
      <h2 className="text-2xl font-bold mb-6 mx-8 text-[#5a3e2b] dark:text-[#f9f3ed]">
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
            className="px-4 py-2 text-xs font-semibold tracking-wide
              rounded-xl bg-[#f2e7dc] dark:bg-[#3b2f2a]
              border border-[#d4a373]
              text-[#5a3e2b] dark:text-[#f9f3ed]
              shadow-md hover:shadow-lg
              hover:bg-[#d4a373] hover:dark:bg-[#5a3e2b]
              transition-all duration-300 ease-in-out"
          >
            Explore More
          </motion.button>
        </div>
      </div>
    </section>
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
}: Product & { onClick?: () => void }) => {
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
        bg-[#f2e7dc] dark:bg-[#3b2f2a] backdrop-blur-sm
        border border-[#d4a373] shadow-sm cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-32">
        <Image src={img} alt={name} className="w-full h-full object-cover" fill />
        {discount && (
          <span className="absolute top-1 left-1 bg-[#d4a373] text-white text-xs font-semibold px-1 py-0.5 rounded">
            -{discount}
          </span>
        )}
        {topSeller && (
          <span className="absolute top-1 right-1 flex items-center gap-1 bg-[#b9855e] text-white text-xs font-bold px-1 py-0.5 rounded">
            <FaCrown className="w-3 h-3" /> Top
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-2 flex flex-col gap-1">
        <h3 className="text-sm font-medium text-[#5a3e2b] dark:text-[#f9f3ed] truncate">{name}</h3>
        <div className="flex items-center justify-between">
          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-[#5a3e2b] dark:text-[#f9f3ed]">${finalPrice}</span>
            {discount && <span className="text-xs line-through text-[#8b5e3c]">${price}</span>}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
            {/* Cart Button */}
            <button
              onClick={(e) => { e.stopPropagation(); alert(`Added ${name} to cart`); }}
              className="flex items-center justify-center px-2 py-1 text-xs font-medium text-[#5a3e2b] dark:text-[#f9f3ed] hover:text-[#d4a373] transition"
            >
              <FaShoppingCart className="text-lg" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setWishlisted(!wishlisted); }}
              className="p-1 rounded-full transition"
            >
              <Heart className={`text-sm ${wishlisted ? "text-[#d4a373]" : "text-[#8b5e3c] hover:text-[#d4a373]"}`} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

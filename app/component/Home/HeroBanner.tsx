"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../../../components/ui/images-slider";
import HomeNav from "./HomeNav";
import { useRouter } from "next/navigation";
import { Package, CreditCard, Headphones } from "lucide-react";

export function HeroBanner() {
  const router = useRouter();
  const images = [
    "https://images.pexels.com/photos/7202900/pexels-photo-7202900.jpeg",
    "https://images.pexels.com/photos/26796157/pexels-photo-26796157.jpeg",
    "https://orahjewels.com/cdn/shop/files/blue_gemstone_700x.png?v=1755950026"
  ];

  return (
    <>
      <div className="relative h-[33rem] w-full overflow-hidden bg-gray-50">
        {/* Background slider */}
        <ImagesSlider className="h-full w-full" images={images} />

        {/* Overlay content */}
        <div className="absolute inset-0 z-20 flex flex-col">
          {/* Navbar */}
          <HomeNav />

          {/* Hero content */}
          <div className="flex flex-col justify-center items-center h-full px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-3xl md:text-5xl text-white drop-shadow-lg"
            >
              Discover Your <br /> Perfect Style
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-2 text-white/90 text-sm md:text-lg"
            >
              Explore the latest trends in fashion, bags, and accessories.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="cursor-pointer mt-4 px-5 py-2 bg-white/30 text-gray-800 text-sm font-medium rounded-full border border-gray-300 hover:bg-white/50 hover:text-gray-900 transition duration-200"
              onClick={() => router.push("/products")}
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </div>
   <div
  className="flex justify-between items-start w-full 
             bg-gray-50 dark:bg-black/60 py-2 px-3 
             text-[10px] sm:text-sm md:text-base mt-2 cursor-pointer 
             gap-4 sm:gap-8"
>
  {/* Shipping */}
  <div className="flex items-start space-x-2 min-w-[80px]">
    <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#708238]" />
    <div className="flex flex-col">
      <div className="text-gray-800 dark:text-gray-200 font-medium">
        Free Shipping
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-[9px] sm:text-xs break-words">
        Free shipping for order above 5000
      </div>
    </div>
  </div>

  {/* Payment */}
  <div className="flex items-start space-x-2 min-w-[80px]">
    <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#708238]" />
    <div className="flex flex-col">
      <div className="text-gray-800 dark:text-gray-200 font-medium">
        Secure Payment
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-[9px] sm:text-xs break-words">
        Secure Payment options
      </div>
    </div>
  </div>

  {/* Support */}
  <div className="flex items-start space-x-2 min-w-[80px]">
    <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#708238]" />
    <div className="flex flex-col">
      <div className="text-gray-800 dark:text-gray-200 font-medium">
        24/7 Support
      </div>
      <div className="text-gray-500 dark:text-gray-400 text-[9px] sm:text-xs break-words">
        Support online all day
      </div>
    </div>
  </div>
</div>


    </>
  );
}

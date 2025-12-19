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
    "images/bg1.png",
    "images/bg2.png"
  ];

  return (
    <>
      <div className="relative h-[33rem] overflow-hidden w-full bg-[rgb(249_243_237)]">
        {/* Background slider */}
        <ImagesSlider className="h-full w-full" images={images} />

        {/* Overlay content */}
        <div className="absolute inset-0 z-20 flex flex-col">
          {/* Navbar */}
          <HomeNav />

          {/* Hero content aligned left but with padding */}
        <div className="flex flex-col justify-center h-full px-8 md:px-16 text-left max-w-lg">
  {/* H1 Opaline */}
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-5xl italic font-serif text-[#5C3A21] drop-shadow-md"
  >
    Opaline
  </motion.h1>

  {/* Beauty line with larger ~ */}
  <motion.h4
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mt-1 text-sm md:text-base font-medium text-[#5C3A21] flex items-center gap-1"
  >
    <span className="text-lg md:text-xl">~</span>
    Beauty
    <span className="text-lg md:text-xl">~</span>
  </motion.h4>

  {/* Glow text */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="mt-1 text-xs md:text-sm text-[#5C3A21]/90"
  >
    Glow that feels like luxury
  </motion.p>

  {/* Button */}
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="cursor-pointer mt-4 px-1 w-[12rem] py-2 bg-[#5C3A21] text-white text-sm font-medium rounded-full border border-[#5C3A21] hover:bg-[#4B2F18] transition duration-200"
    onClick={() => router.push("/products")}
  >
    Shop Now
  </motion.button>
</div>

        </div>
      </div>

      {/* Feature Info */}
      <div
        className="flex justify-between items-start w-full h-auto
                   bg-[rgb(249_243_237)] dark:bg-black/60 py-2 px-3 
                   text-[10px] sm:text-sm md:text-base mt-2 cursor-pointer 
                   gap-4 sm:gap-8"
      >
        {/* Shipping */}
        <div className="flex items-start space-x-2 min-w-[80px]">
          <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#5C3A21]/90" />
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
          <CreditCard className="w-5 h-5 sm:w-6 sm:h-6  text-[#5C3A21]/90" />
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
          <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#5C3A21]/90" />
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

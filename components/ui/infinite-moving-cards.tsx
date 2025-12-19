"use client";
import { FaShoppingCart } from "react-icons/fa";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    discount: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const handleCartClick = (productId: number) => {
    alert(`Added ${productId} to cart`);
  };

  const getDirection = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (!containerRef.current) return;
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_50%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => {
          const discountedPrice = (
            item.price -
            (item.price * item.discount) / 100
          ).toFixed(2);

          return (
            <li
              key={item.id}
              className="relative w-[200px] max-w-full shrink-0 rounded-xl border border-[#d7c4b8] 
                         bg-gradient-to-b from-[#fdf6f0] to-[#f7ece2] px-4 py-3 
                         md:w-[280px] dark:border-[#4a3c36] 
                         dark:bg-gradient-to-b dark:from-[#3b2f2a] dark:to-[#2a1f1b]"
            >
              <div className="flex flex-col items-center text-center">
                {/* Product Image */}
                <div className="relative w-full h-[120px] mb-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={120}
                    unoptimized
                    className="object-cover w-full h-full rounded-lg"
                  />
                  {/* Discount Tag */}
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md backdrop-blur-sm bg-opacity-80">
                    -{item.discount}%
                  </span>
                </div>

                {/* Product Info */}
                <h3 className="text-base font-semibold text-[#5a3e2b] dark:text-[#f9f3ed]">
                  {item.name}
                </h3>
                <p className="text-xs text-[#8c6c58] dark:text-[#c5b5a7] line-clamp-2">
                  {item.description}
                </p>

                {/* Price Section */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs line-through text-[#b8a397] dark:text-[#7a6658]">
                    ${item.price}
                  </span>
                  <span className="text-sm font-semibold text-[#3b2f2a] dark:text-[#f9f3ed]">
                    ${discountedPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleCartClick(item.id)}
                  className="mt-3 bg-[#f5e9df]/20 backdrop-blur-md border border-[#d7c4b8]/40 
             rounded-full px-4 py-1.5 flex items-center gap-2 
             text-sm font-medium text-[#5a3e2b] shadow-sm 
             hover:bg-[#f5e0cd]/30 hover:shadow-md hover:scale-105 
             transition-all duration-300"
                >
                  <FaShoppingCart className="text-[#5a3e2b] text-base" />
                  Add
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

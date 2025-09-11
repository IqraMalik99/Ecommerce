"use client";
import { FaShoppingCart } from "react-icons/fa";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);
    const handleCartClick = (product:any) => {
    
      alert(`Added ${product} to cart`);
    };

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // duplicate children for infinite loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    if (speed === "fast") {
      containerRef.current.style.setProperty("--animation-duration", "20s");
    } else if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    } else {
      containerRef.current.style.setProperty("--animation-duration", "80s");
    }
  };

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
        {items.map((item, idx) => {
          const discountedPrice = (
            item.price -
            (item.price * item.discount) / 100
          ).toFixed(2);

          return (
            <li
              key={idx}
              className="relative w-[200px] max-w-full shrink-0 rounded-xl border border-zinc-200 
                         bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-4 py-3 
                         md:w-[280px] dark:border-zinc-700 
                         dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            >
              <div className="flex flex-col items-center text-center">
                {/* Product Image with Discount Tag */}
                <div className="relative w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[120px] object-cover rounded-lg mb-2"
                  />
                  {/* Discount Tag */}
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md backdrop-blur-sm bg-opacity-80">
                    -{item.discount}%
                  </span>
                </div>

                {/* Product Info */}
                <h3 className="text-base font-semibold text-neutral-800 dark:text-gray-100">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-gray-400 line-clamp-2">
                  {item.description}
                </p>

                {/* Price Section */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs line-through text-neutral-400">
                    ${item.price}
                  </span>
                  <span className="text-sm font-semibold text-black dark:text-white">
                    ${discountedPrice}
                  </span>
                </div>

                {/* Glassy Add to Cart Button */}
               {/* Glassy Add to Cart Button */}
<button
  onClick={() => handleCartClick(item)}
  className="mt-3 bg-gray-100/20 backdrop-blur-md border border-gray-300/40 
             rounded-full px-4 py-1.5 flex items-center gap-2 
             text-sm font-medium text-gray-700 shadow-sm 
             hover:bg-gray-200/30 hover:shadow-md hover:scale-105 
             transition-all duration-300"
>
  <FaShoppingCart className="text-gray-600 text-base" />
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

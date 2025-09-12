"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
type Testimonial = {
  name: string;
  review: string;
  rating: number;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 font-sans antialiased md:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        {/* Left image */}
        <div className="relative h-32 w-32 flex-shrink-0">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0,
                  scale: isActive(index) ? 1 : 0.9,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="h-full w-full rounded-xl object-cover shadow-md ring-1 ring-white/30"
                  fill
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right text */}
        <div className="flex-1 bg-white/20 dark:bg-neutral-800/40 backdrop-blur-md border border-white/30 dark:border-neutral-700 rounded-xl p-2 shadow-lg">
          <motion.div
            key={active}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {/* Name */}
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {testimonials[active].name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < testimonials[active].rating
                      ? "text-lime-800"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review */}
            <p className="mt-2 text-xs text-gray-700 dark:text-neutral-300 leading-relaxed line-clamp-3">
              “{testimonials[active].review}”
            </p>
          </motion.div>

          {/* Buttons */}
          <div className="flex gap-2 pt-3">
            <button
              onClick={handlePrev}
              className="flex h-7 w-7 items-center justify-center rounded-full 
                bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-white/40 
                shadow-sm hover:scale-105 transition"
            >
              <IconArrowLeft className="h-4 w-4 text-lime-800 dark:text-lime-400" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-7 w-7 items-center justify-center rounded-full 
                bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-white/40 
                shadow-sm hover:scale-105 transition"
            >
              <IconArrowRight className="h-4 w-4 text-lime-800 dark:text-lime-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

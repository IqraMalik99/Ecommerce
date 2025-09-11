"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  src: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
};

export default function Testimonial({ testimonials, autoplay = true }: TestimonialsProps) {
  const [index, setIndex] = useState(0);

  // ✅ Stable random rotations (avoids SSR hydration mismatch)
  const rotations = useMemo(
    () => testimonials.map(() => Math.floor(Math.random() * 21) - 10),
    [testimonials]
  );

  // ✅ Autoplay rotation
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-10">
      <motion.div
        key={index}
        initial={{ opacity: 0, rotateY: rotations[index] }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="max-w-xl mx-auto rounded-2xl p-6 bg-white/10 backdrop-blur-md shadow-xl text-center"
      >
        {/* Avatar */}
        <img
          src={testimonials[index].src}
          alt={testimonials[index].name}
          className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white/30 shadow-lg object-cover"
        />

        {/* Quote */}
        <p className="text-gray-200 italic mb-3">"{testimonials[index].quote}"</p>

        {/* Rating */}
        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: testimonials[index].rating }).map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>

        {/* Name */}
        <p className="text-green-200 font-semibold">{testimonials[index].name}</p>
      </motion.div>

      {/* Controls */}
      <div className="flex justify-center mt-4 gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-green-400" : "bg-gray-500"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
const defaultTestimonials: type Testimonial = {
[] = [{ id: 1, name: "Zaviyar", quote: "This is a default testimonial to show the layout working.", rating: 5, src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop", }, { id: 2, name: "Jane Doe", quote: "Amazing experience, highly recommend this product!", rating: 4, src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=400&auto=format&fit=crop", }, { id: 3, name: "Michael Johnson", quote: "The service was excellent and the team was very helpful.", rating: 5, src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop", }, { id: 4, name: "Sophia Williams", quote: "Great quality and attention to detail. Will buy again.", rating: 4, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop", }, { id: 5, name: "Daniel Smith", quote: "Fast delivery and fantastic customer support.", rating: 5, src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", },];
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  name: string;
  quote: string;
  rating?: number;
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Ayesha Khan",
    quote: "I love the Huda Beauty Foundation from Opaline! It blends perfectly and gives my skin a flawless finish.",
    rating: 5,
  },
  {
    name: "Ali Raza",
    quote: "The Benetint lip and cheek tint from Opaline is amazing. It gives a natural rosy glow all day long.",
    rating: 4,
  },
  {
    name: "Sara Malik",
    quote: "Opaline's Keratin Hair Mask transformed my dry hair! So smooth, soft, and shiny after every wash.",
    rating: 5,
  },
  {
    name: "Zain Ahmed",
    quote: "Huda Beauty Foundation from Opaline stays all day without feeling heavy. Totally recommend it!",
    rating: 5,
  },
  {
    name: "Hina Tariq",
    quote: "Benetint is my go-to product from Opaline. Lightweight, natural, and perfect for daily wear.",
    rating: 4,
  },
  {
    name: "Fatima Sheikh",
    quote: "I tried Opaline's Keratin Hair Mask, and my hair has never felt healthier. Incredible results!",
    rating: 5,
  },
  {
    name: "Usman Ali",
    quote: "Huda Beauty Foundation from Opaline gives full coverage without caking. Love it!",
    rating: 5,
  },
  {
    name: "Mehwish Khan",
    quote: "Benetint from Opaline is subtle yet vibrant. Perfect tint for lips and cheeks.",
    rating: 4,
  },
];



export const Testimonial = ({
  testimonials = defaultTestimonials,
  autoplay = false,
}: {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const renderStars = (rating: number = 0) => (
    <div className="flex space-x-1 mt-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-[#6f4e37]" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );

  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center text-gray-500">No testimonials available.</p>;
  }

  return (
    <section className="relative py-6 bg-[#f3e8df] dark:bg-[#6f4e37]/80">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl mt-2 font-bold text-[#6f4e37] dark:text-[#fdfcfb]">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-[#6f4e37]/80 dark:text-[#fff8f2]/80 text-base">
            Honest quotes from people who trust us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            key={active}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#e7a87b]/20 dark:bg-[#fff8f2]/10 text-[#6f4e37] dark:text-[#fdfcfb] rounded-2xl p-6 shadow-lg border border-[#d4a373]/40 max-w-xl text-center"
          >
            <h3 className="text-lg font-semibold">{testimonials[active].name}</h3>
            {renderStars(testimonials[active].rating)}
            <p className="mt-3 text-sm leading-relaxed">{`“${testimonials[active].quote}”`}</p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handlePrev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4a373]/50 hover:bg-[#d4a373] shadow transition"
            >
              <IconArrowLeft className="h-4 w-4 text-[#6f4e37] dark:text-[#fdfcfb]" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4a373]/50 hover:bg-[#d4a373] shadow transition"
            >
              <IconArrowRight className="h-4 w-4 text-[#6f4e37] dark:text-[#fdfcfb]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

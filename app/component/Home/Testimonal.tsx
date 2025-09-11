"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  quote: string;
  rating?: number;
  src: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Zaviyar",
    quote: "This is a default testimonial to show the layout working.",
    rating: 5,
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Jane Doe",
    quote: "Amazing experience, highly recommend this product!",
    rating: 4,
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Michael Johnson",
    quote: "The service was excellent and the team was very helpful.",
    rating: 5,
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sophia Williams",
    quote: "Great quality and attention to detail. Will buy again.",
    rating: 4,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Daniel Smith",
    quote: "Fast delivery and fantastic customer support.",
    rating: 5,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
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

  const handleNext = () =>
    setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const renderStars = (rating: number = 0) => (
    <div className="flex space-x-1 mt-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-lime-800" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );

  if (!testimonials || testimonials.length === 0) {
    return (
      <p className="text-center text-gray-500">No testimonials available.</p>
    );
  }

  return (
    <section className="relative py-6 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl mt-2 font-bold text-black">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-gray-700 text-base">
            Honest quotes from people who trust us
          </p>
        </div>

        {/* Testimonial Row */}
        <div className="flex flex-col sm:flex-row items-center gap-6 min-h-[250px]">
          {/* Left image */}
          <div className="relative h-40 w-40 flex-shrink-0">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{
                    opacity: index === active ? 1 : 0,
                    scale: index === active ? 1 : 0.9,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/10"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right text card */}
          <div className="flex-1 bg-gray-200 text-black rounded-2xl p-5 shadow-lg border border-gray-400">
            <motion.div
              key={active}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold">{testimonials[active].name}</h3>

              {renderStars(testimonials[active].rating)}

              <p className="mt-3 text-sm leading-relaxed line-clamp-3">
                “{testimonials[active].quote}”
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handlePrev}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 hover:bg-gray-500 shadow transition"
              >
                <IconArrowLeft className="h-4 w-4 text-black" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 hover:bg-gray-500 shadow transition"
              >
                <IconArrowRight className="h-4 w-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

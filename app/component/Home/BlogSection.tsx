"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "5 Styling Tips for This Fall",
    description:
      "Discover how to mix and match your outfits for a classy yet comfy look this season.",
    date: "Sep 10, 2025",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Top 10 Must-Have Accessories",
    description:
      "These trending accessories will level up your look instantly without breaking the bank.",
    date: "Sep 5, 2025",
    image:
      "/images/cloth2.jpg",
  },
  {
    id: 3,
    title: "Behind the Scenes at ShopSphere",
    description:
      "Get a sneak peek into how we design and curate products just for you.",
    date: "Aug 30, 2025",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
    {
    id: 4,
    title: "5 Styling Tips for This Fall",
    description:
      "Discover how to mix and match your outfits for a classy yet comfy look this season.",
    date: "Sep 10, 2025",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Top 10 Must-Have Accessories",
    description:
      "These trending accessories will level up your look instantly without breaking the bank.",
    date: "Sep 5, 2025",
    image:
      "/images/cloth2.jpg",
  },
  {
    id: 6,
    title: "Behind the Scenes at ShopSphere",
    description:
      "Get a sneak peek into how we design and curate products just for you.",
    date: "Aug 30, 2025",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
    {
    id: 7,
    title: "5 Styling Tips for This Fall",
    description:
      "Discover how to mix and match your outfits for a classy yet comfy look this season.",
    date: "Sep 10, 2025",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Top 10 Must-Have Accessories",
    description:
      "These trending accessories will level up your look instantly without breaking the bank.",
    date: "Sep 5, 2025",
    image:
      "/images/cloth2.jpg",
  },
  {
    id: 9,
    title: "Behind the Scenes at ShopSphere",
    description:
      "Get a sneak peek into how we design and curate products just for you.",
    date: "Aug 30, 2025",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gray-100 text-black py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold text-olive-400">
            From Our Blog
          </h2>
          <p className="mt-2 text-black text-sm">
            Stay updated with the latest fashion tips, news, and stories.
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="min-w-[280px] max-w-[300px] rounded-xl bg-gray-300 shadow-md hover:shadow-lg transition group"
            >
             <div className="overflow-hidden rounded-t-xl relative h-36">
  <Image
    src={post.image}
    alt={post.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

              <div className="p-4">
                <p className="text-xs text-gray-700">{post.date}</p>
                <h3 className="mt-1 text-base font-semibold text-black group-hover:text-olive-400 transition">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-gray-700 line-clamp-2">
                  {post.description}
                </p>
                <a
                  href="#"
                  className="mt-2 inline-block text-olive-400 text-xs font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

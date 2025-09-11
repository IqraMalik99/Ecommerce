"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/subscribe", { email }); // backend endpoint
      setStatus("Subscribed successfully! 🎉");
      setEmail("");
    } catch (err) {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="relative bg-white/10 dark:bg-black/20 backdrop-blur-lg border-t border-white/20 shadow-xl mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-bold text-olive-600 dark:text-olive-400">
            ShopSphere
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Your classy destination for fashion, lifestyle, and more.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Categories
          </h3>
          <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            {["Clothing", "Jewelry", "Electronics", "Accessories"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-olive-500 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Support */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Customer Support
          </h3>
          <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            {["Track Order", "Shipping Info", "Returns & Refunds", "FAQ"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-olive-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Newsletter + Social */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Stay Updated
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
            Subscribe for deals & new arrivals.
          </p>
          <form onSubmit={handleSubscribe} className="mt-4 flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg bg-white/20 text-gray-800 
                        dark:text-gray-200 focus:outline-none placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-olive-600 text-white rounded-r-lg hover:bg-olive-700 transition"
            >
              Subscribe
            </button>
          </form>
          {status && (
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{status}</p>
          )}

          {/* Social Icons with brand colors */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-600 hover:text-[#1877F2] dark:text-gray-400 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#E1306C] dark:text-gray-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#1DA1F2] dark:text-gray-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#181717] dark:text-gray-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        className="border-t border-white/20 mt-6 py-4 text-center text-xs text-gray-500 dark:text-gray-400"
      >
        © {new Date().getFullYear()} ShopSphere. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

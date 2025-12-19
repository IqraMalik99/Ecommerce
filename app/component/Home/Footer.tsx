"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const router = useRouter();
  const whatsappLink = "https://wa.me/923024065743"; // Your WhatsApp number

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      className="relative bg-[#e7a87b]/20 dark:bg-[#6f4e37]/80 backdrop-blur-lg border-t border-[#fff8f2]/20 shadow-xl mt-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-bold text-[#6f4e37] dark:text-[#fdfcfb] cursor-pointer"   onClick={()=>router.push(`/`)}>
            Opaline
          </h2>
          <p className="mt-2 md:mt-3 text-[#6f4e37]/80 dark:text-[#fff8f2]/80 text-sm leading-relaxed">
           Glow that feels like luxury
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-[#6f4e37] dark:text-[#fff8f2]">
            Categories
          </h3>
          <ul className="mt-2 md:mt-3 space-y-2 text-[#6f4e37]/80 dark:text-[#fff8f2]/80 text-sm">
            {["Makeup", "SkinCare", "Electronics", "PersonalCare"].map((item) => (
              <li key={item}>
                <button
                  onClick={()=>router.push(`/${item.trim().toLowerCase()}`)}
                  className="hover:text-[#a3704b] dark:hover:text-[#d4a373] transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Support */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-[#6f4e37] dark:text-[#fff8f2]">
            Customer Support
          </h3>
          <ul className="mt-2 md:mt-3 space-y-2 text-[#6f4e37]/80 dark:text-[#fff8f2]/80 text-sm">
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a3704b] dark:hover:text-[#d4a373] transition-colors duration-300 flex items-center gap-2"
              >
                <FaWhatsapp /> FAQ
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={fadeUp}>
          <h3 className="text-lg font-semibold text-[#6f4e37] dark:text-[#fff8f2]">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <FaFacebook size={20} className="text-[#6f4e37]/80 hover:text-[#3b5998] dark:text-[#fff8f2]/80 transition-colors" />
            <FaInstagram size={20} className="text-[#6f4e37]/80 hover:text-[#E1306C] dark:text-[#fff8f2]/80 transition-colors" />
            <FaTwitter size={20} className="text-[#6f4e37]/80 hover:text-[#1DA1F2] dark:text-[#fff8f2]/80 transition-colors" />
            <FaGithub size={20} className="text-[#6f4e37]/80 hover:text-[#181717] dark:text-[#fff8f2]/80 transition-colors" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeUp}
        className="border-t border-[#fff8f2]/20 mt-4 md:mt-6 py-4 text-center text-xs text-[#6f4e37]/80 dark:text-[#fff8f2]/80"
      >
        © {new Date().getFullYear()} Opaline. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

"use client";
import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { motion, Transition } from "framer-motion";
import Image from "next/image";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
      role="menuitem"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-xs font-medium text-black hover:text-gray-600 dark:text-white"
      >
        {item}
      </motion.p>

      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%+0.8rem)] left-1/2 transform -translate-x-1/2 pt-2"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white/90 backdrop-blur-md rounded-xl overflow-hidden border border-black/10 dark:bg-black/80 dark:border-white/10 shadow-md"
          >
            <motion.div layout className="w-[60vw]  max-w-4xl  h-full p-2">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      role="menu"
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-3 px-2 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/10 shadow-none"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition"
    >
      <Image
        src={src}
        width={64}
        height={64}
        alt={title}
        className="w-16 h-16 object-cover rounded-md"
        unoptimized
      />
      <div className="flex flex-col">
        <h4 className="text-sm font-medium text-black dark:text-white">
          {title}
        </h4>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-1">
          {description}
        </p>
      </div>
    </a>
  )
}


export const HoveredLink = ({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) => {
  return (
    <a
      {...rest}
      className="inline-flex w-fit  text-neutral-700 dark:text-neutral-200 hover:text-gray-600 text-xs"
    >
      {children}
    </a>
  );
};


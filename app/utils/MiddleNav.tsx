"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-[90vw] md:w-[40vw] flex items-center justify-center mb-10">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  // Default bag data
  const [bagsData, setBagsData] = useState([
    {
      title: "Leather Tote",
      href: "/bags/leather-tote",
      src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      description: "Premium leather tote for daily use",
    },
    {
      title: "Handbag",
      href: "/bags/handbag",
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      description: "Elegant handbag for every occasion",
    },
    {
      title: "Travel Backpack",
      href: "/bags/travel-backpack",
      src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      description: "Durable and stylish backpacks",
    },
  ]);

  // Future API fetch (commented out for now)
  /*
  useEffect(() => {
    fetch("/api/bags")
      .then((res) => res.json())
      .then((data) => setBagsData(data))
      .catch((err) => console.error("Failed to fetch bags:", err));
  }, []);
  */

  return (
    <div
      className={cn("absolute top-0 inset-x-0 w-full px-4 z-80", className)}
    >
      <Menu setActive={setActive}>
        {/* Men */}
        <MenuItem setActive={setActive} active={active} item="Men">
          <div className="grid grid-cols-2 md:grid-cols-4 space-y-4 text-sm">
            <HoveredLink href="/men/shirts">Shirts</HoveredLink>
            <HoveredLink href="/men/pants">Pants</HoveredLink>
            <HoveredLink href="/men/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/accessories">Accessories</HoveredLink>
            <HoveredLink href="/men/shirts">Shirts</HoveredLink>
            <HoveredLink href="/men/pants">Pants</HoveredLink>
            <HoveredLink href="/men/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/accessories">Accessories</HoveredLink>
          </div>
        </MenuItem>

        {/* Women */}
        <MenuItem setActive={setActive} active={active} item="Women">
          <div className="grid grid-cols-2 md:grid-cols-4 space-y-4 text-sm">
            <HoveredLink href="/women/dresses">Dresses</HoveredLink>
            <HoveredLink href="/women/bags">Bags</HoveredLink>
            <HoveredLink href="/women/jewelry">Jewelry</HoveredLink>
            <HoveredLink href="/women/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/shirts">Shirts</HoveredLink>
            <HoveredLink href="/men/pants">Pants</HoveredLink>
            <HoveredLink href="/men/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/accessories">Accessories</HoveredLink>
            <HoveredLink href="/men/shirts">Shirts</HoveredLink>
            <HoveredLink href="/men/pants">Pants</HoveredLink>
            <HoveredLink href="/men/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/accessories">Accessories</HoveredLink>
          </div>
        </MenuItem>

        {/* Bags */}
        <MenuItem setActive={setActive} active={active} item="Bags">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-6 text-sm p-4">
            {bagsData.map((bag, index) => (
              <ProductItem
                key={index}
                title={bag.title}
                href={bag.href}
                src={bag.src}
                description={bag.description}
              />
            ))}
          </div>
        </MenuItem>

        {/* Sale */}
        <MenuItem setActive={setActive} active={active} item="Sale">
          <div className="grid grid-cols-2 md:grid-cols-4 space-y-4 text-sm">
            <HoveredLink href="/sale/men">Men’s Sale</HoveredLink>
            <HoveredLink href="/sale/women">Women’s Sale</HoveredLink>
            <HoveredLink href="/sale/shoes">Shoes Sale</HoveredLink>
            <HoveredLink href="/sale/accessories">Accessories Sale</HoveredLink>
            <HoveredLink href="/sale/men">Men’s Sale</HoveredLink>
            <HoveredLink href="/sale/women">Women’s Sale</HoveredLink>
            <HoveredLink href="/sale/shoes">Shoes Sale</HoveredLink>
            <HoveredLink href="/sale/accessories">Accessories Sale</HoveredLink>
            <HoveredLink href="/sale/men">Men’s Sale</HoveredLink>
            <HoveredLink href="/sale/women">Women’s Sale</HoveredLink>
            <HoveredLink href="/sale/shoes">Shoes Sale</HoveredLink>
            <HoveredLink href="/sale/accessories">Accessories Sale</HoveredLink>
          </div>
        </MenuItem>

        {/* All products */}
        <MenuItem setActive={setActive} active={active} item="All Products">
          <div className="grid grid-cols-2 md:grid-cols-4 space-y-4 text-sm">
            <HoveredLink href="/sale/men">Men’s Sale</HoveredLink>
            <HoveredLink href="/sale/women">Women’s Sale</HoveredLink>
            <HoveredLink href="/sale/shoes">Shoes Sale</HoveredLink>
            <HoveredLink href="/sale/accessories">Accessories Sale</HoveredLink>
            <HoveredLink href="/men/shirts">Shirts</HoveredLink>
            <HoveredLink href="/men/pants">Pants</HoveredLink>
            <HoveredLink href="/men/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/accessories">Accessories</HoveredLink>
            <HoveredLink href="/men/shirts">Shirts</HoveredLink>
            <HoveredLink href="/men/pants">Pants</HoveredLink>
            <HoveredLink href="/men/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/accessories">Accessories</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

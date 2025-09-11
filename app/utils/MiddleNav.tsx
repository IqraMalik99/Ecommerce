"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("absolute top-0  inset-x-0 max-w-2xl mx-2 md:mx-auto z-80", className)}
    >
      <Menu setActive={setActive} >
        {/* Men */}
        <MenuItem setActive={setActive} active={active} item="Men">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/men/shirts">Shirts</HoveredLink>
            <HoveredLink href="/men/pants">Pants</HoveredLink>
            <HoveredLink href="/men/shoes">Shoes</HoveredLink>
            <HoveredLink href="/men/accessories">Accessories</HoveredLink>
          </div>
        </MenuItem>

        {/* Women */}
        <MenuItem setActive={setActive} active={active} item="Women">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/women/dresses">Dresses</HoveredLink>
            <HoveredLink href="/women/bags">Bags</HoveredLink>
            <HoveredLink href="/women/jewelry">Jewelry</HoveredLink>
            <HoveredLink href="/women/shoes">Shoes</HoveredLink>
          </div>
        </MenuItem>

        {/* Bags */}
        <MenuItem setActive={setActive} active={active} item="Bags">
          <div className="grid md:grid-cols-3 grid-cols-1 max-w-screen  gap-2 md:gap-6 text-sm p-4">
            <ProductItem
              title="Leather Tote"
              href="/bags/leather-tote"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Premium leather tote for daily use"
            />
             <ProductItem
              title="Leather Tote"
              href="/bags/leather-tote"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Premium leather tote for daily use"
            />
            <ProductItem
              title="Travel Backpack"
              href="/bags/travel-backpack"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Durable and stylish backpacks"
            />
          </div>
        </MenuItem>

        {/* Sale */}
        <MenuItem setActive={setActive} active={active} item="Sale">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sale/men">Men’s Sale</HoveredLink>
            <HoveredLink href="/sale/women">Women’s Sale</HoveredLink>
            <HoveredLink href="/sale/shoes">Shoes Sale</HoveredLink>
            <HoveredLink href="/sale/accessories">Accessories Sale</HoveredLink>
          </div>
        </MenuItem>
        {/* All products */}
      <MenuItem setActive={setActive} active={active} item="All Products">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sale/men">Men’s Sale</HoveredLink>
            <HoveredLink href="/sale/women">Women’s Sale</HoveredLink>
            <HoveredLink href="/sale/shoes">Shoes Sale</HoveredLink>
            <HoveredLink href="/sale/accessories">Accessories Sale</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

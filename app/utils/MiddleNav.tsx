"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-[90vw] md:w-[40vw] flex items-center justify-center mb-10">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("absolute top-0 inset-x-0 w-full px-4 z-50", className)}>
      <Menu setActive={setActive}>

        {/* Makeup */}
        <MenuItem setActive={setActive} active={active} item="Makeup">
          <div className="w-full max-w-[260px] grid grid-cols-1 gap-2 text-sm p-4">
            <HoveredLink href="/makeup/lips">Lips</HoveredLink>
            <HoveredLink href="/makeup/eyes">Eyes</HoveredLink>
            <HoveredLink href="/makeup/face">Face</HoveredLink>
            <HoveredLink href="/makeup/tools">Tools</HoveredLink>
          </div>
        </MenuItem>

        {/* HairCare */}
        <MenuItem setActive={setActive} active={active} item="HairCare">
          <div className="w-full max-w-[280px] grid grid-cols-1 gap-2 text-sm p-4">
            <HoveredLink href="/haircare/shampoo">Shampoo</HoveredLink>
            <HoveredLink href="/haircare/conditioner">Conditioner</HoveredLink>
            <HoveredLink href="/haircare/serum">Serum</HoveredLink>
            <HoveredLink href="/haircare/oil">Hair Oil</HoveredLink>
          </div>
        </MenuItem>

        {/* SkinCare */}
        <MenuItem setActive={setActive} active={active} item="SkinCare">
          <div className="w-full max-w-[300px] grid grid-cols-1 gap-2 text-sm p-4">
            <HoveredLink href="/skincare/cleanser">Cleanser</HoveredLink>
            <HoveredLink href="/skincare/toner">Toner</HoveredLink>
            <HoveredLink href="/skincare/moisturizer">Moisturizer</HoveredLink>
            <HoveredLink href="/skincare/sunscreen">Sunscreen</HoveredLink>
          </div>
        </MenuItem>

        {/* Electronics */}
        <MenuItem setActive={setActive} active={active} item="Electronic">
          <div className="w-full max-w-[300px] grid grid-cols-1 gap-2 text-sm p-4">
            <HoveredLink href="/electronics/tools">Beauty Tools</HoveredLink>
            <HoveredLink href="/electronics/devices">Devices</HoveredLink>
            <HoveredLink href="/electronics/accessories">Accessories</HoveredLink>
          </div>
        </MenuItem>

        {/* Personal Care */}
        <MenuItem setActive={setActive} active={active} item="Personal Care">
          <div className="w-full max-w-[280px] grid grid-cols-1 gap-2 text-sm p-4">
            <HoveredLink href="/personalcare/body">Body Care</HoveredLink>
            <HoveredLink href="/personalcare/fragrance">Fragrance</HoveredLink>
            <HoveredLink href="/personalcare/hygiene">Hygiene</HoveredLink>
          </div>
        </MenuItem>

      </Menu>
    </div>
  );
}

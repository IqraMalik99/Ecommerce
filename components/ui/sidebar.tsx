"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";

// Sidebar link type
export interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

// Sidebar context type
interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

// Hook to use sidebar context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
};

// Sidebar provider
export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Mobile-only sidebar wrapper
export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

// Mobile sidebar component
export const MobileSidebar = ({ links }: { links: Links[] }) => {
  const { open, setOpen } = useSidebar();

  return (
    <div className="md:hidden relative">
      {/* Hamburger button */}
      {!open && (
        <IconMenu2
          className="text-neutral-800 dark:text-neutral-200 w-8 h-8 m-4"
          onClick={() => setOpen(true)}
        />
      )}

      {/* Overlay Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 p-6 flex flex-col"
          >
            {/* Close button */}
            <div className="self-end mb-4">
              <IconX
                className="w-8 h-8 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Sidebar links */}
            <div className="flex flex-col gap-4">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

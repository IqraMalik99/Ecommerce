"use client";
import React, { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import HomeNav from "../component/Home/HomeNav";
import { useRouter } from "next/navigation";
import Image from "next/image";
type CartItem = {
  id: string;
  name: string;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
  stock: number; // stock is required now
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Watch",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
      size: "M",
      color: "Black",
      stock: 3, // mock stock
    },
    {
      id: "2",
      name: "Running Shoes",
      quantity: 2,
      image: "https://picsum.photos/200?random=2",
      size: "42",
      color: "White",
      stock: 5, // mock stock
    },
  ]);
  const router = useRouter();

  // Remove item
  const handleRemove = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity respecting stock
  const handleQuantity = (id: string, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? Math.min(item.quantity + 1, item.stock) // can't exceed stock
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  return (
    <>
      <HomeNav bg="bg-gray-100/50" />
      <div className="min-h-screen flex items-center justify-center dark:from-gray-900 dark:to-gray-800">
        <div
          className="w-full max-w-3xl p-8 rounded-3xl shadow-2xl 
                        bg-white/30 dark:bg-gray-800/30 
                        backdrop-blur-2xl border border-white/40"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-8 tracking-wide text-center">
            🛒 Your Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-5 rounded-2xl 
                             bg-white/40 dark:bg-gray-700/30 
                             backdrop-blur-xl shadow-lg border border-white/30 
                             hover:scale-[1.02] transition-transform duration-200"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.size && `Size: ${item.size}`}{" "}
                      {item.color && `| ${item.color}`}
                    </p>
                    <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                      Stock:{" "}
                      <span
                        className={
                          item.stock > 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        {item.stock > 0 ? `${item.stock} available` : "Out of stock"}
                      </span>
                    </p>
                  </div>

                  {/* Qty */}
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm">
                    <button
                      onClick={() => handleQuantity(item.id, "dec")}
                      disabled={item.quantity <= 1}
                      className={`px-2 py-1 transition-colors ${
                        item.quantity <= 1
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      <Minus className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                    </button>
                    <span className="px-4 font-medium text-gray-800 dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantity(item.id, "inc")}
                      disabled={item.quantity >= item.stock}
                      className={`px-2 py-1 transition-colors ${
                        item.quantity >= item.stock
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      <Plus className="w-4 h-4 text-gray-700 dark:text-gray-200" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-3 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}

              {/* Confirm Button */}
              <button
                onClick={() => router.push("/payment")}
                className="w-full mt-6 py-4 rounded-2xl 
                           bg-gray-300/50 text-black font-semibold text-lg 
                           shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

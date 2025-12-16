"use client";

import { useState, useEffect } from "react";
import HomeNav from "../component/Home/HomeNav";
import Image from "next/image";
type CartItem = {
  id: string;
  name: string;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
  stock: number;
  price: number;
};

type ShippingOption = {
  id: string;
  name: string;
  price: number;
};

const shippingOptions: ShippingOption[] = [
  { id: "standard", name: "Standard (5-7 days)", price: 5 },
  { id: "express", name: "Express (2-3 days)", price: 10 },
  { id: "overnight", name: "Overnight (1 day)", price: 20 },
];

export default function Page() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Premium Watch",
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
      size: "M",
      color: "Black",
      stock: 3,
      price: 500,
    },
    {
      id: "2",
      name: "Running Shoes",
      quantity: 2,
      image: "https://picsum.photos/200?random=2",
      size: "42",
      color: "White",
      stock: 5,
      price: 500,
    },
  ]);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");
  const [selectedShipping, setSelectedShipping] =
    useState<ShippingOption>(shippingOptions[0]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("/api/cart");
      const data = await res.json();
      setCartItems(data.cartItems);
    };
    fetchCart();
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const totalPriceWithShipping = totalPrice + selectedShipping.price;

  const handleConfirm = async () => {
    if (!address || !phone) return alert("Enter address and phone");

    const bodyData = {
      cartItems,
      totalPrice: totalPriceWithShipping,
      address,
      phone,
      paymentMethod,
      shipping: selectedShipping,
    };

    if (paymentMethod === "cod") {
      alert("Order confirmed! Pay on delivery");
    } else {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    }
  };

  return (
    <>
      <HomeNav />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white/30 backdrop-blur-lg border border-white/30 rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
            Checkout
          </h2>

          {/* Cart Items */}
          <div className="mb-4 space-y-2 text-sm">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white/50 backdrop-blur-md rounded-2xl p-2 shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div className="text-gray-700">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs">
                      Qty: {item.quantity} | ${item.price}
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-gray-800 text-sm">
                  ${Number(item.price) * item.quantity}
                </span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-gray-800 mt-2 border-t pt-1 text-sm">
              <span>Total (before shipping)</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Shipping Options */}
          <div className="mb-4 text-sm">
            <h3 className="font-semibold text-gray-800 mb-2 text-sm">
              Shipping Options
            </h3>
            {shippingOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-2 text-gray-700 mb-1 text-sm"
              >
                <input
                  type="radio"
                  checked={selectedShipping.id === option.id}
                  onChange={() => setSelectedShipping(option)}
                  className="accent-gray-500"
                />
                <span>
                  {option.name} - ${option.price}
                </span>
              </label>
            ))}
          </div>

          {/* Total Including Shipping */}
          <div className="flex justify-between font-bold text-gray-800 mt-2 border-t pt-1 mb-4 text-sm">
            <span>Total (including shipping)</span>
            <span>${totalPriceWithShipping}</span>
          </div>

          {/* Address & Phone */}
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full mb-2 p-3 rounded-2xl bg-white/50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-sm"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mb-4 p-3 rounded-2xl bg-white/50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 shadow-sm"
          />

          {/* Payment Method */}
          <div className="mb-4 flex space-x-4 text-sm">
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="radio"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="accent-gray-500"
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center space-x-2 text-gray-700">
              <input
                type="radio"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-gray-500"
              />
              <span>Card Payment</span>
            </label>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full py-3 cursor-pointer bg-gray-300/70 hover:bg-gray-400/80 text-gray-900 font-medium rounded-2xl transition duration-300 shadow-md text-sm"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

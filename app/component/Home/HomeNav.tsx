"use client";
import React, { useState, useRef, useEffect } from "react";
import { NavbarDemo } from "../../utils/MiddleNav";
import { Heart, ShoppingCart, User, Search, LogIn, X } from "lucide-react";
import { SidebarDemo } from "../../utils/SidebarDemo";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

type Props = { bg?: string };

type UserItem = { id: string; name: string };
type CartItem = { id: string; name: string; qty: number };

function HomeNav({ bg = "bg-gray-50/25" }: Props) {
  const [query, setQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showHeartPopup, setShowHeartPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [wishlist, setWishlist] = useState<UserItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const router = useRouter();
  const { data: session } = useSession();

  const heartRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const email = session?.user?.email || "user@example.com";

  const handleSearch = () => {
    if (query.trim() !== "") console.log("Searching for:", query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const fetchWishlist = async () => {
    const res = await fetch(`/api/wishlist?email=${email}`);
    const data = await res.json();
    setWishlist(data);
  };

  const fetchCart = async () => {
    const res = await fetch(`/api/cart?email=${email}`);
    const data = await res.json();
    setCart(data);
  };

  const handleHeartClick = () => {
    setShowHeartPopup(!showHeartPopup);
    setShowCartPopup(false);
    fetchWishlist();
  };

  const handleCartClick = () => {
    setShowCartPopup(!showCartPopup);
    setShowHeartPopup(false);
    fetchCart();
  };

  // Close popups if click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (heartRef.current && !heartRef.current.contains(e.target as Node)) {
        setShowHeartPopup(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setShowCartPopup(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`${bg} w-screen h-[12vh] relative`}>
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-6">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={180}
          height={70}
          className="object-contain"
        />

        <div className="flex-shrink-0">
          <NavbarDemo />
        </div>

        <div className="relative w-[30vw] mb-3">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black cursor-pointer"
            onClick={handleSearch}
          />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full pl-10 pr-4 py-1.5 border rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="flex items-center space-x-4 relative">
          {/* Heart */}
          <div ref={heartRef} className="relative">
            <Heart
              className="w-5 h-5 cursor-pointer hover:text-pink-500"
              onClick={handleHeartClick}
            />
            {showHeartPopup && (
              <div className="absolute right-0 top-10 w-64 bg-white border shadow-lg rounded p-3 z-50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Wishlist</h4>
                  <X
                    className="w-4 h-4 cursor-pointer hover:text-red-500"
                    onClick={() => setShowHeartPopup(false)}
                  />
                </div>
                {wishlist.length > 0 ? (
                  wishlist.map((item) => (
                    <div key={item.id} className="py-1 border-b last:border-b-0">
                      {item.name}
                    </div>
                  ))
                ) : (
                  <p>No items in wishlist</p>
                )}
              </div>
            )}
          </div>

          {/* Cart */}
          <div ref={cartRef} className="relative">
            <ShoppingCart
              className="w-5 h-5 cursor-pointer hover:text-[#658b17]"
              onClick={handleCartClick}
            />
            {showCartPopup && (
              <div className="absolute right-0 top-10 w-64 bg-white border shadow-lg rounded p-3 z-50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Cart</h4>
                  <X
                    className="w-4 h-4 cursor-pointer hover:text-red-500"
                    onClick={() => setShowCartPopup(false)}
                  />
                </div>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="py-1 border-b last:border-b-0 flex justify-between"
                    >
                      <span>{item.name}</span>
                      <span>Qty: {item.qty}</span>
                    </div>
                  ))
                ) : (
                  <p>Cart is empty</p>
                )}
              </div>
            )}
          </div>

          {/* User */}
          <div ref={userRef} className="relative">
            {session?.user ? (
              <>
                <User
                  className="w-5 h-5 cursor-pointer hover:text-[#6f4e37]"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                />
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-black/10 p-4 text-sm text-[#6f4e37] z-50">
                    <p className="font-semibold">{session.user.name}</p>
                    <p className="text-xs text-[#a3704b]">{session.user.email}</p>
                    <button
                      onClick={() => signOut()}
                      className="mt-2 w-full py-1 px-2 rounded bg-[#d4a373] hover:bg-[#b9855e] text-black font-medium text-sm transition"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <LogIn
                className="w-5 h-5 cursor-pointer hover:text-[#6f4e37]"
                onClick={() => router.push("/signin")}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-2 pt-5">
        <NavbarDemo />
        <SidebarDemo />
      </div>
    </div>
  );
}

export default HomeNav;

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import HomeNav from "@/app/component/Home/HomeNav";

export default function Page() {
  const product = {
    id: 1,
    title: "Premium Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with deep bass",
    price: 299.99,
    discount: 20,
    stock: 10,
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L"],
    images: [
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    ],
    reviews: [
      { id: 1, user: "Ali", rating: 4, comment: "Great sound quality!" },
      { id: 2, user: "Sara", rating: 5, comment: "Love the noise cancellation." },
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [reviews, setReviews] = useState(product.reviews);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  // cart + selections
  const [cart, setCart] = useState<
    { productId: number; title: string; price: number; qty: number; color: string; size: string }[]
  >([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  // review handler
  const handleAddReview = () => {
    if (!newReview.comment.trim() || newReview.rating === 0) return;

    const newEntry = {
      id: Date.now(),
      user: "You",
      rating: newReview.rating,
      comment: newReview.comment,
    };

    setReviews([newEntry, ...reviews]);
    setNewReview({ rating: 0, comment: "" });
  };

  // cart handler
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select color and size before adding to cart.");
      return;
    }

    setCart((prevCart) => {
      const exists = prevCart.find(
        (item) => item.productId === product.id && item.color === selectedColor && item.size === selectedSize
      );
      if (exists) {
        // increase qty if same product + color + size already in cart
        return prevCart.map((item) =>
          item.productId === product.id && item.color === selectedColor && item.size === selectedSize
            ? { ...item, qty: Math.min(product.stock, item.qty + quantity) }
            : item
        );
      }
      return [
        ...prevCart,
        {
          productId: product.id,
          title: product.title,
          price: product.price,
          qty: quantity,
          color: selectedColor,
          size: selectedSize,
        },
      ];
    });
  };

  return (
    <>
    <HomeNav  bg={"bg-gray-200/50"}/>
    <div className="min-h-screen w-full bg-gray-50 p-6 flex flex-col gap-10">
      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 md:w-16">
          {product.images.map((img, index) => (
            <div
              key={index}
              className={`cursor-pointer border rounded-md overflow-hidden w-16 h-16 ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-start justify-center">
          <div className="relative w-full max-w-md h-[350px] border rounded-lg overflow-hidden shadow">
            <Image src={selectedImage} alt={product.title} fill className="object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gray-900">
              ${product.price - (product.price * product.discount) / 100}
            </span>
            {product.discount > 0 && (
              <span className="line-through text-gray-500">${product.price}</span>
            )}
          </div>

          {/* Colors */}
          {product.colors.length > 0 && (
            <div>
              <h2 className="font-medium text-gray-800 mb-1">Colors:</h2>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 border rounded-md text-sm ${
                      selectedColor === color
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes.length > 0 && (
            <div>
              <h2 className="font-medium text-gray-800 mb-1">Sizes:</h2>
              <div className="flex gap-2">
                {product.sizes.map((size, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded-md text-sm ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h2 className="font-medium text-gray-800 mb-1">Quantity:</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded-md bg-gray-100"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                className="px-3 py-1 border rounded-md bg-gray-100"
              >
                +
              </button>
              <span className="text-sm text-gray-500">({product.stock} in stock)</span>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

          {/* Cart Preview */}
          {cart.length > 0 && (
            <div className="mt-4 border rounded-md p-3 bg-white shadow">
              <h3 className="font-medium text-gray-800 mb-2">Cart Items:</h3>
              {cart.map((item, idx) => (
                <p key={idx} className="text-gray-700">
                  {item.title} ({item.color}, {item.size}) × {item.qty} — ${item.price * item.qty}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Review Section */}
      <div className="w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>

        {/* Add Comment */}
        <div className="mb-6 border-b pb-6">
          <h3 className="text-sm font-medium mb-2">Add Your Review</h3>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${
                  newReview.rating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setNewReview({ ...newReview, rating: star })}
              />
            ))}
          </div>

          <textarea
            placeholder="Write your review..."
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            rows={3}
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          />
          <button
            onClick={handleAddReview}
            className="mt-3 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Submit
          </button>
        </div>

        {/* Display Comments */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{review.user}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`${
                        review.rating >= star ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

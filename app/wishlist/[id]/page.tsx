'use client'
import HomeNav from '@/app/component/Home/HomeNav'
import React, { use, useEffect, useState } from 'react'
import { STATUS } from '@/app/models/productSchema'
import { FaTrash } from 'react-icons/fa'
import Image from 'next/image'

type Review = {
  username: string
  comment?: string
  rating?: number
  _id: string
}

type Product = {
  _id: string
  title: string
  description: string
  price: number
  reviews?: Review[]
  image: string[]
  size?: string[]
  color?: string[]
  discount?: number
  stock: number
  status: STATUS
}

function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [wishlist, setWishlist] = useState<Product[]>([])

  // ✅ Commented out fetching (you’ll enable later with API)
  // const fetchWishlist = async (id: string) => {
  //   const res = await axios.get(`${baseUrl}/api/user/wishlist/${id}`)
  //   setWishlist(res.data)
  // }

  const handleDelete = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item._id !== productId))
  }

  const handleAddToCart = (productId: string) => {
    console.log(`Add to cart: ${productId}`)
  }

  // useEffect(() => {
  //   fetchWishlist(id)
  // }, [id])

  return (
    <>
      <HomeNav />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 mx-auto">
        {wishlist.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No items in your wishlist
          </p>
        ) : (
          wishlist.map((item) => {
            const discountedPrice =
              item.discount && item.discount > 0
                ? item.price - (item.price * item.discount) / 100
                : null

            return (
              <div
                key={item._id}
                className="relative w-64 bg-white border border-gray-200 
                rounded-xl shadow-sm p-4 mx-auto transition hover:shadow-lg hover:scale-[1.02]"
              >
                {/* Image wrapper */}
                <div className="relative w-full h-36 mb-3">
                  <Image
                    src={item.image[0]}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                {/* Price */}
                {discountedPrice ? (
                  <div className="mt-2">
                    <p className="text-xs text-gray-400 line-through">
                      ${item.price}
                    </p>
                    <p className="text-sm font-bold text-black">
                      ${discountedPrice.toFixed(2)}
                      <span className="text-red-500 text-xs ml-1">
                        ({item.discount}% off)
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="text-sm font-bold text-black mt-2">
                    ${item.price}
                  </p>
                )}

                {/* Actions */}
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 
                    rounded-full text-xs shadow hover:bg-gray-200"
                  >
                    <FaTrash size={12} /> Delete
                  </button>

                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="bg-black text-white px-3 py-1 rounded-full text-xs shadow hover:bg-gray-800"
                  >
                    Add
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Page

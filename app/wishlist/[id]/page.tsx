'use client'
import HomeNav from '@/app/component/Home/HomeNav'
import React, { use, useEffect, useState } from 'react'
import { STATUS } from '@/app/models/productSchema'
import { FaTrash } from 'react-icons/fa'
import Image from 'next/image'
import axios from 'axios'
import { log } from 'console'

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

  // ✅ Default mock wishlist
  const [wishlist, setWishlist] = useState<Product[]>([
    {
      _id: '1',
      title: 'Wireless Headphones',
      description: 'Noise-cancelling over-ear headphones with deep bass',
      price: 120,
      discount: 20,
      stock: 10,
      status: STATUS.IN_STOCK,
      image: [
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=80',
      ],
    },
    {
      _id: '2',
      title: 'Smart Watch',
      description: 'Track your health and fitness goals with style',
      price: 80,
      discount: 10,
      stock: 15,
      status: STATUS.IN_STOCK,
      image: [
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=80',
      ],
    },
    {
      _id: '3',
      title: 'Gaming Mouse',
      description: 'High precision RGB gaming mouse with 7 buttons',
      price: 40,
      stock: 20,
      status: STATUS.IN_STOCK,
      image: [
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=80',
      ],
    },
  ])


  const handleDelete = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item._id !== productId))
  }

  const handleAddToCart = (productId: string) => {
    console.log(`Add to cart: ${productId}`)
  }
  // let fetcherList=async(id:string)=>{
  //       let list = await axios.get(`http://localhost:3000/api/user/wishlist/${id}`);
  //       console.log(list.data);
  //       setWishlist(list.data);          //Check data here
  // }
  // useEffect(() => {
  //   fetcherList(id);
  // },[])
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
                className="relative w-64 bg-white/70 backdrop-blur-lg border border-gray-200 
                rounded-xl shadow-md p-4 mx-auto transition hover:shadow-lg hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative w-full h-36 mb-3">
                  <Image
                    src={item.image[0]}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           300px"
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
                    className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 
                    rounded-full text-xs shadow"
                  >
                    <FaTrash size={12} /> Delete
                  </button>

                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="bg-black text-white px-3 py-1 rounded-full text-xs shadow"
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

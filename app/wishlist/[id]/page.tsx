'use client'
import HomeNav from '@/app/component/Home/HomeNav'
import React, { use, useEffect, useState } from 'react'
// import axios from 'axios'
import { STATUS } from '@/app/models/productSchema'
import { FaTrash } from 'react-icons/fa'

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
  let {id}=use(params);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const fetchWishlist = async (id: string) => {
    // Mock data (API later)
const mock: Product[] = [
  {
    _id: '1',
    title: 'Premium Watch',
    description: 'Luxury design, leather strap',
    price: 299,
    reviews: [],
    image: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80',
    ],
    size: ['M'],
    color: ['Black'],
    discount: 10,
    stock: 5,
    status: STATUS.IN_STOCK,
  },
  {
    _id: '2',
    title: 'Smartphone Pro',
    description: 'High-performance smartphone',
    price: 799,
    reviews: [],
    image: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=80',
    ],
    size: [],
    color: ['Silver'],
    discount: 15,
    stock: 12,
    status: STATUS.IN_STOCK,
  },
  {
    _id: '6',
    title: 'Gaming Laptop',
    description: 'Powerful graphics & performance',
    price: 1500,
    reviews: [],
    image: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80',
    ],
    size: [],
    color: ['Gray'],
    discount: 10,
    stock: 4,
    status: STATUS.IN_STOCK,
  },
  {
    _id: '7',
    title: 'Sunglasses',
    description: 'UV protection stylish shades',
    price: 60,
    reviews: [],
    image: [
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=500&auto=format&fit=crop&q=80',
    ],
    size: [],
    color: ['Black'],
    discount: 0,
    stock: 30,
    status: STATUS.IN_STOCK,
  },
  {
    _id: '8',
    title: 'Backpack',
    description: 'Durable travel backpack',
    price: 90,
    reviews: [],
    image: [
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=80',
    ],
    size: [],
    color: ['Green'],
    discount: 5,
    stock: 18,
    status: STATUS.IN_STOCK,
  },
  {
    _id: '10',
    title: 'Designer Handbag',
    description: 'Luxury leather handbag',
    price: 450,
    reviews: [],
    image: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=80',
    ],
    size: [],
    color: ['Brown'],
    discount: 12,
    stock: 6,
    status: STATUS.IN_STOCK,
  },
];


    setWishlist(mock)

    // Later from API
    // const res = await axios.get(`${baseUrl}/api/user/wishlist/${id}`);
    // setWishlist(res.data);
  }

  const handleDelete = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item._id !== productId))
    // axios
  }

  const handleAddToCart = (productId: string) => {
    console.log(`Add to cart: ${productId}`)
    // axios
  }

  useEffect(() => {
    fetchWishlist(id)
  }, [])



  return (
    <>
      <HomeNav />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 mx-auto">
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
                className="relative w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-4 mx-auto"
              >
                <img
                  src={item.image[0] }
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-xl"
                />

                <h3 className="text-lg font-semibold text-black mt-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>

                {/* Price with discount */}
                {discountedPrice ? (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 line-through">
                      ${item.price}
                    </p>
                    <p className="text-md font-bold text-black">
                      ${discountedPrice.toFixed(2)}
                      <span className="text-red-500 text-sm ml-2">
                        ({item.discount}% off)
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="text-md font-bold text-black mt-2">
                    ${item.price}
                  </p>
                )}

                <div className="flex justify-between items-center mt-4">
                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex items-center gap-2 bg-gray-200 text-black px-3 py-2 rounded-full shadow-sm"
                  >
                    <span className="text-sm font-medium">Delete</span>
                    <FaTrash size={14} />
                  </button>

                  {/* Add to cart button */}
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="bg-black text-white px-3 py-2 rounded-full text-sm shadow-md"
                  >
                    Add to Cart
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

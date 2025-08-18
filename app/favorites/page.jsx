'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ArrowRight, ShoppingCart, X } from 'lucide-react'

export default function FavoritesPage() {
  // Temporary mock data - to be replaced with real API calls
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      title: 'Classic Sneaker',
      handle: 'classic-sneaker',
      image: '/sneaker.jpg',
      price: 89.99
    },
    {
      id: '2',
      title: 'Premium Hoodie',
      handle: 'premium-hoodie',
      image: '/hoodie.jpg',
      price: 59.99
    }
  ])

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id))
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Favorites</h1>
          <Link href="/shop" className="flex items-center text-sm font-medium text-gray-600 hover:text-black">
            Continue Shopping <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="mx-auto w-12 h-12 text-gray-300 mb-4" />
            <h2 className="text-xl font-medium mb-2">Your favorites is empty</h2>
            <p className="text-gray-600 mb-6">Save items you love by clicking the heart icon</p>
            <Link href="/shop" className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {favorites.map((product) => (
              <div key={product.id} className="flex flex-col sm:flex-row border-b pb-6 group">
                <div className="relative w-full sm:w-32 h-32 mb-4 sm:mb-0 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                <div className="sm:ml-6 flex-1">
                  <div className="flex justify-between">
                    <Link href={`/products/${product.handle}`} className="font-medium hover:text-gray-600">
                      {product.title}
                    </Link>
                    <button 
                      onClick={() => removeFavorite(product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mt-2 text-gray-900">
                    ${product.price.toFixed(2)}
                  </div>
                  
                  <div className="mt-4 flex space-x-4">
                    <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
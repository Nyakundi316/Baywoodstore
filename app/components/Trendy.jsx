'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ShoppingBag, Star } from 'lucide-react'

const trendingCategories = [
  {
    name: 'Sneakers',
    items: [
      {
        id: 1,
        name: 'jordans',
        price: 129.99,
        image: '/jordans.jpeg',
        rating: 4.8,
        colors: 3
      },
      {
        id: 2,
        name: 'Nike shoxs',
        price: 149.99,
        image: '/shoxs.jpeg',
        rating: 4.9,
        colors: 2
      },
       {
        id: 3,
        name: 'Nike Air Max',
        price: 149.99,
        image: '/airmax95.jpeg',
        rating: 4.9,
        colors: 2
      },
       {
        id: 4,
        name: 'Adidas 00s',
        price: 149.99,
        image: '/Puma 00s.jpeg',
        rating: 4.9,
        colors: 2
      }

    ],
    link: '/shop/sneakers',
    color: 'bg-red-500'
  },
  {
    name: 'Hoodies',
    items: [
      {
        id: 5,
        name: 'Oversized Logo',
        price: 89.99,
        image: '/baywoods.png',
        rating: 4.7,
        colors: 5
      },
      {
        id: 6,
        name: 'Cropped Boxy',
        price: 79.99,
        image: '/boxy.jpeg',
        rating: 4.6,
        colors: 4
      },
       {
        id: 7,
        name: 'Cropped Boxy',
        price: 79.99,
        image: '/spider.jpeg',
        rating: 4.6,
        colors: 4
      },
       {
        id: 8,
        name: 'Cropped Boxy',
        price: 79.99,
        image: '/stussy.jpeg',
        rating: 4.6,
        colors: 4
      }
    ],
    link: '/shop/hoodies',
    color: 'bg-blue-500'
  },
  {
    name: 'Sweatpants',
    items: [
      {
        id: 9,
        name: 'Jogger Sweats',
        price: 69.99,
        image: '/trucker.jpeg',
        rating: 4.5,
        colors: 3
      },
      {
        id: 10,
        name: 'Cargo Pants',
        price: 89.99,
        image: '/sweats.jpeg',
        rating: 4.8,
        colors: 2
      },
       {
        id: 11,
        name: 'Black Sweatpants',
        price: 89.99,
        image: '/baggypants.jpeg',
        rating: 4.8,
        colors: 2
      },
       {
        id: 12,
        name: 'Herren',
        price: 89.99,
        image: '/Herren.jpeg',
        rating: 4.8,
        colors: 2
      }
    ],
    link: '/shop/sweatpants',
    color: 'bg-green-500'
  },
  {
    name: 'Caps',
    items: [
      {
        id: 13,
        name: 'New era Cap',
        price: 39.99,
        image: '/white Ny.jpeg',
        rating: 4.4,
        colors: 6
      },
      {
        id: 14,
        name: 'New Era Cap',
        price: 45.99,
        image: '/black Ny.jpeg',
        rating: 4.7,
        colors: 3
      },
       {
        id: 15,
        name: 'Bucket Hat',
        price: 45.99,
        image: '/As.jpeg',
        rating: 4.7,
        colors: 3
      },
       {
        id: 16,
        name: 'Bucket Hat',
        price: 45.99,
        image: '/LA white.jpeg',
        rating: 4.7,
        colors: 3
      }
    ],
    link: '/shop/caps',
    color: 'bg-yellow-500'
  }
]

export default function TrendingSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Trending This Week
          </h2>
          <Link 
            href="/shop" 
            className="flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            View all <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {trendingCategories.map((category) => (
            <div key={category.name} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className={`${category.color} w-3 h-6 rounded-full mr-3`}></span>
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                </div>
                <Link 
                  href={category.link}
                  className="flex items-center text-sm text-gray-600 hover:text-black transition-colors"
                >
                  See all <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Product Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.items.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Link href={`/product/${product.id}`} className="block">
                      <div className="relative aspect-square">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center text-xs">
                          <Star className="w-3 h-3 text-yellow-500 mr-1" />
                          {product.rating}
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
                        <p className="text-xs text-gray-500 mb-2">{product.colors} colors</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold">${product.price}</span>
                          <button 
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={(e) => {
                              e.preventDefault()
                              // Add to cart logic
                            }}
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
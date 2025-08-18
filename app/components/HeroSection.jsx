'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, ArrowRight, ChevronRight } from 'lucide-react'

export default function HeroSection() {
  // Product categories data
  const categories = [
    {
      name: 'Hoodies',
      image: '/hoodie.jpeg',
      description: 'Premium streetwear hoodies',
      link: '/shop?category=hoodies'
    },
    {
      name: 'Sweatpants',
      image: '/sweatpants.jpeg',
      description: 'Comfort meets style',
      link: '/shop?category=sweatpants'
    },
    {
      name: 'Gym Wear',
      image: '/2 in 1.jpeg',
      description: 'Performance streetwear',
      link: '/shop?category=gymwear'
    },
    {
      name: 'Sneakers',
      image: '/retrowhite.jpeg',
      description: 'Urban footwear essentials',
      link: '/shop?category=sneakers'
    },
    {
      name: 'Caps',
      image: '/caps.jpeg',
      description: 'Signature headwear',
      link: '/shop?category=caps'
    }
    
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="block text-gray-900">Urban Essentials</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                  For The Bold
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 max-w-md"
              >
                Discover limited edition streetwear that blends urban culture with premium craftsmanship.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link 
                  href="/shop" 
                  className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Shop Collection <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="/new-arrivals" 
                  className="flex items-center justify-center border border-black text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  New Arrivals
                </Link>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-8 flex divide-x divide-gray-200"
              >
                <div className="pr-6">
                  <p className="text-2xl font-bold">200+</p>
                  <p className="text-sm text-gray-500">Streetwear Pieces</p>
                </div>
                <div className="px-6">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-gray-500">Customer Support</p>
                </div>
                <div className="pl-6">
                  <p className="text-2xl font-bold">1K+</p>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
              </motion.div>
            </div>
            
            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <Image
                src="/seb.jpeg"
                alt="Baywoods Streetwear"
                fill
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2 text-black" />
                <span className="font-medium">Trending Now</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gray-200/50 blur-xl -z-10" />
        <div className="absolute bottom-1/4 right-20 w-40 h-40 rounded-full bg-gray-300/30 blur-xl -z-10" />
      </section>

      {/* Scrollable Categories Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Shop Categories</h2>
            <Link 
              href="/shop" 
              className="flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              View all <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            {/* Scrollable Cards Container */}
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
              <div className="flex space-x-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex-shrink-0 w-64"
                  >
                    <Link href={category.link} className="group block">
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      <div className="mt-3">
                        <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll hint for desktop */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="text-xs text-gray-500 bg-white/80 backdrop-blur px-2 py-1 rounded-full shadow-sm">
                ← Scroll to explore →
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
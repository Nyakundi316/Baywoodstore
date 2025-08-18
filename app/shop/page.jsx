'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Star } from 'lucide-react'

const ShopPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortOpen, setSortOpen] = useState(false)
  const [activeSort, setActiveSort] = useState('newest')
  const [currentTheme, setCurrentTheme] = useState(0)

  // Animated hero themes
  const themes = [
    { bg: 'from-purple-900 to-indigo-800', text: 'text-purple-100' },
    { bg: 'from-rose-900 to-pink-800', text: 'text-rose-100' },
    { bg: 'from-emerald-900 to-teal-800', text: 'text-emerald-100' },
    { bg: 'from-amber-900 to-orange-800', text: 'text-amber-100' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, []) // eslint-disable-line

  // --- Mock product data (replace with API data later) ---
  const products = [
    {
      id: 'cap-black',
      title: 'Baywoods Cap — Black',
      price: 2499,
      image: '/products/cap-black.jpg',
      category: 'caps',
      rating: 4.6,
      createdAt: '2025-08-10',
      isNew: true,
    },
    {
      id: 'sneaker-white',
      title: 'Baywoods Sneaker — White',
      price: 7999,
      image: '/products/sneaker-white.jpg',
      category: 'sneakers',
      rating: 4.8,
      createdAt: '2025-08-08',
      isNew: true,
    },
    {
      id: 'tee-cream',
      title: 'Baywoods Tee — Cream',
      price: 3499,
      image: '/products/tee-cream.jpg',
      category: 'clothing',
      rating: 4.3,
      createdAt: '2025-08-05',
      isNew: false,
    },
    {
      id: 'cap-red',
      title: 'Baywoods Cap — Red',
      price: 2599,
      image: '/products/cap-red.jpg',
      category: 'caps',
      rating: 4.2,
      createdAt: '2025-07-30',
      isNew: false,
    },
    {
      id: 'sneaker-black',
      title: 'Baywoods Sneaker — Black',
      price: 8299,
      image: '/products/sneaker-black.jpg',
      category: 'sneakers',
      rating: 4.9,
      createdAt: '2025-07-28',
      isNew: false,
    },
    {
      id: 'hoodie-grey',
      title: 'Baywoods Hoodie — Grey',
      price: 5999,
      image: '/products/hoodie-grey.jpg',
      category: 'clothing',
      rating: 4.5,
      createdAt: '2025-07-25',
      isNew: false,
    },
  ]

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'sneakers', name: 'Sneakers' },
    { id: 'caps', name: 'Caps' },
    { id: 'clothing', name: 'Clothing' },
  ]

  const sortOptions = [
    { id: 'newest', name: 'Newest' },
    { id: 'price_low_high', name: 'Price: Low to High' },
    { id: 'price_high_low', name: 'Price: High to Low' },
    { id: 'rating', name: 'Rating' },
  ]

  // Filter products
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products
    return products.filter(p => p.category === activeFilter)
  }, [products, activeFilter])

  // Sort products
  const sortedProducts = useMemo(() => {
    const arr = [...filteredProducts]
    switch (activeSort) {
      case 'price_low_high':
        return arr.sort((a, b) => a.price - b.price)
      case 'price_high_low':
        return arr.sort((a, b) => b.price - a.price)
      case 'rating':
        return arr.sort((a, b) => b.rating - a.rating)
      case 'newest':
      default:
        return arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  }, [filteredProducts, activeSort])

  // Price format (KSh)
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' })
      .format(price)
      .replace('KES', 'KSh')

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* BG dots */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
      </div>

      {/* Hero */}
      <div className={`relative h-64 flex items-center justify-center transition-all duration-1000 ${themes[currentTheme].bg} bg-gradient-to-r`}>
        <div className="absolute inset-0 opacity-70 z-10" />
        <Image
          src="/shop-banner.jpg"
          alt="Streetwear Shop"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
        <div className={`relative z-20 text-center px-4 ${themes[currentTheme].text}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BAYWOODS SHOP</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Premium streetwear & urban fashion in Kenya
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 sticky top-4">
              <h2 className="font-bold text-xl mb-6">Categories</h2>
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveFilter(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeFilter === category.id ? 'bg-black text-white' : 'hover:bg-gray-100/50'}`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Price Range</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100/50">
                    Under KSh 10,000
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100/50">
                    KSh 10,000 - 30,000
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100/50">
                    Over KSh 30,000
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm hover:bg-gray-100/50 transition-all"
                >
                  <span>Sort by: {sortOptions.find(o => o.id === activeSort)?.name}</span>
                  {sortOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {sortOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 z-10">
                    {sortOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => {
                          setActiveSort(option.id)
                          setSortOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100/50 ${activeSort === option.id ? 'bg-gray-100/50 font-medium' : ''}`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <div key={product.id} className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                      {product.isNew && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{product.title}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                            fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                      </div>
                      <p className="text-gray-900 font-bold">{formatPrice(product.price)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-16 bg-white/90 backdrop-blur-sm rounded-xl">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default ShopPage

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Search, User, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mock data - replace with actual data fetching in a real app
  useEffect(() => {
    setFavoritesCount(3)
    setCartCount(2)
  }, [])

  // Fake suggestion logic - you can replace with API
  useEffect(() => {
    if (searchQuery.length > 0) {
      setSuggestions([
        `Trending: ${searchQuery} Sneakers`,
        `Search "${searchQuery}" in Caps`,
        `New Arrivals for "${searchQuery}"`,
        `Sale items matching "${searchQuery}"`
      ])
    } else {
      setSuggestions([])
    }
  }, [searchQuery])

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'} rounded-b-3xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo.png"
                    alt="Baywoods Logo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                  BAYWOODS
                </span>
              </Link>
            </div>

            {/* Center: Navigation & Search */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <Link href="/shop" className="hover:text-gray-600 transition-colors">Shop</Link>
              <Link href="/collections" className="hover:text-gray-600 transition-colors">Collections</Link>
              <Link href="/sale" className="text-red-500 hover:text-red-600 transition-colors">Sale</Link>
              <Link href="/impact" className="hover:text-gray-600 transition-colors">Impact</Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sneakers, caps, clothing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none w-64"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
                
                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg p-2 z-50">
                    {suggestions.map((s, i) => (
                      <div key={i} className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-5">
              {/* Favorites */}
              <Link href="/favorites" className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative p-1 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              <Link href="/account" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (unchanged) */}
      {/* ... keep your mobile bottom menu here ... */}

      {/* Keep your Search Overlay if you want big-screen search too */}
    </>
  )
}

export default Navbar

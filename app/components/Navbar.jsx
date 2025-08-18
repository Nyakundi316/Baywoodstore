'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Search, User, Heart, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([]) // Removed TypeScript annotation
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  // Fake suggestion logic - replace with API call
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

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // Handle search submission
    console.log('Searching for:', searchQuery)
    setSearchOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation Bar */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Logo and Mobile Menu Button */}
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden mr-4 p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/logo.png"
                    alt="Baywoods Logo"
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
                <span className="hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                  BAYWOODS
                </span>
              </Link>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <Link href="/shop" className="hover:text-gray-600 transition-colors">Shop</Link>
              <Link href="/collections" className="hover:text-gray-600 transition-colors">Collections</Link>
              <Link href="/sale" className="text-red-500 hover:text-red-600 transition-colors">Sale</Link>
              <Link href="/impact" className="hover:text-gray-600 transition-colors">Impact</Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
            </div>

            {/* Right: Icons and Search (Desktop) */}
            <div className="flex items-center space-x-5">
              {/* Search Button (Mobile) */}
              <button 
                className="md:hidden p-1 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Search Bar (Desktop) */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search sneakers, caps, clothing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none w-64 text-sm"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
                
                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg p-2 z-50 border border-gray-200">
                    {suggestions.map((s, i) => (
                      <div 
                        key={i} 
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => {
                          setSearchQuery(s.replace(/^Trending: |Search "|" in Caps|New Arrivals for "|"|Sale items matching "/g, ''))
                          setSuggestions([])
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-4">
              <Link 
                href="/" 
                className="block py-2 hover:bg-gray-100 px-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="block py-2 hover:bg-gray-100 px-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/collections" 
                className="block py-2 hover:bg-gray-100 px-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                href="/sale" 
                className="block py-2 text-red-500 hover:bg-red-50 px-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sale
              </Link>
              <Link 
                href="/impact" 
                className="block py-2 hover:bg-gray-100 px-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 hover:bg-gray-100 px-2 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="fixed top-0 left-0 right-0 bg-white z-50 p-4 shadow-md md:hidden">
          <div className="flex items-center">
            <form onSubmit={handleSearchSubmit} className="flex-1 flex">
              <input
                type="text"
                placeholder="Search sneakers, caps, clothing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                autoFocus
              />
              <button 
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-full"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            <button 
              className="ml-2 p-2"
              onClick={() => setSearchOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="mt-2 bg-white">
              {suggestions.map((s, i) => (
                <div 
                  key={i} 
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm border-b border-gray-100"
                  onClick={() => {
                    setSearchQuery(s.replace(/^Trending: |Search "|" in Caps|New Arrivals for "|"|Sale items matching "/g, ''))
                    setSearchOpen(false)
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Padding to prevent content from being hidden behind navbar */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar
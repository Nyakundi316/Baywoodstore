'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Search, User, Heart, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [favoritesCount, setFavoritesCount] = useState(3)
  const [cartCount, setCartCount] = useState(2)
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    console.log('Searching for:', searchQuery)
    setSearchOpen(false)
  }

  return (
    <>
      {/* Centered Curved Navbar */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full ${scrolled ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg' : 'bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl'} w-[95%] max-w-4xl`}>
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Centered */}
            <Link href="/" className="flex items-center group ml-4">
              <div className="w-14 h-14 relative mr-2 group-hover:rotate-12 transition-transform">
                <Image
                  src="/second.png"
                  alt="Baywoods Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-extrabold tracking-tighter">
               
              </span>
            </Link>

            {/* Desktop Navigation - Curved Links */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className={`px-4 py-1.5 rounded-full ${scrolled ? 'hover:bg-white/20 text-black' : 'hover:bg-gray-100 text-gray-900'} font-medium transition-all`}>Home</Link>
              <Link href="/shop" className={`px-4 py-1.5 rounded-full ${scrolled ? 'hover:bg-white/20 text-grey-900' : 'hover:bg-gray-100 text-gray-900'} font-medium transition-all`}>Shop</Link>
              <Link href="/collections" className={`px-4 py-1.5 rounded-full ${scrolled ? 'hover:bg-white/20 text-grey-800' : 'hover:bg-gray-100 text-gray-900'} font-medium transition-all`}>Collections</Link>
              <Link href="/sale" className="px-4 py-1.5 rounded-full bg-red-500 text-black font-medium hover:bg-red-600 transition-all">Sale</Link>
              <Link href="/impact" className={`px-4 py-1.5 rounded-full ${scrolled ? 'hover:bg-white/20 text-black' : 'hover:bg-gray-100 text-gray-900'} font-medium transition-all`}>Impact</Link>
            </div>

            {/* Action Icons - Circular Design */}
            <div className="flex items-center space-x-2">
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>

              <div className="hidden md:flex items-center space-x-1">
                <Link href="/favorites" className={`relative p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-white/20 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                  <Heart className="w-5 h-5" />
                  {favoritesCount > 0 && (
                    <span className={`absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center border-2 ${scrolled ? 'bg-red-500 text-white border-white/20' : 'bg-red-500 text-white border-white'}`}>
                      {favoritesCount}
                    </span>
                  )}
                </Link>

                <Link href="/cart" className={`relative p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-white/20 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className={`absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center border-2 ${scrolled ? 'bg-white text-gray-900 border-white/20' : 'bg-gray-900 text-white border-white'}`}>
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>

              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Curved Design */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg mx-4 mt-2 px-6 py-4">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-3 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="block px-4 py-3 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/collections" 
                className="block px-4 py-3 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                href="/sale" 
                className="block px-4 py-3 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sale
              </Link>
              <Link 
                href="/impact" 
                className="block px-4 py-3 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Search - Rounded Design */}
        {searchOpen && (
          <div className="md:hidden fixed top-4 left-4 right-4 z-50 bg-white rounded-2xl shadow-xl p-4">
            <div className="flex items-center">
              <form onSubmit={handleSearchSubmit} className="flex-1 flex bg-gray-100 rounded-full pl-4 pr-1 py-1">
                <input
                  type="text"
                  placeholder="Search streetwear..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:outline-none w-full placeholder-gray-500"
                  autoFocus
                />
                <button 
                  type="submit"
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                >
                  <Search className="w-4 h-4 text-gray-700" />
                </button>
              </form>
              <button 
                className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setSearchOpen(false)}
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {suggestions.length > 0 && (
              <div className="mt-2 bg-white rounded-xl shadow-inner p-2">
                {suggestions.map((s, i) => (
                  <div 
                    key={i} 
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm rounded-lg"
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
      </nav>

      {/* Spacer with extra top padding */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar
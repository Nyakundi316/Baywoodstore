// components/NewArrivals.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

const newArrivals = [
  { id: 1, title: "Chrome Hearts Distressed Tee", brand: "Chrome Hearts", price: 350, image: "/ChromeHearts.jpeg", category: "Shirts", handle: "chrome-hearts-distressed-tee", isNew: true, colors: ["Black", "White"], discount: 15 },
  { id: 2, title: "Stussy World Tour Tee", brand: "Stussy", price: 75, image: "/stussy.jpeg", category: "Shirts", handle: "stussy-world-tour-tee", isNew: true, colors: ["Black", "Gray", "White"] },
  { id: 3, title: "Nike Shox R4", brand: "Nike", price: 180, image: "/shoxs.jpeg", category: "Sneakers", handle: "nike-shox-r4", isNew: true, colors: ["White", "Black", "Silver"], discount: 10 },
  { id: 4, title: "Air Max 95 OG", brand: "Nike", price: 190, image: "/airmax95.jpeg", category: "Sneakers", handle: "air-max-95-og", isNew: true, colors: ["Neon", "Black", "White"] },
  { id: 5, title: "Travis Scott Dunk Low", brand: "Nike", price: 1250, image: "/Travis Dunks.jpeg", category: "Sneakers", handle: "travis-scott-dunk", isNew: true, colors: ["Brown", "Blue"], limited: true },
  { id: 6, title: "Dr. Martens Jadon Boot", brand: "Dr. Martens", price: 220, image: "/dr martens.jpeg", category: "Footwear", handle: "dr-martens-jadon", isNew: true, colors: ["Black", "Brown"] },
  { id: 7, title: "New Era Yankees Fitted", brand: "New Era", price: 55, image: "/newera.jpeg", category: "Caps", handle: "new-era-yankees", isNew: true, colors: ["Navy", "Black", "White"] },
  { id: 8, title: "Nike Tech Fleece Joggers", brand: "Nike", price: 120, image: "/nikejoggers runners.jpeg", category: "Sweatpants", handle: "nike-tech-fleece", isNew: true, colors: ["Black", "Gray", "Navy"] },
  { id: 9, title: "BAPE Camo Shark Hoodie", brand: "BAPE", price: 420, image: "/bapestar.jpeg", category: "Hoodies", handle: "bape-camo-shark", isNew: true, colors: ["Green Camo", "Black Camo", "Pink Camo"], discount: 20 },
  { id: 10, title: "BMW Leather Jacket", brand: "BMW Leathers", price: 950, image: "/bmw leather jackets.jpeg", category: "Jackets", handle: "bmw-leather-jacket", isNew: true, colors: ["Black", "Brown"], limited: true },
  { id: 11, title: "Supreme Box Logo Hoodie", brand: "Supreme", price: 398, image: "/supreme-hoodie.jpeg", category: "Hoodies", handle: "supreme-box-logo", isNew: true, colors: ["Red", "Black", "Navy"] },
  { id: 12, title: "Yeezy Boost 350", brand: "Adidas", price: 220, image: "/yeezy-350.jpeg", category: "Sneakers", handle: "yeezy-boost-350", isNew: true, colors: ["Zebra", "Beluga", "Oreo"] },
  { id: 13, title: "Carhartt WIP Beanie", brand: "Carhartt", price: 28, image: "/carhartt-beanie.jpeg", category: "Accessories", handle: "carhartt-wip-beanie", isNew: true, colors: ["Gray", "Black", "Brown"] },
  { id: 14, title: "Off-White Industrial Belt", brand: "Off-White", price: 160, image: "/off-white-belt.jpeg", category: "Accessories", handle: "off-white-belt", isNew: true, colors: ["Yellow", "Black", "White"] },
  { id: 15, title: "Palace Tri-Ferg Tee", brand: "Palace", price: 88, image: "/palace-tee.jpeg", category: "Shirts", handle: "palace-tri-ferg", isNew: true, colors: ["White", "Black", "Blue"] },
];

const categories = ["All", "Sneakers", "Shirts", "Hoodies", "Jackets", "Sweatpants", "Caps", "Footwear", "Accessories"];

export default function NewArrivals() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = useMemo(() => {
    const q = search.trim().toLowerCase();
    let filtered = newArrivals.filter((p) => {
      const byCat = activeCat === "All" || p.category === activeCat;
      const byQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return byCat && byQuery;
    });

    // Sorting logic
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [activeCat, search, sortBy]);

  return (
    <section className="py-10 sm:py-16 bg-white relative">
      {/* Floating action button for mobile filters */}
      {!showFilters && (
        <button
          onClick={() => setShowFilters(true)}
          className="sm:hidden fixed bottom-20 right-4 z-40 bg-black text-white p-3 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      )}

      {/* Mobile filter overlay */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 sm:hidden"
              onClick={() => setShowFilters(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 p-5 overflow-y-auto sm:hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-3"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Categories</label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setActiveCat(c);
                        setShowFilters(false);
                      }}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-sm border transition ${
                        activeCat === c ? "bg-black text-white border-black" : "border-black/10 text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveCat("All");
                  setSearch("");
                  setSortBy("newest");
                }}
                className="w-full py-3 border border-black rounded-full font-medium mt-4"
              >
                Reset Filters
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">NEW ARRIVALS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 sm:mt-3">
            Fresh streetwear drops just added to our collection
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
          {/* Search */}
          <div className="relative w-full sm:max-w-md">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tees, sneakers, caps…"
              className="w-full rounded-full border border-black/10 bg-white py-3 pl-4 pr-10 text-base outline-none focus:border-black/30"
            />
            <div className="absolute right-3 top-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Sort dropdown for desktop */}
          <div className="hidden sm:block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-black/10 bg-white py-3 pl-4 pr-8 text-base outline-none focus:border-black/30"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar sm:flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm border transition ${
                  activeCat === c ? "bg-black text-white border-black" : "border-black/10 text-gray-800 hover:bg-gray-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count and mobile sort trigger */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">{items.length} products</p>
          <button 
            onClick={() => setShowFilters(true)}
            className="sm:hidden flex items-center text-sm font-medium"
          >
            Sort & Filter
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>

        {/* Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {item.isNew && (
                  <div className="absolute top-2 right-2 bg-black text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full z-10">
                    NEW
                  </div>
                )}
                
                {item.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full z-10">
                    -{item.discount}%
                  </div>
                )}
                
                {item.limited && (
                  <div className="absolute top-9 left-2 bg-amber-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full z-10">
                    LIMITED
                  </div>
                )}

                <Link href={`/products/${encodeURIComponent(item.handle)}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={encodeURI(item.image)}
                      alt={`${item.brand} ${item.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 20vw"
                      priority={item.id <= 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Quick view button */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white text-black text-xs font-medium py-2 px-4 rounded-full shadow-md">
                        Quick View
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                      {item.brand} • {item.category}
                    </p>
                    
                    {/* Color options */}
                    {item.colors && (
                      <div className="flex mt-2 space-x-1">
                        {item.colors.slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                            className="w-3 h-3 rounded-full border border-gray-200"
                            style={{ 
                              backgroundColor: color.toLowerCase().includes("black") ? "#000" : 
                                            color.toLowerCase().includes("white") ? "#fff" :
                                            color.toLowerCase().includes("gray") ? "#9ca3af" :
                                            color.toLowerCase().includes("blue") ? "#3b82f6" :
                                            color.toLowerCase().includes("red") ? "#ef4444" :
                                            color.toLowerCase().includes("green") ? "#10b981" :
                                            color.toLowerCase().includes("brown") ? "#a52a2a" :
                                            color.toLowerCase().includes("pink") ? "#ec4899" :
                                            color.toLowerCase().includes("navy") ? "#1e3a8a" :
                                            color.toLowerCase().includes("neon") ? "#bef264" :
                                            color.toLowerCase().includes("yellow") ? "#fbbf24" : "#f3f4f6"
                            }}
                            title={color}
                          />
                        ))}
                        {item.colors.length > 3 && (
                          <div className="text-xs text-gray-500 flex items-center">
                            +{item.colors.length - 3}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center mt-2">
                      {item.discount ? (
                        <>
                          <p className="font-semibold text-sm sm:text-base">${(item.price * (1 - item.discount/100)).toFixed(2)}</p>
                          <p className="ml-2 text-xs text-gray-500 line-through">${item.price.toFixed(2)}</p>
                        </>
                      ) : (
                        <p className="font-semibold text-sm sm:text-base">${item.price.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium">No products found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setActiveCat("All");
                setSearch("");
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Desktop CTA */}
        <div className="hidden sm:block text-center mt-10">
          <Link
            href="/collections/new-arrivals"
            className="inline-flex items-center px-6 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors"
          >
            View All New Arrivals
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className={`sm:hidden fixed bottom-4 left-4 right-4 z-30 transition-transform duration-300 ${isScrolled ? "translate-y-0" : "translate-y-20"}`}>
        <Link
          href="/collections/new-arrivals"
          className="block text-center rounded-full bg-black text-white py-3 text-sm font-semibold shadow-lg active:scale-[0.99]"
        >
          View All New Arrivals
        </Link>
      </div>
    </section>
  );
}
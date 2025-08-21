// components/NewArrivals.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const newArrivals = [
  { id: 1, title: "Chrome Hearts Distressed Tee", brand: "Chrome Hearts", price: 350, image: "/ChromeHearts.jpeg", category: "Shirts", handle: "chrome-hearts-distressed-tee", isNew: true },
  { id: 2, title: "Stussy World Tour Tee", brand: "Stussy", price: 75, image: "/stussy.jpeg", category: "Shirts", handle: "stussy-world-tour-tee", isNew: true },
  { id: 3, title: "Nike Shox R4", brand: "Nike", price: 180, image: "/shoxs.jpeg", category: "Sneakers", handle: "nike-shox-r4", isNew: true },
  { id: 4, title: "Air Max 95 OG", brand: "Nike", price: 190, image: "/airmax95.jpeg", category: "Sneakers", handle: "air-max-95-og", isNew: true },
  { id: 5, title: "Travis Scott Dunk Low", brand: "Nike", price: 1250, image: "/Travis Dunks.jpeg", category: "Sneakers", handle: "travis-scott-dunk", isNew: true },
  { id: 6, title: "Dr. Martens Jadon Boot", brand: "Dr. Martens", price: 220, image: "/dr martens.jpeg", category: "Footwear", handle: "dr-martens-jadon", isNew: true },
  { id: 7, title: "New Era Yankees Fitted", brand: "New Era", price: 55, image: "/newera.jpeg", category: "Caps", handle: "new-era-yankees", isNew: true },
  { id: 8, title: "Nike Tech Fleece Joggers", brand: "Nike", price: 120, image: "/nikejoggers runners.jpeg", category: "Sweatpants", handle: "nike-tech-fleece", isNew: true },
  { id: 9, title: "BAPE Camo Shark Hoodie", brand: "BAPE", price: 420, image: "/bapestar.jpeg", category: "Hoodies", handle: "bape-camo-shark", isNew: true },
  { id: 10, title: "BMW", brand: "Bmw leathers", price: 950, image: "/bmw leather jackets.jpeg", category: "Jackets", handle: "schott-leather-jacket", isNew: true },
];

const categories = ["All", "Sneakers", "Shirts", "Hoodies", "Jackets", "Sweatpants", "Caps", "Footwear"];

export default function NewArrivals() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const items = useMemo(() => {
    const q = search.trim().toLowerCase();
    return newArrivals.filter((p) => {
      const byCat = activeCat === "All" || p.category === activeCat;
      const byQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return byCat && byQuery;
    });
  }, [activeCat, search]);

  return (
    <section className="py-10 sm:py-16 bg-white">
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
              className="w-full rounded-full border border-black/10 bg-white py-3 pl-4 pr-4 text-base outline-none focus:border-black/30"
            />
          </div>

          {/* Category chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar sm:flex-wrap">
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {item.isNew && (
                <div className="absolute top-2 right-2 bg-black text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full z-10">
                  NEW
                </div>
              )}

              <Link href={`/products/${encodeURIComponent(item.handle)}`} className="block">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={encodeURI(item.image)}           // handles spaces in filenames
                    alt={`${item.brand} ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 20vw"
                    priority={item.id <= 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="mt-2 sm:mt-3">
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                    {item.brand} • {item.category}
                  </p>
                  <p className="mt-1 font-semibold text-sm sm:text-base">${item.price.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

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
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30">
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

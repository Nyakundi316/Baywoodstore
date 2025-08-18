// components/NewArrivals.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const newArrivals = [
  {
    id: 1,
    title: "Chrome Hearts Distressed Tee",
    brand: "Chrome Hearts",
    price: 350,
    image: "/ChromeHearts.jpeg", // Local image path
    category: "Shirts",
    handle: "chrome-hearts-distressed-tee",
    isNew: true
  },
  {
    id: 2,
    title: "Stussy World Tour Tee",
    brand: "Stussy",
    price: 75,
    image: "/stussy.jpeg",
    category: "Shirts",
    handle: "stussy-world-tour-tee",
    isNew: true
  },
  {
    id: 3,
    title: "Nike Shox R4",
    brand: "Nike",
    price: 180,
    image: "/shoxs.jpeg",
    category: "Sneakers",
    handle: "nike-shox-r4",
    isNew: true
  },
  {
    id: 4,
    title: "Air Max 95 OG",
    brand: "Nike",
    price: 190,
    image: "/airmax95.jpeg",
    category: "Sneakers",
    handle: "air-max-95-og",
    isNew: true
  },
  {
    id: 5,
    title: "Travis Scott Dunk Low",
    brand: "Nike",
    price: 1250,
    image: "/Travis Dunks.jpeg",
    category: "Sneakers",
    handle: "travis-scott-dunk",
    isNew: true
  },
  {
    id: 6,
    title: "Dr. Martens Jadon Boot",
    brand: "Dr. Martens",
    price: 220,
    image: "/dr martens.jpeg",
    category: "Footwear",
    handle: "dr-martens-jadon",
    isNew: true
  },
  {
    id: 7,
    title: "New Era Yankees Fitted",
    brand: "New Era",
    price: 55,
    image: "/newera.jpeg",
    category: "Caps",
    handle: "new-era-yankees",
    isNew: true
  },
  {
    id: 8,
    title: "Nike Tech Fleece Joggers",
    brand: "Nike",
    price: 120,
    image: "/nikejoggers runners.jpeg",
    category: "Sweatpants",
    handle: "nike-tech-fleece",
    isNew: true
  },
  {
    id: 9,
    title: "BAPE Camo Shark Hoodie",
    brand: "BAPE",
    price: 420,
    image: "/bapestar.jpeg",
    category: "Hoodies",
    handle: "bape-camo-shark",
    isNew: true
  },
  {
    id: 10,
    title: "BMW",
    brand: "Bmw leathers",
    price: 950,
    image: "/bmw leather jackets.jpeg",
    category: "Jackets",
    handle: "schott-leather-jacket",
    isNew: true
  }
];

export default function NewArrivals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NEW ARRIVALS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fresh streetwear drops just added to our collection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {newArrivals.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {item.isNew && (
                <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  NEW
                </div>
              )}
              <Link href={`/products/${item.handle}`} className="block">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={`${item.brand} ${item.title}`}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={item.id <= 4} // Prioritize first 4 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                  <p className="mt-1 font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/collections/new-arrivals"
            className="inline-flex items-center px-6 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            View All New Arrivals
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
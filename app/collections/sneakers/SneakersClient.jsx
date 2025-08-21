"use client";

import { useState, useMemo } from "react";
import ProductCard from "../../components/ProductCard";
import { ChevronDown, ChevronUp } from "lucide-react";

// ✅ Frontend-only static data (no API)
// Make sure these files exist in /public/images/sneakers/
const SNEAKERS = [
  {
    id: "airmax95",
    title: "Nike Air Max 95",
    subtitle: "Retro Vibes",
    price: 12999,
    images: ["/images/sneakers/airmax95-a.jpg", "/images/sneakers/airmax95-b.jpg"],
    colors: [
      { name: "Red", hex: "#e11d48" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["39", "40", "41", "42", "43", "44"],
    badge: "NEW",
    brand: "Nike",
  },
  {
    id: "yeezy-boost",
    title: "Adidas Yeezy Boost",
    subtitle: "Iconic silhouette",
    price: 18999,
    images: ["/images/sneakers/yeezy-boost-a.jpg", "/images/sneakers/yeezy-boost-b.jpg"],
    colors: [{ name: "Gray", hex: "#9ca3af" }],
    sizes: ["40", "41", "42", "43", "44", "45"],
    badge: "HOT",
    brand: "Adidas",
  },
  {
    id: "runner-neo",
    title: "Runner Neo — Grey/Volt",
    subtitle: "Breathable mesh, responsive sole",
    price: 9999,
    images: ["/images/sneakers/runner-neo-a.jpg", "/images/sneakers/runner-neo-b.jpg"],
    colors: [
      { name: "Grey/Volt", hex: "#bfc5c8" },
      { name: "All Black", hex: "#000000" },
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    brand: "Baywoods",
  },
];

const BRANDS = ["All", "Baywoods", "Nike", "Adidas", "New Balance", "Puma"];
const SIZES = ["36","37","38","39","40","41","42","43","44","45","46"];
const COLORS = [
  { name: "Black", hex: "#111111" },
  { name: "White", hex: "#ffffff" },
  { name: "Grey", hex: "#bdbdbd" },
  { name: "Cream", hex: "#e9e4da" },
  { name: "Blue", hex: "#1e3a8a" },
  { name: "Red", hex: "#dc2626" },
];

export default function SneakersClient() {
  const [query, setQuery] = useState("");
  const [openFilters, setOpenFilters] = useState(true);
  const [brand, setBrand] = useState("All");
  const [size, setSize] = useState("all");
  const [color, setColor] = useState("all");
  const [sort, setSort] = useState("newest");
  const [maxPrice, setMaxPrice] = useState(20000);

  const filtered = useMemo(() => {
    let list = [...SNEAKERS];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.brand?.toLowerCase().includes(q)
      );
    }

    if (brand !== "All") list = list.filter((p) => p.brand === brand);
    if (size !== "all") list = list.filter((p) => p.sizes?.includes(size));
    if (color !== "all")
      list = list.filter((p) =>
        p.colors?.some((c) => c.name.toLowerCase().includes(color))
      );

    list = list.filter((p) => (p.price ?? 0) <= maxPrice);

    switch (sort) {
      case "price_low_high":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        // If you add createdAt later, sort by date. For now keep original order.
        break;
    }
    return list;
  }, [query, brand, size, color, sort, maxPrice]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-16 text-white">
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
            New Arrivals
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Sneakers</h1>
          <p className="mt-2 max-w-2xl text-white/80">
            Fresh drops, everyday heat, and limited pairs. Built for movement and culture.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative w-full sm:max-w-md">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sneakers..."
              className="w-full rounded-xl border border-black/10 bg-white py-3 pl-4 pr-12 text-sm outline-none focus:border-black/30"
            />
            <button
              onClick={() => setOpenFilters(!openFilters)}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-black/90"
            >
              {openFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              Filters
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="price_low_high">Price: Low → High</option>
              <option value="price_high_low">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        {openFilters && (
          <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-black/5 bg-gray-50 p-4 sm:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="text-sm font-semibold">Brand</div>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
              >
                {BRANDS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Size */}
            <div>
              <div className="text-sm font-semibold">Size (EU)</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setSize("all")}
                  className={`min-w-[2.5rem] rounded-xl px-2 py-1.5 text-sm ${
                    size === "all" ? "bg-black text-white" : "border border-black/10 hover:bg-white"
                  }`}
                >
                  All
                </button>
                {SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`min-w-[2.5rem] rounded-xl px-2 py-1.5 text-sm ${
                      size === s ? "bg-black text-white" : "border border-black/10 hover:bg-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <div className="text-sm font-semibold">Color</div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setColor("all")}
                  className={`rounded-full border px-3 py-1.5 text-sm ${
                    color === "all" ? "bg-black text-white" : "border-black/10 hover:bg-white"
                  }`}
                >
                  All
                </button>
                {COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name.toLowerCase())}
                    title={c.name}
                    className={`h-6 w-6 rounded-full ring-1 ring-black/10 ${
                      color === c.name.toLowerCase() ? "ring-2 ring-black" : ""
                    }`}
                    style={{ background: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="text-sm font-semibold">Max Price</div>
              <div className="mt-2 flex items-center gap-3">
                <input
                  type="range"
                  min={3000}
                  max={20000}
                  step={100}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full"
                />
                <div className="min-w-[6rem] rounded-xl border border-black/10 bg-white px-3 py-1.5 text-sm">
                  KSh {maxPrice.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-black/5 bg-white p-12 text-center">
            <p className="text-gray-600">No sneakers found. Try adjusting filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductCard
                key={p.id}
                product={{ ...p, index: i }}
                onAddToCart={(payload) => console.log("ADD", payload)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

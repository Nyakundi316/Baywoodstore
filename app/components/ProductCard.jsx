'use client'

// components/ProductCard.jsx
import Image from "next/image";
import { useMemo, useState } from "react";

/**
 * Expected product shape
 * {
 *   id, title, subtitle, price, index,
 *   images: ["/img1.jpg", "/img2.jpg"],
 *   colors?: [{ name: "Black", hex: "#111", image?: "/img_black.jpg"}],
 *   sizes?: ["S","M","L","XL"],
 *   badge?: "NEW"
 * }
 */
export default function ProductCard({ product, onAddToCart }) {
  const [hover, setHover] = useState(false);
  const [activeColor, setActiveColor] = useState(product.colors?.[0] ?? null);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  // Pick the best image: color-specific > hover alt > default
  const img = useMemo(() => {
    if (activeColor?.image) return activeColor.image;
    if (hover && product.images?.[1]) return product.images[1];
    return product.images?.[0];
  }, [activeColor, hover, product.images]);

  const priceText = useMemo(
    () => `KSh ${Number(product.price || 0).toLocaleString()}`,
    [product.price]
  );

  function handleQuickAdd() {
    // If sizes exist, open the picker; otherwise add directly
    if (product.sizes?.length) {
      setSizeOpen(true);
    } else {
      onAddToCart?.({ id: product.id, color: activeColor?.name, size: null, qty: 1 });
    }
  }

  function handleConfirmAdd() {
    if (!selectedSize && product.sizes?.length) return;
    onAddToCart?.({ id: product.id, color: activeColor?.name, size: selectedSize, qty: 1 });
    setSizeOpen(false);
    setSelectedSize(null);
  }

  return (
    <div
      className="group rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:shadow-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Media */}
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        {img && (
          <Image
            src={img}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width:1024px) 50vw, 33vw"
            priority={product.index < 6}
          />
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-2 py-1 text-[11px] text-white">
            {product.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="line-clamp-1 font-semibold">{product.title}</h3>
        {product.subtitle && (
          <p className="text-sm text-gray-500">{product.subtitle}</p>
        )}

        {/* Swatches */}
        {product.colors?.length > 0 && (
          <div className="mt-2 flex gap-2">
            {product.colors.map((c) => {
              const isActive = activeColor?.name === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  aria-label={`Color ${c.name}${isActive ? " (selected)" : ""}`}
                  onClick={() => setActiveColor(c)}
                  className={`h-5 w-5 rounded-full ring-1 ring-black/10 outline-none focus:ring-2 focus:ring-black/30 ${
                    isActive ? "ring-2 ring-black" : ""
                  }`}
                  style={{ background: c.hex }}
                />
              );
            })}
          </div>
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold">{priceText}</span>

          {/* Quick add */}
          <button
            type="button"
            className="rounded-xl border px-3 py-1.5 text-sm transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/30"
            onClick={handleQuickAdd}
            aria-haspopup={product.sizes?.length ? "dialog" : undefined}
            aria-expanded={sizeOpen || undefined}
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Size picker modal */}
      {sizeOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSizeOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 text-sm text-gray-500">Select size</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`min-w-[3rem] rounded-xl border px-3 py-2 text-sm transition ${
                    selectedSize === s
                      ? "border-black bg-black text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-xl px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => setSizeOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!!(product.sizes?.length && !selectedSize)}
                onClick={handleConfirmAdd}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

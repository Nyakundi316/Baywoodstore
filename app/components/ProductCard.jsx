// components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="group relative">
      <Link href={`/products/${product.handle}`}>
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.isNew && (
            <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </div>
          )}
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-semibold">${product.price.toFixed(2)}</p>
            {product.comparePrice && (
              <p className="text-sm text-gray-500 line-through">
                ${product.comparePrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
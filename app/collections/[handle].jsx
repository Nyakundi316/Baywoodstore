// pages/collections/[handle].tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const CollectionPage = () => {
  const router = useRouter();
  const { handle } = router.query;
  const [sortOption, setSortOption] = useState('newest');

  // Mock data - replace with your actual data fetching
const collectionData = {
  'new-arrivals': {
    title: 'New Arrivals',
    description: 'Fresh streetwear drops from top brands',
    products: [
      {
        id: 'prod_01',
        title: 'Chrome Hearts Distressed Logo Tee',
        handle: 'chrome-hearts-tee',
        brand: 'Chrome Hearts',
        price: 320,
        comparePrice: 380,
        images: ['/images/products/chrome-tee-1.jpg'],
        isNew: true,
        releaseDate: '2023-10-15'
      },
      {
        id: 'prod_02',
        title: 'Travis Scott x Nike Air Max 1',
        handle: 'travis-airmax-1',
        brand: 'Nike',
        price: 450,
        images: ['/images/products/travis-airmax.jpg'],
        isNew: true,
        releaseDate: '2023-10-10'
      },
      // Add 8-10 more new arrival products
    ]
  },
  'sneakers': {
    title: 'Sneakers',
    description: 'Hottest kicks from Nike, Jordan, and collabs',
    products: [
      {
        id: 'prod_10',
        title: 'Nike Shox TL',
        handle: 'nike-shox-tl',
        brand: 'Nike',
        price: 160,
        images: ['/images/products/nike-shox.jpg'],
        sales: 142
      },
      {
        id: 'prod_11',
        title: 'Air Max 95 OG Neon',
        handle: 'airmax-95-neon',
        brand: 'Nike',
        price: 175,
        images: ['/images/products/airmax-95.jpg'],
        sales: 89
      },
      {
        id: 'prod_12',
        title: 'Travis Scott x Nike SB Dunk',
        handle: 'travis-scott-dunk',
        brand: 'Nike',
        price: 1200,
        comparePrice: 1500,
        images: ['/images/products/travis-dunk.jpg'],
        sales: 56
      },
      // Add 10-15 more sneakers
    ]
  },
  'shirts': {
    title: 'Shirts & Tees',
    description: 'Premium tees from streetwear legends',
    products: [
      {
        id: 'prod_20',
        title: 'Stussy World Tour Tee',
        handle: 'stussy-world-tour',
        brand: 'Stussy',
        price: 75,
        images: ['/images/products/stussy-tee.jpg'],
        sales: 210
      },
      {
        id: 'prod_21',
        title: 'BAPE Camo Shark Tee',
        handle: 'bape-camo-tee',
        brand: 'BAPE',
        price: 180,
        images: ['/images/products/bape-tee.jpg'],
        sales: 134
      },
      // Add 10-15 more shirts
    ]
  },
  'hoodies': {
    title: 'Hoodies & Sweats',
    description: 'Cozy streetwear essentials',
    products: [
      {
        id: 'prod_30',
        title: 'BAPE Shark Full Zip Hoodie',
        handle: 'bape-shark-hoodie',
        brand: 'BAPE',
        price: 380,
        images: ['/images/products/bape-hoodie.jpg'],
        sales: 78
      },
      {
        id: 'prod_31',
        title: 'Supreme Box Logo Hoodie',
        handle: 'supreme-box-logo',
        brand: 'Supreme',
        price: 320,
        comparePrice: 350,
        images: ['/images/products/supreme-hoodie.jpg'],
        sales: 92
      },
      // Add 8-10 more hoodies
    ]
  },
  'pants': {
    title: 'Pants & Sweatpants',
    description: 'From tech fleece to designer sweats',
    products: [
      {
        id: 'prod_40',
        title: 'Nike Tech Fleece Joggers',
        handle: 'nike-tech-fleece',
        brand: 'Nike',
        price: 110,
        images: ['/images/products/nike-joggers.jpg'],
        sales: 156
      },
      {
        id: 'prod_41',
        title: 'Adidas Tiro Track Pants',
        handle: 'adidas-tiro',
        brand: 'Adidas',
        price: 85,
        images: ['/images/products/adidas-pants.jpg'],
        sales: 112
      },
      // Add 8-10 more pants
    ]
  },
  'jackets': {
    title: 'Jackets',
    description: 'Leather, bombers, and technical outerwear',
    products: [
      {
        id: 'prod_50',
        title: 'Schott Perfecto Leather Jacket',
        handle: 'schott-perfecto',
        brand: 'Schott',
        price: 900,
        images: ['/images/products/leather-jacket.jpg'],
        sales: 42
      },
      {
        id: 'prod_51',
        title: 'Alpha Industries MA-1 Bomber',
        handle: 'alpha-ma1',
        brand: 'Alpha Industries',
        price: 220,
        images: ['/images/products/ma1-jacket.jpg'],
        sales: 67
      },
      // Add 5-8 more jackets
    ]
  },
  'accessories': {
    title: 'Accessories',
    description: 'Caps, bags, and streetwear essentials',
    products: [
      {
        id: 'prod_60',
        title: 'New Era Yankees Fitted',
        handle: 'new-era-yankees',
        brand: 'New Era',
        price: 55,
        images: ['/images/products/yankees-cap.jpg'],
        sales: 198
      },
      {
        id: 'prod_61',
        title: 'Stussy Mesh Backpack',
        handle: 'stussy-backpack',
        brand: 'Stussy',
        price: 120,
        images: ['/images/products/stussy-bag.jpg'],
        sales: 84
      },
      // Add 10-15 more accessories
    ]
  },
  'collaborations': {
    title: 'Collaborations',
    description: 'Exclusive brand collabs and limited releases',
    products: [
      {
        id: 'prod_70',
        title: 'Travis Scott x Fragment x Air Jordan 1',
        handle: 'travis-fragment-jordan',
        brand: 'Nike',
        price: 2500,
        images: ['/images/products/travis-fragment.jpg'],
        sales: 32,
        isLimited: true
      },
      {
        id: 'prod_71',
        title: 'Supreme x Louis Vuitton Box Logo Tee',
        handle: 'supreme-lv-tee',
        brand: 'Supreme',
        price: 1200,
        images: ['/images/products/supreme-lv.jpg'],
        sales: 28,
        isLimited: true
      },
    ]
  }
  
  };

  const currentCollection = collectionData[handle] || {
    title: 'Collection',
    description: '',
    products: []
  };

  const sortProducts = (products, option) => {
    switch(option) {
      case 'price-low-high':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'best-selling':
        return [...products].sort((a, b) => b.sales - a.sales);
      default: // newest
        return [...products].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

  };

  const sortedProducts = sortProducts(currentCollection.products, sortOption);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Collection Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            {currentCollection.title}
          </h1>
          <p className="text-gray-600 max-w-3xl">
            {currentCollection.description}
          </p>
        </div>

        {/* Sorting and Filtering */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="text-sm text-gray-500">
            {sortedProducts.length} products
          </div>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <select
              id="sort"
              className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-black focus:ring-black"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="best-selling">Best Selling</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this collection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
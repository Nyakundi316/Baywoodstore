'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PageCard = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef(null)

  // Sample pages data
  const pages = [
    {
      title: "New Arrivals",
      content: "Discover our latest streetwear collection for the season."
    },
    {
      title: "Trending Now",
      content: "See what's hot in the urban fashion scene this month."
    },
    {
      title: "Best Sellers",
      content: "Our most popular items loved by the community."
    },
    {
      title: "Sale Items",
      content: "Limited-time discounts on premium streetwear."
    }
  ]

  const scrollToPage = (index) => {
    const container = scrollContainerRef.current
    if (container) {
      const pageWidth = container.clientWidth
      container.scrollTo({
        left: index * pageWidth,
        behavior: 'smooth'
      })
      setCurrentPage(index)
    }
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      const pageWidth = container.clientWidth
      const newPage = Math.round(container.scrollLeft / pageWidth)
      setCurrentPage(newPage)
    }
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mb-4">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPage(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentPage === index ? 'bg-black w-6' : 'bg-gray-300'}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Scrollable Card Container */}
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>

        <button
          onClick={() => scrollToPage(Math.min(pages.length - 1, currentPage + 1))}
          disabled={currentPage === pages.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>

        {/* Pages Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-64 no-scrollbar"
        >
          {pages.map((page, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full snap-start p-8 flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{page.title}</h3>
              <p className="text-gray-600 max-w-md">{page.content}</p>
              <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                View Collection
              </button>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  )
}

export default PageCard
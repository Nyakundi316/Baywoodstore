// app/collections/sneakers/page.jsx

import SneakersClient from "./SneakersClient"

export const metadata = {
  title: "Sneakers — Baywoods",
  description:
    "Latest Baywoods sneaker drops, classics, and limited runs. Filter by size, brand, color, and price.",
}

export default function SneakersPage() {
  return <SneakersClient />
}

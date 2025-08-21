// components/UGCStrip.jsx
import Image from "next/image";
import Link from "next/link";

export default function UGCStrip({ posts }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h3 className="mb-4 text-lg font-semibold">Styled by the community</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {posts.map((p) => (
          <Link key={p.href} href={p.href} target="_blank" className="relative aspect-square rounded-xl overflow-hidden">
            <Image src={p.img} alt={p.alt} fill className="object-cover hover:scale-[1.03] transition" />
          </Link>
        ))}
      </div>
    </div>
  );
}

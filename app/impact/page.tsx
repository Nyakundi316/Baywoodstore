// app/about/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Baywoods — Rooted in Resilience",
  description:
    "Baywoods is a Kenyan-born streetwear brand empowering youth to stand tall and protect the environment — street by street, drop by drop.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/about-hero.jpg"
            alt="Baywoods youth and street culture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
            Rooted in Resilience
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
            Streetwear for the <span className="text-emerald-300">strong</span> —
            inspired by a planet that never gives up
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/80">
            We build pieces that carry a message: take care of the environment, stand tall for your community, and create boldly.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/collections"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow hover:bg-white/90 active:scale-[0.99]"
            >
              Explore Collections
            </Link>
            <Link
              href="/impact"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              See Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">The Baywoods Story</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Baywoods isn’t just about fashion — it’s about resilience. We were inspired by the environment around us: strong, unshaken, and giving — even when it’s under pressure. Trees still grow. Rivers still flow. The earth keeps standing tall, no matter how much it’s been cut, burned, or ignored.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            That’s the spirit we want for the youth. Baywoods is a call to stand tall like the environment — to never give up, to keep providing, and to stay rooted in strength no matter the struggle. Our pieces aren’t just clothes; they’re symbols of resilience, individuality, and power.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Streetwear is our canvas. Sustainability is our message. Strength is our lifestyle. <span className="font-semibold">Baywoods — rooted in resilience, built for the future.</span>
          </p>
        </div>
        <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
          <Image
            src="/about-story.jpg"
            alt="Roots, concrete, and culture — Baywoods mood"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Motive & Pillars */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Why We Exist</h2>
          <p className="mt-3 max-w-3xl text-gray-700">
            We empower youth to protect the environment and themselves — to stand strong, create opportunity, and represent Kenyan street culture with pride.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Resilience" desc="Built to last — gear that moves with you and stands for you."/>
            <Card title="Sustainability" desc="Lower impact materials, smarter packaging, and repair over replace."/>
            <Card title="Community" desc="Collaborations, clean-up drives, and mentorship for the next generation."/>
            <Card title="Creativity" desc="Designs that speak boldly — from Nairobi to the world."/>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white sm:grid-cols-4">
          <Stat kpi="1,200+" label="Pieces repaired / reused" />
          <Stat kpi="50+" label="Community clean-ups" />
          <Stat kpi="10k+" label="Caps & tees in circulation" />
          <Stat kpi="100%" label="Local-first design" />
        </div>
      </section>

      {/* Timeline / How we started */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">How We Started</h2>
          <ol className="mt-8 space-y-6 border-l-2 border-gray-200 pl-6">
            <TimelineItem year="2023" title="Seed of an idea">
              Curating sneakers and caps for friends — learning what the streets really want.
            </TimelineItem>
            <TimelineItem year="2024" title="The name: Baywoods">
              A symbol of rooted strength and growth — inspired by trees that stand tall.
            </TimelineItem>
            <TimelineItem year="2025" title="From curation to creation">
              Our first original drops. Community clean-ups and school outreach started.
            </TimelineItem>
            <TimelineItem year="Tomorrow" title="Global, but grounded">
              Scaling responsible production and putting Kenyan streetwear on the world map.
            </TimelineItem>
          </ol>
        </div>
      </section>

      {/* Environmental Pledge */}
      <section className="relative isolate overflow-hidden bg-neutral-900 py-16 text-white">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Our Environmental Pledge</h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              We choose durable fabrics and encourage repairs over replacements.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              We limit plastics in packaging and print small batches to reduce waste.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              We support clean-up drives and tree-planting with every major drop.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              We tell stories that make caring for the planet a flex, not a chore.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-black/5 bg-gray-50 p-8 text-center">
          <h3 className="text-2xl font-bold">Join the Baywoods movement</h3>
          <p className="mt-2 text-gray-600">
            Cop the latest drops, join a clean-up, or mentor someone coming up after you.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/collections" className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90">
              Shop New Drops
            </Link>
            <Link href="/impact" className="rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold hover:bg-white">
              See Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold">{kpi}</div>
      <div className="mt-1 text-sm text-white/80">{label}</div>
    </div>
  );
}

function TimelineItem({ year, title, children }: { year: string; title: string; children: React.ReactNode }) {
  return (
    <li className="relative pl-6">
      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-gray-300 bg-white" />
      <div className="text-sm uppercase tracking-wide text-gray-500">{year}</div>
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-1 text-gray-700">{children}</p>
    </li>
  );
}

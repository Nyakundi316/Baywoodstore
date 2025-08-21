import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Globe,
} from "lucide-react";

// Drop this file at: app/components/Footer.jsx (or .tsx)
// Tailwind required. Uses only server-safe code (no hooks).
// Replace placeholder links/contacts with real Baywoods info.

export default function Footer() {
  const nav = {
    shop: [
      { label: "Sneakers", href: "/collections/sneakers" },
      { label: "Caps", href: "/collections/caps" },
      { label: "Clothing", href: "/collections/clothing" },
      { label: "New Arrivals", href: "collections/new" },
      { label: "Sale", href: "/sale" },
    ],
    help: [
      { label: "Shipping & Delivery", href: "/help/shipping" },
      { label: "Returns & Exchanges", href: "/help/returns" },
      { label: "Size Guide", href: "/help/size-guide" },
      { label: "Payments", href: "/help/payments" },
      { label: "Contact", href: "/contact" },
    ],
    company: [
      { label: "About Baywoods", href: "/about" },
      { label: "Impact", href: "/impact" },
      { label: "Careers", href: "/careers" },
      { label: "Stores", href: "/stores" },
      { label: "Press", href: "/press" },
    ],
  };

  return (
    <footer className="relative mt-24 border-t border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
      {/* Top ribbon */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20" />

      {/* CTA / Newsletter */}
      <section className="relative isolate">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-white to-zinc-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">
                <ShieldCheck className="h-3.5 w-3.5" /> Trusted streetwear since
                2025
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight">
                Join the Baywoods circle — early drops, restocks & exclusive
                deals
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                No spam. Unsubscribe anytime.
              </p>
            </div>
            <div className="md:col-span-5">
              <form
                action="/subscribe"
                method="GET"
                className="flex w-full items-center gap-2 rounded-2xl border border-black/10 bg-white/80 p-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-neutral-900/60"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-transparent bg-transparent py-3 pl-10 pr-3 text-sm outline-none placeholder:text-neutral-400 focus:border-black/20 dark:focus:border-white/20"
                  />
                </div>
                <button className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-black/90 active:scale-[0.99] dark:bg-white dark:text-black">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                By subscribing you agree to our{" "}
                <Link className="underline underline-offset-2" href="/privacy">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer content */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.04),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.04),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.06),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10">
                  <Image
                    src="/second.png"
                    alt="Baywoods"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-extrabold tracking-tight">
                  BAYWOODS
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">
                Kenyan-born streetwear — sneakers, caps & clothing crafted for
                movement and culture.
              </p>

              {/* Socials */}
              <div className="mt-4 flex gap-3">
                <Social
                  href="https://instagram.com/bayw_oods.store"
                  label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Social>

                <Social href="https://x.com" label="Twitter / X">
                  <Twitter className="h-5 w-5" />
                </Social>
                <Social href="https://facebook.com" label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Social>
                <Social href="https://youtube.com" label="YouTube">
                  <Youtube className="h-5 w-5" />
                </Social>
              </div>

              {/* Contact */}
              <div className="mt-6 space-y-2 text-sm">
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Nairobi, Kenya
                </p>
                <p className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +254 116 724 251
                </p>
                <p className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4" /> baywoods.co.ke
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <FooterCol title="Shop" links={nav.shop} />
              <FooterCol title="Help" links={nav.help} />
              <FooterCol title="Company" links={nav.company} />
            </div>
          </div>

          {/* Payment badges */}
          <div className="mt-10 flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <Badge>VISA</Badge>
            <Badge>Mastercard</Badge>
            <Badge>M‑Pesa</Badge>
            <Badge>PayPal</Badge>
            <Badge>Stripe</Badge>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Baywoods. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="hover:underline underline-offset-4"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              href={l.href}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm transition hover:scale-[1.02] hover:shadow dark:border-white/10 dark:bg-neutral-900"
    >
      {children}
    </Link>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 px-3 py-1.5 text-[11px] uppercase tracking-wide text-neutral-600 dark:border-white/10 dark:text-neutral-400">
      {children}
    </span>
  );
}

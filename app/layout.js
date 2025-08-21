// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Baywoods",
  description: "Baywoods E-commerce",
  icons: {
    icon: "/second.png",
    shortcut: "/second.png",
    apple: "/second.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        {/* Navbar on top */}
        <Navbar />

        {/* Page content with dot background */}
        <main className="min-h-screen bg-dots animated-dots">
          {children}
        </main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}

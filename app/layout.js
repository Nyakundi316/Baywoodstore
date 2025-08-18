import "./globals.css";

export const metadata = {
  title: "Baywoods",
  description: "Baywoods E-commerce",
  icons: {
    icon: "/second.png",       // ✅ This is your Baywoods logo
    shortcut: "/second.png",   // optional
    apple: "/second.png",      // for iOS/Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

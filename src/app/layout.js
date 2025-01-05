import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Little Lemon Restaurant",
  description: "Little Lemon is a modern, cozy restaurant offering delicious and freshly prepared meals, creating an unforgettable dining experience. Explore our menu, book a table, and enjoy exceptional service.",
  keywords: "restaurant, dining, food, menu, Little Lemon, cozy, dining experience, delicious meals, restaurant in [your location]",
  author: "Little Lemon Team",
  robots: "index, follow",
  openGraph: {
    title: "Little Lemon Restaurant",
    description: "Experience great food and an inviting atmosphere at Little Lemon Restaurant. Discover our diverse menu and book your table today!",
    image: "/hero3.png",
    url: "https://www.yourwebsite.com",
    site_name: "Little Lemon Restaurant",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/fav.png" type="image/png" className="rounded-full" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  keywords: "restaurant, dining, food, menu, Little Lemon, cozy, dining experience, delicious meals, restaurant in World",
  author: "Little Lemon Team",
  robots: "index, follow",
  openGraph: {
    title: "Little Lemon Restaurant",
    description: "Experience great food and an inviting atmosphere at Little Lemon Restaurant. Discover our diverse menu and book your table today!",
    image: "/hero.jpeg",
    url: "https://little-lemon-restaurants.vercel.app/",
    site_name: "Little Lemon Restaurant",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Little Lemon is a modern, cozy restaurant offering delicious and freshly prepared meals, creating an unforgettable dining experience. Explore our menu, book a table, and enjoy exceptional service." />
        <meta name="keywords" content="restaurant, dining, food, menu, Little Lemon, cozy, dining experience, delicious meals, restaurant in World" />
        <meta name="author" content="Mubashir Ali" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Little Lemon Restaurant" />
        <meta property="og:description" content="Experience great food and an inviting atmosphere at Little Lemon Restaurant. Discover our diverse menu and book your table today!" />
        <meta property="og:image" content="/hero3.jpg" />
        <meta property="og:url" content="https://little-lemon-restaurants.vercel.app/" />
        <meta property="og:site_name" content="Little Lemon Restaurant" />
        <link rel="icon" href="/fav.png" type="image/png" className="rounded-full" />
        <title>Little Lemon Restaurant</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

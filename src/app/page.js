import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import ReservationsContent from "./components/ReservationsContent";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <MenuSection/>
    <ReservationsContent/>
    <Contact/>
  </div>
  );
}

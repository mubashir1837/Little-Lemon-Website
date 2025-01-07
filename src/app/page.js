import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import ReservationsContent from "./components/ReservationsContent";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <MenuSection/>
    <ReservationsContent/>
  </div>
  );
}

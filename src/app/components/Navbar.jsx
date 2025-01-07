"use client";

import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaUser } from "react-icons/fa"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header className="flex fixed z-10 bg-white items-center justify-between p-4 w-full mx-auto">
      <Link href="/">
        <Image
          className="dark:invert"
          src="/logo.jpg"
          alt="Logo"
          width={200}
          height={208}
        />
      </Link>
      <nav>
        <ul className={`${click ? "flex flex-col items-end h-screen bg-gray-100 absolute top-0 right-0 z-10 p-20 space-y-4" : "hidden md:flex items-center space-x-6 font-bold text-lg text-gray-900"}`}>
          <li><Link href="#" className="hover:text-yellow-400 flex items-center space-x-1"><FaHome/><span>Home</span></Link></li>
          <li><Link href="#" className="hover:text-yellow-400 flex items-center space-x-1"><FaUser/><span>About</span></Link></li>
          <li><Link href="#menu" className="hover:text-yellow-400">Menu</Link></li>
          <li><Link href="#reservation" className="hover:text-yellow-400">Reservations</Link></li>
          <li><Link href="#" className="hover:text-yellow-400">Order Online</Link></li>
          <li><Link href="#" className="hover:text-yellow-400">Login</Link></li>
          <li><Link href="#" className="hover:text-yellow-400">Donate</Link></li>
        </ul>
      </nav>
      <div className="md:hidden z-20" onClick={handleClick}>
        {click ? (
          <AiOutlineClose size={30} className="text-gray-800" />
        ) : (
          <AiOutlineMenu size={30} className="text-gray-800 border-l border-gray-800 pl-2" />
        )}
      </div>
    </header>
  );
};

export default Navbar;

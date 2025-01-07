"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaTelegram } from "react-icons/fa"

const Contact = () => {
  return (
    <footer id="contact" className='py-10 bg-gray-800 text-white'>
      {/* Logo and Title Section */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/fav.png"
          alt="Little Lemon Logo"
          width={60}
          height={60}
        />
        <h1 className="font-bold text-2xl uppercase text-yellow-400 mt-2">Little Lemon</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center gap-x-10 mb-6">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/menu" className="hover:text-yellow-400">Menu</Link>
        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-x-6 mb-6">
        
        <Link href="#" className="hover:text-yellow-400 bg-gray-700 border border-white hover:border-yellow-300 text-xl p-2 rounded-full  text-white">
          <FaFacebook />
        </Link>
        <Link href="#" className="hover:text-yellow-400 bg-gray-700 border border-white hover:border-yellow-300 text-xl p-2 rounded-full  text-white">
          <FaTwitter />
        </Link>
        <Link href="#" className="hover:text-yellow-400 bg-gray-700 border border-white hover:border-yellow-300 text-xl p-2 rounded-full  text-white">
          <FaInstagram />
        </Link>
        <Link href="#" className="hover:text-yellow-400 bg-gray-700 border border-white hover:border-yellow-300 text-xl p-2 rounded-full  text-white">
          <FaYoutube />
        </Link>
        <Link href="#" className="hover:text-yellow-400 bg-gray-700 border border-white hover:border-yellow-300 text-xl p-2 rounded-full  text-white">
          <FaWhatsapp />
        </Link>
        <Link href="#" className="hover:text-yellow-400 bg-gray-700 border border-white hover:border-yellow-300 text-xl p-2 rounded-full  text-white">
          <FaLinkedin />
        </Link>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center border-t border-gray-600 pt-4">
        <p>&copy; 2025 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Contact

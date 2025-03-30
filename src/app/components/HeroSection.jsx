"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaPhone, FaWpexplorer } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section className='relative'>
      <Image
        className="bg-cover bg-center h-screen "
        src="/hero3.jpg"
        alt="Vercel logomark"
        width={1500}
        height={300}
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white p-6">

        <h1 className="text-5xl font-bold mb-4 font-serif">Little Lemon</h1>
        <TypeAnimation
          sequence={[

            'Delicious meals for all!',
            1000, 
            'Delicious meals for food lovers!',
            1000,
            'Flavorful dishes for every taste!',
            1000,
            'Tasty creations for every palate!',
            1000

          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
        {/* <p className="text-lg mb-6">Experience the taste of perfection</p> */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 mt-2">
          <Link
            href="#contact"
            className="bg-yellow-500 text-white px-6 sm:px-8 py-3 border-white border-4 rounded-xl text-center text-base sm:text-lg flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <FaPhone />
            <span>Contact Us</span>
          </Link>
          <Link
            href="#menu"
            className="bg-white text-black px-6 sm:px-8 py-3 rounded-xl text-center text-base sm:text-lg flex items-center justify-center space-x-2 w-full sm:w-auto"
          >
            <FaWpexplorer />
            <span>Explore Menu</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;

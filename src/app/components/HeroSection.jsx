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
        className="dark:invert  bg-cover bg-center h-screen "
        src="/dp.jpg"
        alt="Vercel logomark"
        width={1500}
        height={300}
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white p-6">

        <h1 className="text-5xl font-bold mb-4 font-serif">Delicious Restaurant</h1>
        <TypeAnimation
          sequence={[

            'Delicious meals for all!',
            1000, // wait 1s before replacing "all" with "food lovers"
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
        <div className="flex space-x-4 mt-2">
          <Link href="contact" className="bg-yellow-500 text-white px-8 border-white border-4 py-3 rounded-xl text-lg flex items-center space-x-2">
            <FaPhone />
            <span>Contact Us</span>
          </Link>
          <Link href="#menu" className="bg-white text-black px-6 sm:px-8 sm:py-0 py-3 rounded-xl text-lg flex items-center space-x-2">
            <FaWpexplorer />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="pb-1 sticky top-0 bg-blue-200 z-50 flex justify-around pl-4 pr-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo-buhr-construction.png"
              alt=""
              width={90}
              height={60}
              className="pt-4 pb-2 mr-12 min-w-[160px]"
            />
          </Link>
          <ul className="hidden lg:flex font-bold space-x-10 pb-12">
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="about-us">About</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="services">Services</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="testimonials">Testimonials</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="gallery">Gallery</Link>
            </li>
            <li className="text-sm sm:text-md md:text-lg lg:text-xl mt-9 pt-6 pl-2 pr-2 hover:cursor-pointer hover:underline">
              <Link href="contact-us">Contact</Link>
            </li>
          </ul>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start pt-8">
          <div className="bg-white rounded-xl p-8 w-[80%] max-w-sm relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            <ul className="flex flex-col items-center space-y-6 mt-8 font-bold">
              <li onClick={() => setIsOpen(false)} className="hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:underline">
                <Link href="about-us">About</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:underline">
                <Link href="services">Services</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:underline">
                <Link href="testimonials">Testimonials</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:underline">
                <Link href="gallery">Gallery</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className="hover:underline">
                <Link href="contact-us">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

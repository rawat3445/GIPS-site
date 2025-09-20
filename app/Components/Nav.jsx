"use client";
import Image from "next/image";


import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo on Left */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-paramedicalfinal-e1717133101289.png"
              alt="GIPS Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-blue-700">GIPS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-700">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700">
              About
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-700">
              Programs
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-700">
              Admissions
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Academics
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Life at GIPS
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Research
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Placements
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              IQAC
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Contact Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Career
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              Alumni
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700">
              News & Events
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Courses
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

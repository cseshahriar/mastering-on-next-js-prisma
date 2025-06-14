// components/Navbar.jsx (example)
'use client'; // If Navbar itself needs client features, or if ThemeToggle is the only one
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle'; // Import your ThemeToggle

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          MyBrand
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:space-x-6 flex-col md:flex-row mt-4 md:mt-0 w-full md:w-auto`}
        >
          <Link href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 md:py-0">Home</Link>
          <Link href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 md:py-0">About</Link>
          <Link href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 md:py-0">Services</Link>
          <Link href="#" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 md:py-0">Contact</Link>

          <div className="mt-4 md:mt-0 ml-0 md:ml-4">
            <ThemeToggle /> {/* Your dark mode toggle */}
          </div>
        </div>
      </div>
    </nav>
  );
}
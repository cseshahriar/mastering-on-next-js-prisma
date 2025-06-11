"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Menu = () => {
  const currentRoute = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  }

  return (
    <nav className="bg-white shadow-lg mb-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">YourLogo</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                replace
                prefetch={false}
                href="/"
                className={`py-4 px-2 ${currentRoute === "/" ? "text-blue-500 border-b-4 border-blue-500 font-semibold" : "text-gray-500 hover:text-blue-500 transition duration-300"}`}
              >
                Home
              </Link>
              <Link
                replace
                prefetch={false}
                href="/profile"
                className={`py-4 px-2 ${currentRoute === "/profile" ? "text-blue-500 border-b-4 border-blue-500 font-semibold" : "text-gray-500 hover:text-blue-500 transition duration-300"}`}
              >
                Profile
              </Link>
              <Link
                replace
                href={{pathname: "/product", query: {name: 'book', price: '200 taka'}}}
                className={`py-4 px-2 ${currentRoute === "/product" ? "text-blue-500 border-b-4 border-blue-500 font-semibold" : "text-gray-500 hover:text-blue-500 transition duration-300"}`}
              >
                Product
              </Link>
              <Link
                replace
                href="/product/brand"
                className={`py-4 px-2 ${currentRoute === "/product/brand" ? "text-blue-500 border-b-4 border-blue-500 font-semibold" : "text-gray-500 hover:text-blue-500 transition duration-300"}`}
              >
                Brand
              </Link>
              <Link
                replace
                href="/dashboard"
                className={`py-4 px-2 ${currentRoute === "/dashboard" ? "text-blue-500 border-b-4 border-blue-500 font-semibold" : "text-gray-500 hover:text-blue-500 transition duration-300"}`}
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleClick}
              className="py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go Home
            </button>
          </div>

        </div>
      </div>


    </nav>
  )
}

export default Menu;
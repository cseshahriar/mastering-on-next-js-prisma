"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const currentRoute = usePathname();

  return (
    <div>
        <Link href="/"  className={currentRoute === "/" ? "active-link" : "pending-link"}>Home</Link>
        <Link href="/product" className={currentRoute === "/product" ? "active-link" : "pending-link"}>Product</Link>
        <Link href="/product/brand" className={currentRoute === "/product/brand" ? "active-link" : "pending-link"}>Brand</Link>
    </div>
  )
}

export default Menu
"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Menu = () => {
  const currentRoute = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
    // router.replace('/'); // not store browsing history
    // router.refresh(); // refresh current page
    // router.forward(); // immediate forward
  }

  return (
    <div>
        {/** replace not store browsing history */}
        {/** prefetch store browsing history */}
        <Link replace prefetch={false} href="/"  className={currentRoute === "/" ? "active-link" : "pending-link"}>Home</Link>
        <Link
          replace
          href={{pathname: "/product", query: {name: 'book', price: '200 taka'}}}
          className={currentRoute === "/product" ? "active-link" : "pending-link"}
        >Product</Link>
        <Link replace href="/product/brand" className={currentRoute === "/product/brand" ? "active-link" : "pending-link"}>Brand</Link>
        <button className='ml-2' onClick={handleClick}>Go Home</button>
     </div>
  )
}

export default Menu
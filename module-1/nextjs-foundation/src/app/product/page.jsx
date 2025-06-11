'use client'; // 👈 Add this at the top
import React from 'react'

import { useSearchParams } from 'next/navigation';

// const page = async({searchParams}) => {
//   const { name, price } = searchParams;
//   return (
//     <div>Product Page name: {name}, price {price}</div>
//   )
// }
// export default page

export default function ProductPage() {
  const params = useSearchParams();
  const name = params.get('name');
  const price = params.get('price');

  return <div>{name} - {price}</div>;
}
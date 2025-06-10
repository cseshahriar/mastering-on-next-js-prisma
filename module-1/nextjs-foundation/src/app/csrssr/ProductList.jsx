// app/ProductList.js (Client Component - "use client")
"use client";

import { useEffect } from 'react';

export default function ProductList({ products }) {
  // Client-side effects (runs only in browser)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <button
        onClick={() => alert("Hello")}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click me (CSR)
      </button>

      {products.map((item) => (
        <div key={item.id} className="py-4 px-4 border-b">
          <h1 className="font-bold">{item.title}</h1>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}
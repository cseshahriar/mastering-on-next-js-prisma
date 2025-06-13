// app/error.js
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-lg mb-6">An unexpected error occurred. Please try again.</p>
      <button
        onClick={reset}
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  );
}

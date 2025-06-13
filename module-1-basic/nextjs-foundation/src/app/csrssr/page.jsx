import ProductList from "./ProductList";

// app/page.js (Server Component - NO "use client")
async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      next: { revalidate: 3600 } // Cache for 1 hour (adjust as needed)
    });
    const data = await res.json();
    return data.products || [];
  } catch (error) {
    return [];
  }
}

export default async function Page() {
  const products = await getProducts(); // Fetches ONLY on server
  return <ProductList products={products} />; // Pass to Client Component
}
// 'use client'; // 👈 Add this at the top
import React from 'react'

// import { useSearchParams } from 'next/navigation';

// const page = async({searchParams}) => {
//   const { name, price } = searchParams;
//   return (
//     <div>Product Page name: {name}, price {price}</div>
//   )
// }
// export default page

// data fetch on server
async function getData(params) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: 'force-cache', // default
      // cache: 'no-store', // no cash
      next: {
        revalidate: 3600 // re fetch
      }
    }

  );
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data;
}

// multiple data fetch
async function getMultipleData(params) {
  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const res2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data1 = await res1.json()
    const data2 = await res2.json()
    return {data1: data1, data2: data2}
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function ProductPage() {
  // const params = useSearchParams();
  // const name = params.get('name');
  // const price = params.get('price');
  // return <div>{name} - {price}</div>;

  const users = await getData();

  return (
    <div>
      <h1>Product Page process.env.name { process.env.API_KEY }</h1>
       <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Website</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 py-2">
                <a href={`http://${user.website}`} className="text-blue-600 underline">
                  {user.website}
                </a>
              </td>
              <td className="border px-4 py-2">
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
              </td>
              <td className="border px-4 py-2">
                {user.company.name}
                <br />
                <small>{user.company.catchPhrase}</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
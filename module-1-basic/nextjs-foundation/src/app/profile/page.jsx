"use client";
import React, { useEffect, useState } from 'react';
// data fetch on client
// sms, payment gateway, etc use ssr
const page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          cache: 'force-cache',
          // cache: 'no-cache',
          // cache: 'no-store',
          next: {
            revalidate: 3600
          }
        }

      );
      if(!res.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Page</h1>
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

export default page
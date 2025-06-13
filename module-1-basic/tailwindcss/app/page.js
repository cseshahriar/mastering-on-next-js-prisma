import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100">
      <h1 className="text-4xl font-bold text-indigo-700">
        Hello, Tailwind CSS with Next.js!
      </h1>
      <p className="mt-4 text-lg text-gray-800">
        This is styled with Tailwind CSS 3.4.17.
      </p>
    </main>
  );
}

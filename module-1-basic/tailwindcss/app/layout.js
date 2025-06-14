
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default function Layout({ children }) { // directory layout
  return (
    <html lang="en">
      <body>
        <h1 className="bg-green-300 p-4">Dashboard Layout</h1>
        {children}
      </body>
    </html>
  );
}

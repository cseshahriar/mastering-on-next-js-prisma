'use client';
import './globals.css';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Menu from './components/Menu';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
        />
      </body>
    </html>
  );
}

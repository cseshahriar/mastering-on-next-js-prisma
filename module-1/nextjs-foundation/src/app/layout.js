'use client';
import './globals.css';

// gogle font
import {Hind_Siliguri} from 'next/font/google'
const fontStyle = Hind_Siliguri({
  subsets : ['bengali'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-siliguri'

})

// local font
import localFont from 'next/font/local'
const kalpurushFont = localFont({
  src: "./fonts/kalpurush.ttf",
  variable: '--font-kalpurush'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kalpurushFont.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}

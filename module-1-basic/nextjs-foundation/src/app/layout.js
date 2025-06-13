'use client';
import './globals.css';

import Script from 'next/script';
import Head from 'next/head';

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

       <Head>
        {/* ✅ Include CSS via CDN in <Head> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        {children}
      </body>

      {/* ✅ Include js via CDN in  */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"/>
    </html>
  );
}

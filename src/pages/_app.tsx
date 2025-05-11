// import "@/styles/globals.css";
// import type { AppProps } from "next/app";


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
// import Script from "next/script";

// <Script
//   src="https://developers.kakao.com/sdk/js/kakao.js"
//   strategy="beforeInteractive"
// />

// import Head from "next/head";

// <Head>
//   <link
//     href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
//     rel="stylesheet"
//   />
// </Head>

// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { applyGlobalFont } from '@/styles/globalFont'; // ✅ 추가

applyGlobalFont(); // ✅ 호출

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
import Script from "next/script";

<Script
  src="https://developers.kakao.com/sdk/js/kakao.js"
  strategy="beforeInteractive"
/>
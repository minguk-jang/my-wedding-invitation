// // pages/_app.tsx
// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';
// import { applyGlobalFont } from '@/styles/globalFont'; // ✅ 추가
// applyGlobalFont(); // ✅ 호출
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { applyGlobalFont } from '@/styles/globalFont'; // ✅ 추가
import { useEffect } from "react";

applyGlobalFont(); // ✅ 호출

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return <Component {...pageProps} />;
}
// // // pages/_app.tsx
// // import '@/styles/globals.css';
// // import type { AppProps } from 'next/app';
// // import { applyGlobalFont } from '@/styles/globalFont'; // ✅ 추가
// // applyGlobalFont(); // ✅ 호출
// // export default function App({ Component, pageProps }: AppProps) {
// //   return <Component {...pageProps} />;
// // }


// // // // pages/_app.tsx
// // import '@/styles/globals.css';
// // import type { AppProps } from 'next/app';
// // import { applyGlobalFont } from '@/styles/globalFont'; // ✅ 추가
// // import { useEffect } from "react";

// // applyGlobalFont(); // ✅ 호출

// // // export default function App({ Component, pageProps }: AppProps) {
// // //   return <Component {...pageProps} />;
// // // }
// // export default function App({ Component, pageProps }: AppProps) {
// //   useEffect(() => {
// //     const handleWheel = (e: WheelEvent) => {
// //       if (e.ctrlKey) {
// //         e.preventDefault();
// //       }
// //     };

// //     window.addEventListener("wheel", handleWheel, { passive: false });
// //     return () => window.removeEventListener("wheel", handleWheel);
// //   }, []);

// //   return <Component {...pageProps} />;
// // }

// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';
// import { applyGlobalFont } from '@/styles/globalFont';
// import { useEffect } from 'react';

// applyGlobalFont();

// export default function App({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     // ✅ Ctrl + 휠 확대 방지
//     const handleWheel = (e: WheelEvent) => {
//       if (e.ctrlKey) {
//         e.preventDefault();
//       }
//     };
//     window.addEventListener('wheel', handleWheel, { passive: false });

//     // ✅ 모바일 주소창 흔들림 방지용 vh 설정
//     const setVh = () => {
//       const vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty('--vh', `${vh}px`);
//     };
//     setVh(); // 처음 실행
//     window.addEventListener('resize', setVh);

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('resize', setVh);
//     };
//   }, []);

//   return <Component {...pageProps} />;
// }

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { applyGlobalFont } from '@/styles/globalFont';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

applyGlobalFont();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // ✅ Ctrl + 휠 확대 방지
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });

    // ✅ 모바일 주소창 흔들림 방지용 vh 설정
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);

    // ✅ basePath를 전역에 설정 (이미지/음악 경로에서 사용 가능)
    if (router.basePath) {
      document.documentElement.setAttribute('data-basepath', router.basePath);
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', setVh);
    };
  }, [router.basePath]);

  return <Component {...pageProps} />;
}

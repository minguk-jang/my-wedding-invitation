
import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const WeddingCalendar = dynamic(
  () => import("@/components/WeddingCalendar"),
  { ssr: false }
);
const DdaySection = dynamic(
  () => import("@/components/DdaySection"),
  { ssr: false }
);
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

const CenteredContainer = styled("div", {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "0 16px",
  "@media (max-width: 768px)": {
    padding: "0 12px",
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="장민국❤이주연 결혼식에 초대합니다" name="Title" />
        <meta
          content="2025년 08월 23일 토요일 낮 12시 30분"
          name="Description"
        />
        <meta content="2025년 08월 23일 토요일 낮 12시 30분" name="Keyword" />
        <meta property="og:title" content="장민국❤이주연 결혼식에 초대합니다" />
        <meta
          property="og:description"
          content="2025년 08월 23일 토요일 낮 12시 30분"
        />
        <meta
          property="og:url"
          content=""
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>장민국❤이주연 결혼식에 초대합니다</title>
        <meta name="description" content="2025년 8월 23일 토요일 낮 12시 30분" />
        <meta name="keywords" content="결혼식, 청첩장, 모바일 청첩장" />
        <meta property="og:title" content="우리의 결혼식에 초대합니다" />
        <meta property="og:description" content="2025년 8월 23일 토요일 낮 12시 30분" />
        <meta property="og:url" content="https://mgjang.com" />
        {/* <meta name="theme-color" content="#BCAAA4" /> */}
        {/* Apple SD 산돌고딕 Neo 폰트 링크 추가 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo.css"
          type="text/css"
        />
      </Head>
      <main className={`${notoSansKR.className}`}>
      {/* <main
            className={`${notoSansKR.className}`}
            style={{ backgroundColor: "#efebe9" }}
          > */}
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <CenteredContainer>
          <Title data={JsonData} />
          <Gretting data={JsonData} />
          <WeddingCalendar />
          <DdaySection weddingDate={new Date("2025-08-23T12:30:00")} />
          <Gallery />
          <Location />
          <CongratulatoryMoney data={JsonData} />
          <Share data={JsonData} />
          <Footer>Copyright © 2025 Minguk Jang</Footer>
        </CenteredContainer>
      </main>
    </>
  );
}

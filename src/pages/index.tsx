import Head from "next/head";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const WeddingCalendar = dynamic(() => import("@/components/WeddingCalendar"), { ssr: false });
const DdaySection = dynamic(() => import("@/components/DdaySection"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(() => import("@/components/CongratulatoryMoney"), { ssr: false });
const Share = dynamic(() => import("@/components/Share"), { ssr: false });
const AddToCalendar = dynamic(() => import("@/components/AddToCalendar"), { ssr: false });

const Footer = styled("footer", {
  background: "#D7CCC8",
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  opacity: 0.6,
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
        <meta property="og:type" content="website" />
        <meta content="장민국❤이주연 결혼식에 초대합니다" name="title" />
        <meta content="2025년 08월 23일 토요일 낮 12시 30분" name="description" />
        <meta property="og:title" content="장민국❤이주연 결혼식에 초대합니다" />
        <meta property="og:description" content="2025년 08월 23일 토요일 낮 12시 30분" />
        <meta property="og:url" content="https://minguk-jang.github.io/my-wedding-invitation/" />
        <meta name="theme-color" content="#BCAAA4" />
        <title>장민국❤이주연 결혼식에 초대합니다</title>
      </Head>

      <main>
        <CenteredContainer>
          <Title data={JsonData} />
          <Gretting data={JsonData} />
          <WeddingCalendar />
          <DdaySection weddingDate={new Date("2025-08-23T12:30:00")} />
          <Gallery />
          <Location />
          <CongratulatoryMoney data={JsonData} />
          <AddToCalendar />
          <Share data={JsonData} />
          {/* <Footer>Copyright © 2025 Minguk Jang</Footer> */}
        </CenteredContainer>
      </main>
    </>
  );
}

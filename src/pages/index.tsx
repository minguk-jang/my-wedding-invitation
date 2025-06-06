import Head from "next/head";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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

const Container = styled("div", {
  width: "100%",
  minHeight: "100vh",
  background: "#efebe9",
  backgroundRepeat: "repeat",
  touchAction: "auto",
  overscrollBehavior: "auto",
  WebkitOverflowScrolling: "touch",
});

export default function Home() {
  const { basePath } = useRouter();

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
        <Container style={{ backgroundImage: `url(${basePath}/assets/GroovePaper.png)` }}>
          <CenteredContainer>
            <Title data={JsonData} />
            <Gretting data={JsonData} />
            <WeddingCalendar />
            <DdaySection weddingDate={new Date("2025-08-23T12:30:00")} />
            <Gallery />
            <Location />
            <CongratulatoryMoney data={JsonData} />
            {/* <AddToCalendar /> */}
            <Share data={JsonData} />
            <motion.div
              style={{
                width: "100%",
                marginTop: "2rem",
                marginBottom: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0"
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
            >
              <img 
                src={`${basePath}/images/WeddingDay.png`}
                alt="Wedding Day"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </motion.div>
            <Footer>Copyright © 2025 Minguk Jang</Footer>
          </CenteredContainer>
        </Container>
      </main>
    </>
  );
}

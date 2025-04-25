import { styled } from "@stitches/react";
import { Divider, Button } from "antd";
import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "3vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const MapContainer = styled("div", {
  width: "90%",
  height: 400,
  margin: "0 auto",
  borderRadius: 8,
  overflow: "hidden",
});

const ButtonGroup = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "1.5rem",
  flexWrap: "wrap",
});

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded || !window.kakao || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.5008, 127.0031),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(37.5008, 127.0031);
      new window.kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });
    });
  }, [mapLoaded]);

  return (
    <Wrapper>
      <Script
        strategy="afterInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=ae58ca9752a9bf959a813a11b8fb32f1&autoload=false`}
        onLoad={() => setMapLoaded(true)}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>오시는 길</Title>
        </Divider>

        <MapContainer ref={mapRef} />

        <ButtonGroup>
          {/* <Button
            type="primary"
            href="https://apis.openapi.sk.com/tmap/app/routes?appKey=SK_YOUR_APP_KEY&name=아펠가모%20반포&lon=127.0031&lat=37.5008"
            target="_blank"
          >
            티맵으로 길찾기
          </Button> */}
          <Button
            type="primary"
            href="https://map.kakao.com/link/to/아펠가모반포,37.5008,127.0031"
            target="_blank"
          >
            카카오맵으로 길찾기
          </Button>
          <Button
            type="primary"
            href="https://map.naver.com/v5/search/아펠가모반포/place/11339324?c=14129285.9790389,4517525.9862627,17,0,0,0,dh"
            target="_blank"
          >
            네이버지도에서 보기
          </Button>
        </ButtonGroup>

        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>대중교통 안내</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>🚇 지하철: 3·7·9호선 고속터미널역 5번 출구 도보 2분</li>
            <li>🚌 버스: 142, 360, 362번 탑승 후 “고속터미널” 정류장에서 하차</li>
          </ul>
        </div>
      </motion.div>
    </Wrapper>
  );
}

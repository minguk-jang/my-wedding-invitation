import { styled } from "@stitches/react";
import { Divider } from "antd";
import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router"; // ✅ basePath 사용

declare global {
  interface Window {
    kakao: any;
  }
}

const Title = styled("p", {
  fontSize: "1.75rem",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const MapContainer = styled("div", {
  width: "90%",
  height: 300,
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

const NaviButton = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.6rem 1.2rem",
  backgroundColor: "white",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "0.8rem",
  fontWeight: "500",
  color: "#333",
  boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.15)",
  transition: "all 0.2s ease",

  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
  },
});

const NaviIcon = styled("img", {
  width: "1.5rem",
  height: "1.5rem",
});

const LockButton = styled("button", {
  position: "absolute",
  top: "12px",
  left: "12px",
  zIndex: 10,
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "6px",
  padding: "0.3rem 0.6rem",
  fontSize: "2vh",
  cursor: "pointer",
  boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

const LockIcon = styled("img", {
  width: "1rem",
  height: "1rem",
  objectFit: "contain",
});

const getKakaoMapUrl = () => {
  // iOS에서는 kakaomap:// 스키마 사용
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS) {
    return "kakaomap://search?q=아펠가모반포";  // 검색어로 변경
  }
  // 안드로이드와 웹에서는 기존 URL 사용
  return "https://map.kakao.com/?q=아펠가모반포";
};

export default function Location() {
  const { basePath } = useRouter(); // ✅ basePath 가져오기
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMapLocked, setIsMapLocked] = useState(true);
  const [kakaoMapUrl, setKakaoMapUrl] = useState("");

  useEffect(() => {
    setKakaoMapUrl(getKakaoMapUrl());
  }, []);

  useEffect(() => {
    if (!mapLoaded || !window.kakao || !mapRef.current) return;

    window.kakao.maps.load(() => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.5008, 127.0032),
        level: 3,
        draggable: !isMapLocked,
        scrollwheel: !isMapLocked,
      };
      const map = new window.kakao.maps.Map(container, options);
      mapInstanceRef.current = map;

      const markerPosition = new window.kakao.maps.LatLng(37.5008, 127.0032);
      new window.kakao.maps.Marker({
        position: markerPosition,
        map: map,
      });
    });
  }, [mapLoaded]);

  const toggleMapLock = () => {
    setIsMapLocked((prev) => {
      const newLock = !prev;
      const map = mapInstanceRef.current;
      if (map) {
        map.setDraggable(!newLock);
        map.setZoomable(!newLock);
      }
      return newLock;
    });
  };

  return (
    <div
      style={{
        background: "#efebe9",
        backgroundImage: `url(${basePath}/assets/GroovePaper.png)`, // ✅ 수정
        backgroundRepeat: "repeat",
        width: "100%",
        paddingBottom: 72,
        textAlign: "center",
      }}
    >
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

        <div style={{ position: "relative" }}>
          <LockButton onClick={toggleMapLock}>
            <LockIcon 
              src={`${basePath}/images/${isMapLocked ? 'lock' : 'unlock'}.svg`} 
              alt={isMapLocked ? "잠금" : "해제"} 
            />
            {isMapLocked ? "잠금" : "해제"}
          </LockButton>
          <MapContainer ref={mapRef} />
        </div>

        <ButtonGroup>
          <NaviButton href={kakaoMapUrl} target="_blank">
            <NaviIcon src={`${basePath}/images/kakao_navi.svg`} alt="카카오내비 아이콘" />
            카카오맵에서 보기
          </NaviButton>

          <NaviButton href="https://map.naver.com/v5/search/아펠가모%20반포" target="_blank">
            <NaviIcon src={`${basePath}/images/naver_map.webp`} alt="네이버지도 아이콘" />
            네이버지도에서 보기
          </NaviButton>
        </ButtonGroup>

        <div style={{ marginTop: "2rem" }}>
          <ul style={{ 
            listStyleType: "none", 
            paddingLeft: 0, 
            fontSize: "1.1rem", 
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem"
          }}>
            <li style={{ textAlign: "left", marginLeft: "1rem" }}>
              🚇 지하철: 3·7·9호선 고속터미널역 5번 출구에서 나와 서래공원 방면 신호등 건넌 후 첫번째 건물 (효성반포빌딩) LL층 (지하 2층)
            </li>
            <li style={{ textAlign: "left", marginLeft: "1rem" }}>
              🚌 버스: Blue 간선 (405, 740) / Green 지선 (5413) / 공항버스 (6703). 서울 지방 조달청역 하차
            </li>
            <li style={{ textAlign: "left", marginLeft: "1rem" }}>
              🅿️ 주차: 효성반포빌딩 하객 2시간 무료 주차 가능
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

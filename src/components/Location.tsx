// import { styled } from "@stitches/react";
// import { Divider } from "antd";
// import { motion } from "framer-motion"; // Framer Motion 추가

// const Wrapper = styled("div", {
//   background: "#efebe9",
//   backgroundImage: "url(./assets/GroovePaper.png)",
//   width: "100%",
//   paddingBottom: 42,
//   textAlign: "center",
// });

// const Title = styled("p", {
//   fontSize: "3vh",
//   fontWeight: "bold",
//   opacity: 0.85,
//   marginBottom: 0,
// });

// const Image = styled("img", {
//   width: "75%",
//   maxWidth: 1024,
// });

// export default function Location() {
//   return (
//     <Wrapper>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 1.2 }}
//       >
//         <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
//           <Title>오시는 길</Title>
//         </Divider>
//         <Image src="./assets/LocationMap.png" />
//         <div style={{ marginTop: '1.5rem' }}>
//           <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>대중교통 안내</h3>
//           <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
//             <li>🚇 지하철: 2호선 강남역 3번 출구 도보 10분</li>
//             <li>🚌 버스: 140, 400, 402번 탑승 후 “예식장 앞” 정류장에서 하차</li>
//           </ul>
//         </div>
//       </motion.div>
//     </Wrapper>
//   );
// }
// components/Location.tsx

import { styled } from "@stitches/react";
import { Divider, Button } from "antd";
import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: any;
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

  useEffect(() => {
    if (typeof window !== "undefined" && window.naver && mapRef.current) {
      const location = new window.naver.maps.LatLng(37.5038437, 127.0110917); // 아펠가모 반포 위치
      const map = new window.naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
      });

      new window.naver.maps.Marker({
        position: location,
        map: map,
      });
    }
  }, []);

  return (
    <Wrapper>
      <Script
        strategy="afterInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5wzfb61ezn`} // 여기에 본인의 네이버 Client ID 넣기
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
          <Button
            type="primary"
            href="https://apis.openapi.sk.com/tmap/app/routes?appKey=SK_APP_KEY&name=아펠가모+반포&lon=127.0110917&lat=37.5038437"
            target="_blank"
          >
            티맵으로 길찾기
          </Button>
          <Button
            type="primary"
            href="https://map.kakao.com/link/map/아펠가모 반포,37.5038437,127.0110917"
            target="_blank"
          >
            카카오맵으로 길찾기
          </Button>
          <Button
            type="primary"
            href="https://map.naver.com/v5/entry/place/13407968?c=14129091.9096951,4509206.5291067,15,0,0,0,dh"
            target="_blank"
          >
            네이버지도에서 보기
          </Button>
        </ButtonGroup>

        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>대중교통 안내</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
            <li>🚇 지하철: 2호선 강남역 3번 출구 도보 10분</li>
            <li>🚌 버스: 140, 400, 402번 탑승 후 “예식장 앞” 정류장에서 하차</li>
          </ul>
        </div>
      </motion.div>
    </Wrapper>
  );
}
// components/Location.tsx
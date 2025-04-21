import { styled } from "@stitches/react";
import { Divider } from "antd";
import { motion } from "framer-motion"; // Framer Motion 추가

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

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

export default function Location() {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>오시는 길</Title>
        </Divider>
        <Image src="./assets/LocationMap.png" />
        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>대중교통 안내</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>🚇 지하철: 2호선 강남역 3번 출구 도보 10분</li>
            <li>🚌 버스: 140, 400, 402번 탑승 후 “예식장 앞” 정류장에서 하차</li>
          </ul>
        </div>
      </motion.div>
    </Wrapper>
  );
}

import { styled } from "@stitches/react";
import { Divider } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  padding: "2rem 1rem",
  boxSizing: "border-box",
  paddingBottom: 72,
});

const Title = styled("p", {
  fontSize: "1.75rem",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "1rem",
  lineHeight: "1.5",
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
  letterSpacing: "-0.01em",
});

const PhotoContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginTop: "3rem",
  flexWrap: "wrap",
  width: "100%",

  "@media (max-width: 480px)": {
    gap: "1rem",
  },
});

const Person = styled("div", {
  textAlign: "center",
});

const PersonName = styled("p", {
  marginTop: "0.5rem",
  fontWeight: "500",
  fontSize: "0.9rem",
  opacity: 0.85,
});

const WeddingInfo = styled("div", {
  textAlign: "center",
  marginTop: "2rem",
  padding: "1.5rem",
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const InfoText = styled("p", {
  margin: "0.5rem 0",
  fontSize: "0.9rem",
  lineHeight: "1.6",
  color: "#333",
  fontWeight: "500",
});

const InfoLabel = styled("span", {
  color: "#ff6b6b",
  marginRight: "0.5rem",
  fontSize: "0.9rem",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  const { basePath } = useRouter();

  return (
    <div
      style={{
        background: "#efebe9",
        backgroundImage: `url(${basePath}/assets/GroovePaper.png)`,
        backgroundRepeat: "repeat",
        width: "100%",
        padding: "2rem 1rem",
        paddingBottom: 72,
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
          <Title>저희 결혼합니다</Title>
        </Divider>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <Content>
          {data?.gretting?.split("\n")?.map((value, index) => (
            <div key={index}>
              {value}
              <br />
            </div>
          ))}
        </Content>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <PhotoContainer>
          <Person>
            <Image
              src={`${basePath}/images/groom-photo.png`}
              alt="신랑 사진"
              width={160}
              height={160}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                maxWidth: "40vw",
                height: "auto",
              }}
              unoptimized
            />
            <PersonName>
              {data?.groom?.parents?.father?.name} · {data?.groom?.parents?.mother?.name}의 아들 {data?.groom?.name}
            </PersonName>
          </Person>
          <Person>
            <Image
              src={`${basePath}/images/bride-photo.png`}
              alt="신부 사진"
              width={160}
              height={160}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                maxWidth: "40vw",
                height: "auto",
              }}
              unoptimized
            />
            <PersonName>
              {data?.bride?.parents?.father?.name} · {data?.bride?.parents?.mother?.name}의 딸 {data?.bride?.name}
            </PersonName>
          </Person>
        </PhotoContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
      >
        <WeddingInfo>
          <InfoText>
            <InfoLabel>일시</InfoLabel>
            2025년 8월 23일 토요일 오후 12시 30분
          </InfoText>
          <InfoText>
            <InfoLabel>장소</InfoLabel>
            아펠가모 반포
          </InfoText>
          <InfoText>
            <InfoLabel>주소</InfoLabel>
            서울특별시 서초구 신반포로 23 효성빌딩 LL층
          </InfoText>
        </WeddingInfo>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.65, margin: "8px 0" }}>
            예식장 규정에 따라 화환 반입이 불가합니다.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.75, opacity: 0.65, margin: "8px 0" }}>
            마음만 감사히 받겠습니다.
          </p>
        </div>
      </motion.div>
    </div>
  );
}


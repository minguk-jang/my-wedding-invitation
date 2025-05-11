// import { styled } from "@stitches/react";
// import { Divider } from "antd";
// import Image from "next/image";

// const Wrapper = styled("div", {
//   background: "#efebe9",
//   backgroundImage: "url(./assets/GroovePaper.png)",
//   width: "100%",
//   padding: "2rem 1rem",
//   boxSizing: "border-box",
// });

// const Title = styled("p", {
//   fontSize: "3vh",
//   fontWeight: "bold",
//   opacity: 0.85,
//   marginBottom: 0,
// });

// const Content = styled("div", {
//   fontSize: "1.75vh",
//   lineHeight: 1.75,
//   opacity: 0.75,
//   marginBottom: 16,
//   width: "100%",
//   textAlign: "center",
// });

// const GroomBride = styled("p", {
//   fontSize: "1.75vh",
//   lineHeight: 1.75,
//   opacity: 0.85,
//   marginBottom: 0,
//   width: "100%",
//   textAlign: "center",
// });

// const PhotoContainer = styled("div", {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   gap: "2rem",
//   marginTop: "2rem",
//   flexWrap: "wrap",
// });

// const Person = styled("div", {
//   textAlign: "center",
// });

// const PersonName = styled("p", {
//   marginTop: "0.5rem",
//   fontWeight: "500",
//   fontSize: "1.5vh",
//   opacity: 0.85,
// });

// type GrettingProps = {
//   data?: Data;
// };

// export default function Gretting({ data }: GrettingProps) {
//   return (
//     <Wrapper>
//       <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
//         <Title>결혼합니다</Title>
//       </Divider>
//       <Content>
//         {data?.gretting?.split("\n")?.map((value, index) => (
//           <div key={index}>
//             {value}
//             <br />
//           </div>
//         ))}
//       </Content>

//       <PhotoContainer>
//         <Person>
//           <Image
//             src="images/groom-photo.jpeg" // 자연히 Public/images를 불러오므로 public을 굳이 적을 필요가 없다.
//             alt="신랑 사진"
//             width={160}
//             height={160}
//             style={{ borderRadius: "50%", objectFit: "cover" }}
//             unoptimized
//           />
//           <PersonName>{data?.groom?.parents?.father?.name} · {data?.groom?.parents?.mother?.name}의 아들 {data?.groom?.name}</PersonName>
//         </Person>
//         <Person>
//           <Image
//             src="images/bride-photo.jpeg"
//             alt="신부 사진"
//             width={160}
//             height={160}
//             style={{ borderRadius: "50%", objectFit: "cover" }}
//             unoptimized
//           />
//           <PersonName>{data?.bride?.parents?.father?.name} · {data?.bride?.parents?.mother?.name}의 딸 {data?.bride?.name}</PersonName>
//         </Person>
//       </PhotoContainer>

//       {/* <GroomBride>
//         {data?.groom?.parents?.father?.name} · {data?.groom?.parents?.mother?.name}의 장남 {data?.groom?.name}
//         <br />
//         {data?.bride?.parents?.father?.name} · {data?.bride?.parents?.mother?.name}의 장녀 {data?.bride?.name}
//       </GroomBride> */}
//     </Wrapper>
//   );
// }

// :contentReference[oaicite:7]{index=7}

// ### ✅ 2단계: 애니메이션 설정

// `Gretting.tsx` 컴포넌트에서 애니메이션을 적용하려는 요소들을 `motion.div`로 감싸고, `variants`를 사용하여 애니메이션 상태를 정의합니다. 또한, `staggerChildren`과 `delayChildren`을 활용하여 자식 요소들의 애니메이션이 순차적으로 실행되도록 설정합니다.&#8203;:contentReference[oaicite:8]{index=8}

import { styled } from "@stitches/react";
import { Divider } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  padding: "2rem 1rem",
  boxSizing: "border-box",
  paddingBottom: 72,
});

const Title = styled("p", {
  fontSize: "4vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "2.5vh",
  lineHeight: "1.5",
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
  letterSpacing: "-0.01em",  // ✅ 자간 줄임
});

// const PhotoContainer = styled("div", {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   gap: "2rem",
//   marginTop: "2rem",
//   flexWrap: "wrap",
// });
const PhotoContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  marginTop: "2rem",
  flexWrap: "wrap", // ✅ 줄바꿈 허용
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
  fontSize: "2.5vh",
  opacity: 0.85,
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
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
              src="/images/groom-photo.jpeg"
              alt="신랑 사진"
              width={160}
              height={160}
              // style={{ borderRadius: "50%", objectFit: "cover" }}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                maxWidth: "40vw", // ✅ 작은 화면에서 자동 축소
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
              src="/images/bride-photo.jpeg"
              alt="신부 사진"
              width={160}
              height={160}
              // style={{ borderRadius: "50%", objectFit: "cover" }}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                maxWidth: "40vw", // ✅ 작은 화면에서 자동 축소
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
    </Wrapper>
  );
} 
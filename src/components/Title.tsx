// import React, { useEffect, useState, useRef } from "react";
// import { styled } from "@stitches/react";

// const Layout = styled("div", {
//   width: "100%",
//   height: "100vh",
//   overflow: "hidden",
//   margin: "0px auto",
//   position: "relative",
// });

// const ImageBackground = styled("div", {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundImage: "url('./images/fig3.jpeg')", // 너가 설정한 배경 경로
//   backgroundSize: "cover",
//   backgroundPosition: "center center",
//   opacity: 0.9,
//   zIndex: 0,
// });

// const TitleWrapper = styled("div", {
//   position: "absolute",
//   width: "100%",
//   top: "10%",
//   left: "50%",
//   transform: "translateX(-50%)",
//   textAlign: "center",
//   zIndex: 1,
// });

// const WeddingInvitation = styled("p", {
//   fontSize: "1.5vh",
//   opacity: 0.45,
//   marginBottom: 16,
// });

// const GroomBride = styled("p", {
//   fontSize: "3.5vh",
//   fontWeight: "bold",
//   opacity: 0.9,
//   marginBottom: 16,
// });

// const Schedule = styled("p", {
//   fontSize: "3vh",
//   opacity: 0.65,
//   marginBottom: 24,
// });

// // ✅ 타이핑 오버레이
// const IntroOverlay = styled("div", {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.6)", // 반투명하게!
//   color: "#fff",
//   zIndex: 2,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "5vh",
//   fontFamily: "'Lazy Ride Script', cursive", // "'Noto Serif KR', serif",
//   letterSpacing: "0.1em",
//   transition: "opacity 1s ease",
//   fontWeight: "bold",
// });

// // const TypingTextWrapper = styled("div", {
// //   fontFamily: "'Lazy Ride Script', cursive", // "'Noto Serif KR', serif","'Noto Serif KR', serif",
// //   fontSize: "5vh",
// //   color: "#fff",
// //   letterSpacing: "0.1em",
// //   fontWeight: "bold",
// // });
// const TypingTextWrapper = styled("div", {
//   fontFamily: "'Lazy Ride Script', cursive",
//   fontSize: "4vh",
//   color: "#fff",
//   letterSpacing: "0.1em",
//   // fontWeight: "bold",
//   textAlign: "center",         // ✅ 가운데 정렬 유지
//   lineHeight: "1.4",           // ✅ 줄 간격도 살짝 여유
// });


// const TypingText: React.FC<{ text: string; onDone: () => void }> = ({ text, onDone }) => {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       if (i < text.length) {
//         const char = text[i]; // 현재 문자를 별도의 변수에 저장
//         setDisplayedText((prev) => prev + char);
//         i++;
//       } else {
//         clearInterval(interval);
//         setTimeout(onDone, 1000); // 타이핑 끝난 후 1초 후에 넘어감
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [text, onDone]);

//   return <TypingTextWrapper>{displayedText}</TypingTextWrapper>;
// };

// type TitleProps = {
//   data?: Data;
// };

// export default function Title({ data }: TitleProps) {
//   const [showIntro, setShowIntro] = useState(true);

//   return (
//     <Layout>
//       <ImageBackground />

//       {showIntro && (
//         <IntroOverlay>
//           <TypingText text="Here begins their happily ever after!" onDone={() => setShowIntro(false)} />
//         </IntroOverlay>
//       )}

//       {!showIntro && (
//         <TitleWrapper>
//           <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
//           <GroomBride>
//             {data?.groom?.name} ❤ {data?.bride?.name}
//           </GroomBride>
//           <Schedule>
//             {data?.date}
//             <br />
//             {data?.location}
//           </Schedule>
//         </TitleWrapper>
//       )}
//     </Layout>
//   );
// }

import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";

export function useFixVH() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
}

const Layout = styled("div", {
  width: "100%",
  height: "calc(var(--vh, 1vh) * 100)", // ✅ 수정: 안전한 vh 사용
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const ImageBackground = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('./images/fig3.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  opacity: 0.9,
  zIndex: 0,
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  textAlign: "center",
  zIndex: 1,
});

const WeddingInvitation = styled("p", {
  fontSize: "18px", // ✅ 수정: px로 고정
  opacity: 0.45,
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontSize: "32px", // ✅ 수정: px로 고정
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "24px", // ✅ 수정: px로 고정
  opacity: 0.65,
  marginBottom: 24,
});

const IntroOverlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "calc(var(--vh, 1vh) * 100)", // ✅ 수정
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#fff",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px", // ✅ 수정: px로 고정
  fontFamily: "'Lazy Ride Script', cursive",
  letterSpacing: "0.1em",
  transition: "opacity 1s ease",
  fontWeight: "bold",
});

const TypingTextWrapper = styled("div", {
  fontFamily: "'Lazy Ride Script', cursive",
  fontSize: "28px", // ✅ 수정: px로 고정
  color: "#fff",
  letterSpacing: "0.1em",
  textAlign: "center",
  lineHeight: "1.4",
});

const TypingText: React.FC<{ text: string; onDone: () => void }> = ({ text, onDone }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        const char = text[i];
        setDisplayedText((prev) => prev + char);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onDone, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, onDone]);

  return <TypingTextWrapper>{displayedText}</TypingTextWrapper>;
};

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  useFixVH(); // ✅ vh fix 추가

  const [showIntro, setShowIntro] = useState(true);

  return (
    <Layout>
      <ImageBackground />

      {showIntro && (
        <IntroOverlay>
          <TypingText text="Here begins their happily ever after!" onDone={() => setShowIntro(false)} />
        </IntroOverlay>
      )}

      {!showIntro && (
        <TitleWrapper>
          <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
          <GroomBride>
            {data?.groom?.name} ❤ {data?.bride?.name}
          </GroomBride>
          <Schedule>
            {data?.date}
            <br />
            {data?.location}
          </Schedule>
        </TitleWrapper>
      )}
    </Layout>
  );
}

// import React, { useEffect, useState, useRef } from "react";
// import { styled } from "@stitches/react";

// // 기본 레이아웃 스타일
// const Layout = styled("div", {
//   width: "100%",
//   height: "100vh",
//   overflow: "hidden",
//   margin: "0px auto",
//   position: "relative",
// });

// // 배경 이미지
// const ImageBackground = styled("div", {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundImage: "url('./images/fig4.jpeg')",
//   backgroundSize: "cover",
//   backgroundPosition: "center center",
//   opacity: 0.9,
//   zIndex: 0,
// });

// // 제목 레이아웃
// const TitleWrapper = styled("div", {
//   position: "absolute",
//   width: "100%",
//   top: "55%",
//   left: "50%",
//   transform: "translateX(-50%)",
//   textAlign: "center",
//   zIndex: 1,
// });

// // 텍스트 스타일
// const WeddingInvitation = styled("p", {
//   fontSize: "2vh",
//   opacity: 0.45,
//   marginBottom: 16,
// });

// const GroomBride = styled("p", {
//   fontSize: "4vh",
//   fontWeight: "bold",
//   opacity: 0.9,
//   marginBottom: 16,
// });

// const Schedule = styled("p", {
//   fontSize: "3vh",
//   opacity: 0.65,
//   marginBottom: 24,
//   lineHeight: "1.1",         // ✅ 줄 간격 줄임
//   letterSpacing: "-0.03em",  // ✅ 자간 줄임
// });

// // 인트로 오버레이 스타일
// const IntroOverlay = styled("div", {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.6)",
//   color: "#f8f5f0",
//   zIndex: 2,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "6vh",
//   fontFamily: "'Lazy Ride Script', cursive",
//   letterSpacing: "0.1em",
//   transition: "opacity 1s ease",
//   fontWeight: "bold",
// });

// // 타이핑 텍스트 스타일
// const TypingTextWrapper = styled("div", {
//   fontFamily: "'Lazy Ride Script', cursive",
//   fontSize: "4vh",
//   color: "#fff",
//   letterSpacing: "0.1em",
//   textAlign: "center",
//   lineHeight: "1.4",
// });

// // 오른쪽 위 음향 버튼
// const MusicButton = styled("button", {
//   position: "fixed",
//   top: 20,
//   right: 20,
//   zIndex: 3, // 오버레이보다 위
//   background: "transparent",
//   border: "none",
//   fontSize: "3vh",
//   color: "white",
//   cursor: "pointer",
// });

// const WeddingTitle = styled("div", {
//   // fontFamily: "'Playfair Display', serif",
//   fontSize: "9vh",
//   fontWeight: 400,
//   color: "#f8f5f0", // #fdf6f0, 	#d9d4ce, #f6f1eb
//   textAlign: "center",
//   lineHeight: "0.9",
//   letterSpacing: "-0.05em",
//   zIndex: 1,
//   whiteSpace: "pre-line",
//   textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // ✔️ 어두운 배경 대비 향상 (선택)
// });

// // 타이핑 텍스트 컴포넌트
// const TypingText: React.FC<{ text: string; onDone: () => void }> = ({ text, onDone }) => {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       if (i < text.length) {
//         const char = text[i];
//         setDisplayedText((prev) => prev + char);
//         i++;
//       } else {
//         clearInterval(interval);
//         setTimeout(onDone, 1000); // 타이핑 끝난 후 1초 대기
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [text, onDone]);

//   return <TypingTextWrapper>{displayedText}</TypingTextWrapper>;
// };

// type TitleProps = {
//   data?: Data;
// };

// // 메인 컴포넌트
// export default function Title({ data }: TitleProps) {
//   const [showIntro, setShowIntro] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     // 오디오 객체 생성
//     audioRef.current = new Audio("./music/hong.mp3");
//     audioRef.current.loop = true; // 반복 재생

//     return () => {
//       // 페이지 나갈 때 오디오 정리
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current = null;
//       }
//     };
//   }, []);

//   // 인트로 끝나면 호출
//   const handleIntroEnd = () => {
//     setShowIntro(false);
//     if (audioRef.current) {
//       audioRef.current.play().then(() => {
//         setIsPlaying(true);
//       }).catch((e) => {
//         console.log("Auto-play blocked:", e);
//       });
//     }
//   };

//   // 음악 토글
//   const toggleMusic = () => {
//     if (!audioRef.current) return;
//     if (audioRef.current.paused) {
//       audioRef.current.play();
//       setIsPlaying(true);
//     } else {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <Layout>
//       <ImageBackground />

//       {showIntro && (
//         <IntroOverlay>
//           <TypingText text="Here begins their happily ever after" onDone={handleIntroEnd} />
//         </IntroOverlay>
//       )}

//       {!showIntro && (
//         <>
//           <TitleWrapper>
//           <WeddingTitle>
//               OUR{"\n"}WEDDING{"\n"}DAY
//             </WeddingTitle>
//             {/* <WeddingInvitation>WEDDING INVITATION</WeddingInvitation> */}
//             {/* <GroomBride>
//               {data?.groom?.name} ❤ {data?.bride?.name}
//             </GroomBride> */}
//             <Schedule>
//               {data?.date}
//               <br />
//               {data?.location}
//             </Schedule>
//           </TitleWrapper>

//           {/* 오른쪽 위 음악 버튼 */}
//           <MusicButton onClick={toggleMusic}>
//             {isPlaying ? "🔊" : "🔇"}
//           </MusicButton>
//         </>
//       )}
//     </Layout>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import { styled } from "@stitches/react";

// 기본 레이아웃 스타일
const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

// 배경 이미지
const ImageBackground = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url('./images/fig4.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  opacity: 0.9,
  zIndex: 0,
});

// 제목 레이아웃
const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "55%",
  left: "50%",
  transform: "translateX(-50%)",
  textAlign: "center",
  zIndex: 1,
});

// 텍스트 스타일
const WeddingInvitation = styled("p", {
  fontSize: "2vh",
  opacity: 0.45,
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontSize: "4vh",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "3vh",
  opacity: 0.65,
  marginBottom: 24,
  lineHeight: "1.1",         // ✅ 줄 간격 줄임
  letterSpacing: "-0.03em",  // ✅ 자간 줄임
});

// 인트로 오버레이 스타일
const IntroOverlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#f8f5f0",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "5vh",
  fontFamily: "'Lazy Ride Script', cursive",
  letterSpacing: "0.1em",
  transition: "opacity 1s ease",
  fontWeight: "bold",
});

// 타이핑 텍스트 스타일
const TypingTextWrapper = styled("div", {
  fontFamily: "'Lazy Ride Script', cursive",
  fontSize: "5vh",
  color:  "#f8f5f0",//"#fff",
  letterSpacing: "0.1em",
  textAlign: "center",
  lineHeight: "1.5",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  whiteSpace: "pre-line",
});

const Line = styled("div", {
  minHeight: "1em", // 고정 높이 확보
});


// 오른쪽 위 음향 버튼
const MusicButton = styled("button", {
  position: "fixed",
  top: 20,
  right: 20,
  zIndex: 3, // 오버레이보다 위
  background: "transparent",
  border: "none",
  fontSize: "3vh",
  color: "white",
  cursor: "pointer",
});

const WeddingTitle = styled("div", {
  // fontFamily: "'Playfair Display', serif",
  fontSize: "9vh",
  fontWeight: 400,
  color: "#f8f5f0", // #fdf6f0, 	#d9d4ce, #f6f1eb
  textAlign: "center",
  lineHeight: "0.9",
  letterSpacing: "-0.05em",
  zIndex: 1,
  whiteSpace: "pre-line",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // ✔️ 어두운 배경 대비 향상 (선택)
});

// 타이핑 텍스트 컴포넌트
const TypingText: React.FC<{ lines: string[]; onDone: () => void }> = ({
  lines,
  onDone,
}) => {
  const [line1Index, setLine1Index] = useState(0);
  const [line2Index, setLine2Index] = useState(0);

  const line1Full = lines[0] ?? "";
  const line2Full = lines[1] ?? "";

  useEffect(() => {
    if (!line1Full) return;

    const interval1 = setInterval(() => {
      setLine1Index((prev) => {
        if (prev < line1Full.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval1);
          setTimeout(() => {
            startSecondLine();
          }, 100);
          return prev;
        }
      });
    }, 100);

    const startSecondLine = () => {
      const interval2 = setInterval(() => {
        setLine2Index((prev) => {
          if (prev < line2Full.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval2);
            setTimeout(onDone, 1000);
            return prev;
          }
        });
      }, 100);
    };

    return () => {
      clearInterval(interval1);
    };
  }, [line1Full, line2Full, onDone]);

  return (
    <TypingTextWrapper>
      <Line>{line1Full.slice(0, line1Index + 1)}</Line>
      <Line>{line2Full.slice(0, line2Index + 1)}</Line>
    </TypingTextWrapper>
  );
};






type TitleProps = {
  data?: Data;
};

// 메인 컴포넌트
export default function Title({ data }: TitleProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 오디오 객체 생성
    audioRef.current = new Audio("./music/hong.mp3");
    audioRef.current.loop = true; // 반복 재생

    return () => {
      // 페이지 나갈 때 오디오 정리
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // 인트로 끝나면 호출
  const handleIntroEnd = () => {
    setShowIntro(false);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Auto-play blocked:", e);
      });
    }
  };

  // 음악 토글
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Layout>
      <ImageBackground />

      {showIntro && (
        <IntroOverlay>
          <TypingText
            lines={["Here begins", "their happily ever after"]}
            onDone={handleIntroEnd}
          />
        </IntroOverlay>
      )}

      {!showIntro && (
        <>
          <TitleWrapper>
          <WeddingTitle>
              OUR{"\n"}WEDDING{"\n"}DAY
            </WeddingTitle>
            {/* <WeddingInvitation>WEDDING INVITATION</WeddingInvitation> */}
            {/* <GroomBride>
              {data?.groom?.name} ❤ {data?.bride?.name}
            </GroomBride> */}
            <Schedule>
              {data?.date}
              <br />
              {data?.location}
            </Schedule>
          </TitleWrapper>

          {/* 오른쪽 위 음악 버튼 */}
          <MusicButton onClick={toggleMusic}>
            {isPlaying ? "🔊" : "🔇"}
          </MusicButton>
        </>
      )}
    </Layout>
  );
}

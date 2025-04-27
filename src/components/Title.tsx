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
//   fontSize: "2.5vh",
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
  backgroundImage: "url('./images/fig3.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  opacity: 0.9,
  zIndex: 0,
});

// 제목 레이아웃
const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  textAlign: "center",
  zIndex: 1,
});

// 텍스트 스타일
const WeddingInvitation = styled("p", {
  fontSize: "1.5vh",
  opacity: 0.45,
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontSize: "3.5vh",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "2.5vh",
  opacity: 0.65,
  marginBottom: 24,
});

// 인트로 오버레이 스타일
const IntroOverlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#fff",
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
  fontSize: "4vh",
  color: "#fff",
  letterSpacing: "0.1em",
  textAlign: "center",
  lineHeight: "1.4",
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


// 타이핑 텍스트 컴포넌트
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
        setTimeout(onDone, 1000); // 타이핑 끝난 후 1초 대기
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, onDone]);

  return <TypingTextWrapper>{displayedText}</TypingTextWrapper>;
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
          <TypingText text="Here begins their happily ever after!" onDone={handleIntroEnd} />
        </IntroOverlay>
      )}

      {!showIntro && (
        <>
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

          {/* 오른쪽 위 음악 버튼 */}
          <MusicButton onClick={toggleMusic}>
            {isPlaying ? "🔊" : "🔇"}
          </MusicButton>
        </>
      )}
    </Layout>
  );
}

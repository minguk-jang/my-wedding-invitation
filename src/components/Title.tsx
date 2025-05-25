import React, { useEffect, useState, useRef } from "react";
import { styled } from "@stitches/react";
import { useRouter } from "next/router";

// 기본 레이아웃 스타일
const Layout = styled("div", {
  width: "100%",
  height: "calc(var(--vh, 1vh) * 100)",
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
  fontSize: "0.875rem",
  opacity: 0.45,
  marginBottom: 16,
});

const GroomBride = styled("p", {
  fontSize: "1.75rem",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "1.3125rem",
  opacity: 0.65,
  marginBottom: 24,
  lineHeight: "1.1",
  letterSpacing: "-0.03em",
});

const IntroOverlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "calc(var(--vh, 1vh) * 100)",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "#f8f5f0",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.1875rem",
  fontFamily: "'Lazy Ride Script', cursive",
  letterSpacing: "0.1em",
  transition: "opacity 1s ease",
  fontWeight: "bold",
});

const TypingTextWrapper = styled("div", {
  fontFamily: "'Lazy Ride Script', cursive",
  fontSize: "2.1875rem",
  color: "#f8f5f0",
  letterSpacing: "0.1em",
  textAlign: "center",
  lineHeight: "1.5",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  whiteSpace: "pre-line",
});

const Line = styled("div", {
  minHeight: "1.5em",
});

const MusicButton = styled("button", {
  position: "fixed",
  top: 20,
  right: 20,
  zIndex: 3,
  background: "transparent",
  border: "none",
  fontSize: "1.75rem",
  color: "white",
  cursor: "pointer",
});

const WeddingTitle = styled("div", {
  fontSize: "3.9375rem",
  fontWeight: 400,
  color: "#f8f5f0",
  textAlign: "center",
  lineHeight: "0.9",
  letterSpacing: "-0.05em",
  zIndex: 1,
  whiteSpace: "pre-line",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
});

const TypingText: React.FC<{ lines: string[]; onDone: () => void }> = ({
  lines,
  onDone,
}) => {
  const [line1Index, setLine1Index] = useState(0);
  const [line2Index, setLine2Index] = useState(0);
  const [line3Index, setLine3Index] = useState(0);

  const line1Full = lines[0] ?? "";
  const line2Full = lines[1] ?? "";
  const line3Full = lines[2] ?? "";

  useEffect(() => {
    if (!line1Full) return;

    let interval1: NodeJS.Timeout;
    let interval2: NodeJS.Timeout;
    let interval3: NodeJS.Timeout;

    const typeLine1 = () => {
      interval1 = setInterval(() => {
        setLine1Index((prev) => {
          if (prev < line1Full.length) return prev + 1;
          clearInterval(interval1);
          setTimeout(typeLine2, 300);
          return prev;
        });
      }, 100);
    };

    const typeLine2 = () => {
      interval2 = setInterval(() => {
        setLine2Index((prev) => {
          if (prev < line2Full.length) return prev + 1;
          clearInterval(interval2);
          setTimeout(typeLine3, 300);
          return prev;
        });
      }, 100);
    };

    const typeLine3 = () => {
      interval3 = setInterval(() => {
        setLine3Index((prev) => {
          if (prev < line3Full.length) return prev + 1;
          clearInterval(interval3);
          setTimeout(onDone, 1000);
          return prev;
        });
      }, 100);
    };

    typeLine1();

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [line1Full, line2Full, line3Full, onDone]);

  return (
    <TypingTextWrapper>
      <Line>{line1Full.slice(0, line1Index)}</Line>
      <Line>{line2Full.slice(0, line2Index)}</Line>
      <Line>{line3Full.slice(0, line3Index)}</Line>
    </TypingTextWrapper>
  );
};

type TitleProps = {
  data?: Data;
};

export default function Title({ data }: TitleProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { basePath } = useRouter(); // ✅ basePath 가져오기

  useEffect(() => {
    audioRef.current = new Audio(`${basePath}/music/hong.mp3`);
    audioRef.current.loop = true;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [basePath]);

  const handleIntroEnd = () => {
    setShowIntro(false);
    audioRef.current?.play().then(() => setIsPlaying(true)).catch(console.warn);
  };

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
            lines={["Here begins", "their happily", "ever after"]}
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
            <Schedule>
              {data?.date}
              <br />
              {data?.location}
            </Schedule>
          </TitleWrapper>

          <MusicButton onClick={toggleMusic}>
            {isPlaying ? "🔊" : "🔇"}
          </MusicButton>
        </>
      )}
    </Layout>
  );
}

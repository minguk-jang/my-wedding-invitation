import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Title = styled("p", {
  fontSize: "1.75rem",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const ButtonGroup = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap",
  marginTop: "24px",
  marginBottom: "24px",
});

const KakaoTalkShareButton = styled(Button, {
  background: "#fee500",
  borderColor: "#fee500",
  color: "#181600",
  fontWeight: "bold",
  minWidth: "160px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 15px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
  "&:focus": {
    backgroundColor: "#fcf07e !important",
    borderColor: "#fcf07e !important",
    color: "#17160b !important",
  },
});

const LinkShareButton = styled(Button, {
  background: "#53acee",
  borderColor: "#53acee",
  color: "#ffffff",
  fontWeight: "bold",
  minWidth: "160px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px 15px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
  "&:focus": {
    backgroundColor: "#9fcbed !important",
    borderColor: "#9fcbed !important",
    color: "#ffffff !important",
  },
});

const Copyright = styled("div", {
  textAlign: "center",
  padding: "24px 0",
  color: "#666",
  fontSize: "0.875rem",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
});

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const GITHUB_PAGES_URL = "https://minguk-jang.github.io/my-wedding-invitation";

  useEffect(() => {
    const initKakao = () => {
      try {
        if (typeof window !== 'undefined' && window.Kakao) {
          if (!window.Kakao.isInitialized()) {
            window.Kakao.init(data?.kakaotalk?.api_token);
          }
        }
      } catch (error) {
        console.error('Kakao init error:', error);
      }
    };

    // Kakao SDK가 로드된 후 초기화
    if (document.readyState === 'complete') {
      initKakao();
    } else {
      window.addEventListener('load', initKakao);
      return () => window.removeEventListener('load', initKakao);
    }
  }, [data?.kakaotalk?.api_token]);

  const handleKakaoShare = () => {
    try {
      if (!window.Kakao?.Share) {
        console.error('Kakao SDK not loaded');
        message.error('카카오톡 공유 기능을 불러오는 중 오류가 발생했습니다.');
        return;
      }

      window.Kakao.Share.sendDefault({
        objectType: "calendar",
        content: {
          title: `${data?.groom?.name}❤${data?.bride?.name} 결혼식에 초대합니다`,
          description: "2025년 8월 23일 토요일 낮 12시 30분\n아펠가모 반포",
          imageUrl: `${GITHUB_PAGES_URL}/images/fig1.jpeg`,
          link: {
            mobileWebUrl: GITHUB_PAGES_URL,
            webUrl: GITHUB_PAGES_URL,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: GITHUB_PAGES_URL,
              webUrl: GITHUB_PAGES_URL,
            },
          },
        ],
        scheduleTitle: "장민국❤이주연 결혼식",
        scheduleStartTime: "2025-08-23T12:30:00+09:00",
        scheduleEndTime: "2025-08-23T15:00:00+09:00",
        schedulePlace: "아펠가모 반포"
      });

      message.success("카카오톡으로 청첩장을 공유합니다!");
    } catch (error) {
      console.error("카카오톡 공유 오류:", error);
      message.error("카카오톡 공유에 실패했습니다.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
    >
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>청첩장 공유하기</Title>
      </Divider>

      <ButtonGroup>
        <KakaoTalkShareButton
          icon={<MessageFilled />}
          size="large"
          onClick={handleKakaoShare}
        >
          카카오톡으로 공유하기
        </KakaoTalkShareButton>

        <CopyToClipboard text={GITHUB_PAGES_URL}>
          <LinkShareButton
            icon={<LinkOutlined />}
            size="large"
            onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
          >
            링크로 공유하기
          </LinkShareButton>
        </CopyToClipboard>
      </ButtonGroup>

      <Copyright>
        Copyright © 2025 Minguk Jang
      </Copyright>
    </motion.div>
  );
}

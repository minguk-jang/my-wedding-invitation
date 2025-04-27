
// import { LinkOutlined, MessageFilled } from "@ant-design/icons";
// import { styled } from "@stitches/react";
// import { Button, Divider, message } from "antd";
// import { useEffect } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";
// import { motion } from "framer-motion"; // Framer Motion 추가

// declare global {
//   interface Window {
//     Kakao: any;
//   }
// }

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

// const KakaoTalkShareButton = styled(Button, {
//   background: "#fee500",
//   borderColor: "#fee500",
//   color: "#181600",
//   "&:hover": {
//     backgroundColor: "#fcf07e !important",
//     borderColor: "#fcf07e !important",
//     color: "#17160b !important",
//   },
//   "&:focus": {
//     backgroundColor: "#fcf07e !important",
//     borderColor: "#fcf07e !important",
//     color: "#17160b !important",
//   },
// });

// const LinkShareButton = styled(Button, {
//   background: "#53acee",
//   borderColor: "#53acee",
//   color: "#ffffff",
//   "&:hover": {
//     backgroundColor: "#9fcbed !important",
//     borderColor: "#9fcbed !important",
//     color: "#ffffff !important",
//   },
//   "&:focus": {
//     backgroundColor: "#9fcbed !important",
//     borderColor: "#9fcbed !important",
//     color: "#ffffff !important",
//   },
// });

// type ShareProps = {
//   data?: Data;
// };

// export default function Share({ data }: ShareProps) {
//   const handleKakaoShare = () => {
//     try {
//       if (!window.Kakao.isInitialized()) {
//         window.Kakao.init(data?.kakaotalk?.api_token);
//       }

//       window.Kakao.Link.sendDefault({
//         objectType: "feed",
//         content: {
//           title: `${data?.groom?.name}❤${data?.bride?.name} 결혼식에 초대합니다`,
//           description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
//           imageUrl: data?.kakaotalk?.share_image,
//           link: {
//             mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
//             webUrl: data?.kakaotalk?.wedding_invitation_url,
//           },
//         },
//         buttons: [
//           {
//             title: "청첩장 열기",
//             link: {
//               mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
//               webUrl: data?.kakaotalk?.wedding_invitation_url,
//             },
//           },
//         ],
//       });

//       message.success("카카오톡으로 청첩장을 공유합니다!");
//     } catch (error) {
//       console.error("카카오톡 공유 오류:", error);
//       message.error("카카오톡 공유에 실패했습니다.");
//     }
//   };

//   return (
//     <Wrapper>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 1.2 }}
//       >
//         <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
//           <Title>청첩장 공유하기</Title>
//         </Divider>

//         <KakaoTalkShareButton
//           style={{ margin: 8 }}
//           icon={<MessageFilled />}
//           size="large"
//           onClick={handleKakaoShare}
//         >
//           카카오톡으로 공유하기
//         </KakaoTalkShareButton>

//         <CopyToClipboard text={data?.kakaotalk?.wedding_invitation_url ?? ""}>
//           <LinkShareButton
//             style={{ margin: 8 }}
//             icon={<LinkOutlined />}
//             size="large"
//             onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
//           >
//             링크로 공유하기
//           </LinkShareButton>
//         </CopyToClipboard>
//       </motion.div>
//     </Wrapper>
//   );
// }

import { LinkOutlined, MessageFilled } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, message } from "antd";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { motion } from "framer-motion"; // Framer Motion 추가

declare global {
  interface Window {
    Kakao: any;
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
  fontSize: "24px", // ✅ vh 대신 px 고정
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const ButtonGroup = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",          // 버튼 간격
  flexWrap: "wrap",     // 화면 좁으면 줄바꿈
  marginTop: "24px",
});

const KakaoTalkShareButton = styled(Button, {
  background: "#fee500",
  borderColor: "#fee500",
  color: "#181600",
  fontWeight: "bold",
  minWidth: "160px",     // 버튼 최소 너비
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
  minWidth: "160px",    // 버튼 최소 너비
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

type ShareProps = {
  data?: Data;
};

export default function Share({ data }: ShareProps) {
  const handleKakaoShare = () => {
    try {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(data?.kakaotalk?.api_token);
      }

      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: `${data?.groom?.name}❤${data?.bride?.name} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: data?.kakaotalk?.share_image,
          link: {
            mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
            webUrl: data?.kakaotalk?.wedding_invitation_url,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: data?.kakaotalk?.wedding_invitation_url,
              webUrl: data?.kakaotalk?.wedding_invitation_url,
            },
          },
        ],
      });

      message.success("카카오톡으로 청첩장을 공유합니다!");
    } catch (error) {
      console.error("카카오톡 공유 오류:", error);
      message.error("카카오톡 공유에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
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

          <CopyToClipboard text={data?.kakaotalk?.wedding_invitation_url ?? ""}>
            <LinkShareButton
              icon={<LinkOutlined />}
              size="large"
              onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
            >
              링크로 공유하기
            </LinkShareButton>
          </CopyToClipboard>
        </ButtonGroup>
      </motion.div>
    </Wrapper>
  );
}

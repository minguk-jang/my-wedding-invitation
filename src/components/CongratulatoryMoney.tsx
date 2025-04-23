// import { CheckCircleTwoTone } from "@ant-design/icons";
// import { styled } from "@stitches/react";
// import { Button, Divider, Modal, message } from "antd";
// import { useState } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";
// import { motion } from "framer-motion"; // Framer Motion 추가

// const Wrapper = styled("div", {
//   background: "#efebe9",
//   backgroundImage: "url(./assets/GroovePaper.png)",
//   paddingBottom: 18,
//   width: "100%",
//   textAlign: "center",
// });

// const Title = styled("p", {
//   fontSize: "3vh",
//   fontWeight: "bold",
//   opacity: 0.85,
//   marginBottom: 0,
// });

// const Content = styled("p", {
//   fontSize: "1.5vh",
//   lineHeight: 1.75,
//   opacity: 0.75,
//   marginBottom: 24,
// });

// const SubContent = styled("p", {
//   fontSize: "1.3vh",
//   lineHeight: 1.75,
//   opacity: 0.75,
//   marginBottom: 24,
// });

// const Description = styled("p", {
//   fontSize: "1.3vh",
//   lineHeight: 1.75,
//   opacity: 0.65,
//   marginTop: 8,
// });

// const ContactButton = styled("div", {
//   display: "inline-block",
//   textAlign: "center",
//   marginLeft: 24,
//   marginRight: 24,
//   marginBottom: 24,
// });

// type CongratulatoryMoneyProps = {
//   data?: Data;
// };

// export default function CongratulatoryMoney({
//   data,
// }: CongratulatoryMoneyProps) {
//   const [groomVisible, setGroomVisible] = useState<boolean>(false);
//   const [brideVisible, setBrideVisible] = useState<boolean>(false);

//   return (
//     <Wrapper>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 1.2 }}
//       >
//         <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
//           <Title>축하의 마음을 전하세요</Title>
//         </Divider>
//         <Content>축하의 마음을 담아 축의금을 전달해 보세요.</Content>
//         <ContactButton onClick={() => setGroomVisible(true)}>
//           <CheckCircleTwoTone
//             style={{ fontSize: 64, marginBottom: 16 }}
//             twoToneColor="#829fe0"
//           />
//           <br />
//           <SubContent>신랑측 계좌번호 확인</SubContent>
//         </ContactButton>
//         <ContactButton onClick={() => setBrideVisible(true)}>
//           <CheckCircleTwoTone
//             style={{ fontSize: 64, marginBottom: 16 }}
//             twoToneColor="#fe7daf"
//           />
//           <br />
//           <SubContent>신부측 계좌번호 확인</SubContent>
//         </ContactButton>
//       </motion.div>
//       {/* Modal 코드 생략 */}
//     </Wrapper>
//   );
// }

import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 18,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "3vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const SubContent = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
  cursor: "pointer",
});

const InfoBlock = styled("div", {
  marginBottom: 24,
});

export default function GroomModalSection() {
  const [groomVisible, setGroomVisible] = useState(false);

  const handleCopy = (label: string) => {
    message.success(`${label} 복사되었습니다.`);
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
          <Title>마음 전하실 곳</Title>
        </Divider>
        <Content>축하의 마음을 담아 축의금을 전달해 보세요.</Content>
        <ContactButton onClick={() => setGroomVisible(true)}>
          <CheckCircleTwoTone
            style={{ fontSize: 64, marginBottom: 16 }}
            twoToneColor="#829fe0"
          />
          <br />
          <SubContent>신랑측 계좌번호 확인</SubContent>
        </ContactButton>
      </motion.div>

      <Modal
        title="신랑측 축의금 전달처"
        open={groomVisible}
        footer={null}
        onCancel={() => setGroomVisible(false)}
      >
        <InfoBlock>
          <p><strong>신랑 홍길동</strong></p>
          <CopyToClipboard text="카카오페이 01012345678" onCopy={() => handleCopy("신랑 카카오페이")}>
            <Button block>카카오페이 010-1234-5678 복사</Button>
          </CopyToClipboard>
          <br />
          <CopyToClipboard text="국민은행 123456-78-901234" onCopy={() => handleCopy("신랑 계좌번호")}>
            <Button block>국민은행 123456-78-901234 복사</Button>
          </CopyToClipboard>
        </InfoBlock>

        <InfoBlock>
          <p><strong>신랑 아버지 홍아버지</strong></p>
          <CopyToClipboard text="카카오페이 01023456789" onCopy={() => handleCopy("신랑 아버지 카카오페이")}>
            <Button block>카카오페이 010-2345-6789 복사</Button>
          </CopyToClipboard>
          <br />
          <CopyToClipboard text="우리은행 234567-89-012345" onCopy={() => handleCopy("신랑 아버지 계좌번호")}>
            <Button block>우리은행 234567-89-012345 복사</Button>
          </CopyToClipboard>
        </InfoBlock>

        <InfoBlock>
          <p><strong>신랑 어머니 이어머니</strong></p>
          <CopyToClipboard text="카카오페이 01034567890" onCopy={() => handleCopy("신랑 어머니 카카오페이")}>
            <Button block>카카오페이 010-3456-7890 복사</Button>
          </CopyToClipboard>
          <br />
          <CopyToClipboard text="신한은행 345678-90-123456" onCopy={() => handleCopy("신랑 어머니 계좌번호")}>
            <Button block>신한은행 345678-90-123456 복사</Button>
          </CopyToClipboard>
        </InfoBlock>
      </Modal>
    </Wrapper>
  );
}

import { Collapse, Divider, Button, message, Space } from "antd";
import { styled } from "@stitches/react";
import CopyToClipboard from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const { Panel } = Collapse;

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 72,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "1.75rem",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Description = styled("p", {
  fontSize: "1.125rem",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
  textAlign: "left",
  paddingLeft: 12,
});

const BlueHeader = styled("span", {
  color: "#3f51b5",
  fontWeight: "bold",
});

const PinkHeader = styled("span", {
  color: "#e91e63",
  fontWeight: "bold",
});

const CustomCollapse = styled(Collapse, {
  backgroundColor: "transparent",
  ".ant-collapse-item": {
    border: "2px solid #cfc6bd",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    backgroundColor: "#efebe9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  ".ant-collapse-item:last-child": {
    marginBottom: 32,
    borderBottom: "2px solid #cfc6bd",
  },
  ".ant-collapse-header": {
    backgroundColor: "#efebe9",
  },
  ".ant-collapse-content": {
    backgroundColor: "#efebe9",
    borderTop: "1px solid #cfc6bd",
    borderRadius: "0 0 12px 12px",
  },
});

const VerticalInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: 16,
  paddingLeft: 12,
});

const ButtonGroup = styled("div", {
  display: "flex",
  gap: "8px",
  marginTop: "4px",
});

const KakaoPayButton = styled(Button, {
  background: "#ffeb00",
  borderColor: "#ffeb00",
  color: "#181600",
  "&:hover": {
    background: "#ffe100 !important",
    borderColor: "#ffe100 !important",
    color: "#181600 !important",
  },
});

type CongratulatoryMoneyProps = {
  data?: {
    groom?: {
      name: string;
      account_number: string;
      parents?: {
        father?: { name: string; account_number: string };
        mother?: { name: string; account_number: string };
      };
    };
    bride?: {
      name: string;
      account_number: string;
      parents?: {
        father?: { name: string; account_number: string };
        mother?: { name: string; account_number: string };
      };
    };
  };
};

export default function CongratulatoryMoney({ data }: CongratulatoryMoneyProps) {
  const { basePath } = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = window.navigator.userAgent;
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleKakaoPay = (name: string, accountNumber: string) => {
    // 카카오페이 송금 URL 스킴
    const kakaoPayUrl = `kakaotalk://kakaopay/money/to/bank/${accountNumber}`;
    window.location.href = kakaoPayUrl;
  };

  const renderAccountInfo = (
    name: string,
    accountNumber: string,
    label: string,
    color: string
  ) => (
    <VerticalInfo>
      <p style={{ color: color, marginBottom: 2 }}><b>{label}</b></p>
      <ButtonGroup>
        <CopyToClipboard
          text={accountNumber}
          onCopy={() => message.success("계좌번호가 복사되었습니다.")}
        >
          <Button type="text" style={{ padding: "4px 8px", color: "black" }}>
            {accountNumber}
          </Button>
        </CopyToClipboard>
        {isMobile && (
          <KakaoPayButton
            size="small"
            onClick={() => handleKakaoPay(name, accountNumber)}
          >
            카카오페이 송금
          </KakaoPayButton>
        )}
      </ButtonGroup>
      <p style={{ color: "black", marginBottom: 0 }}>{name}</p>
    </VerticalInfo>
  );

  return (
    <div
      style={{
        background: "#efebe9",
        backgroundImage: `url(${basePath}/assets/GroovePaper.png)`,
        backgroundRepeat: "repeat",
        width: "100%",
        paddingBottom: 72,
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
      >
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>마음 전하실 곳</Title>
        </Divider>

        <CustomCollapse accordion={false} bordered={false} defaultActiveKey={["groom", "bride"]}>
          <Panel header={<BlueHeader>신랑측</BlueHeader>} key="groom">
            {data?.groom && renderAccountInfo(
              data.groom.name,
              data.groom.account_number,
              "신랑",
              "#3f51b5"
            )}
            {data?.groom?.parents?.father && renderAccountInfo(
              data.groom.parents.father.name,
              data.groom.parents.father.account_number,
              "신랑 아버지",
              "#3f51b5"
            )}
            {data?.groom?.parents?.mother && renderAccountInfo(
              data.groom.parents.mother.name,
              data.groom.parents.mother.account_number,
              "신랑 어머니",
              "#3f51b5"
            )}
            <Description>계좌번호 클릭 시 클립보드에 복사됩니다.</Description>
          </Panel>

          <Panel header={<PinkHeader>신부측</PinkHeader>} key="bride">
            {data?.bride && renderAccountInfo(
              data.bride.name,
              data.bride.account_number,
              "신부",
              "#e91e63"
            )}
            {data?.bride?.parents?.father && renderAccountInfo(
              data.bride.parents.father.name,
              data.bride.parents.father.account_number,
              "신부 아버지",
              "#e91e63"
            )}
            {data?.bride?.parents?.mother && renderAccountInfo(
              data.bride.parents.mother.name,
              data.bride.parents.mother.account_number,
              "신부 어머니",
              "#e91e63"
            )}
            <Description>계좌번호 클릭 시 클립보드에 복사됩니다.</Description>
          </Panel>
        </CustomCollapse>

        {/* 안내 문구 */}
        {"\n예식장 규정에 따라 화환 반입이 불가합니다.\n마음만 감사히 받겠습니다."
          .split("\n")
          .map((line, idx) => (
            <Description key={idx} style={{ marginBottom: "16px" }}>
              {line}
              <br />
            </Description>
          ))}
      </motion.div>
    </div>
  );
}

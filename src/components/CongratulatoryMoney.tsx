import { Collapse, Divider, Button, message } from "antd";
import { styled } from "@stitches/react";
import CopyToClipboard from "react-copy-to-clipboard";
import React from "react";
import { motion } from "framer-motion"; // ✅ 추가

const { Panel } = Collapse;

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 36,
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

const Description = styled("p", {
  fontSize: "1.3vh",
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
  marginBottom: 12,
  paddingLeft: 12,
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
              {"비대면으로 축하를 전하고자\n하시는 분들을 위해\n계좌번호를 기재하였습니다.\n너그러운 마음으로 양해 부탁드립니다.\n"
          .split("\n")
          .map((line, idx) => (
            <span key={idx} style={{
              fontSize: "1.5vh",
              display: "block",
              lineHeight: 1.7,
              marginBottom: "16px",  // ✅ 여기! 아랫 간격
            }}>
              {line}
              <br />
            </span>
          ))}
        <CustomCollapse accordion bordered={false}>
          <Panel header={<BlueHeader>신랑측</BlueHeader>} key="groom">
            {data?.groom && (
              <VerticalInfo>
                <p style={{ color: "#3f51b5", marginBottom: 2 }}><b>신랑</b></p>
                <CopyToClipboard
                  text={data.groom.account_number}
                  onCopy={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  <Button type="text" style={{ padding: 0, color: "black" }}>
                    {data.groom.account_number}
                  </Button>
                </CopyToClipboard>
                <p style={{ color: "black", marginBottom: 0 }}>{data.groom.name}</p>
              </VerticalInfo>
            )}
            {data?.groom?.parents?.father && (
              <VerticalInfo>
                <p style={{ color: "#3f51b5", marginBottom: 2 }}><b>신랑 아버지</b></p>
                <CopyToClipboard
                  text={data.groom.parents.father.account_number}
                  onCopy={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  <Button type="text" style={{ padding: 0, color: "black" }}>
                    {data.groom.parents.father.account_number}
                  </Button>
                </CopyToClipboard>
                <p style={{ color: "black", marginBottom: 0 }}>{data.groom.parents.father.name}</p>
              </VerticalInfo>
            )}
            {data?.groom?.parents?.mother && (
              <VerticalInfo>
                <p style={{ color: "#3f51b5", marginBottom: 2 }}><b>신랑 어머니</b></p>
                <CopyToClipboard
                  text={data.groom.parents.mother.account_number}
                  onCopy={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  <Button type="text" style={{ padding: 0, color: "black" }}>
                    {data.groom.parents.mother.account_number}
                  </Button>
                </CopyToClipboard>
                <p style={{ color: "black", marginBottom: 0 }}>{data.groom.parents.mother.name}</p>
              </VerticalInfo>
            )}
            <Description>계좌번호 클릭 시 클립보드에 복사됩니다.</Description>
          </Panel>

          <Panel header={<PinkHeader>신부측</PinkHeader>} key="bride">
            {data?.bride && (
              <VerticalInfo>
                <p style={{ color: "#e91e63", marginBottom: 2 }}><b>신부</b></p>
                <CopyToClipboard
                  text={data.bride.account_number}
                  onCopy={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  <Button type="text" style={{ padding: 0, color: "black" }}>
                    {data.bride.account_number}
                  </Button>
                </CopyToClipboard>
                <p style={{ color: "black", marginBottom: 0 }}>{data.bride.name}</p>
              </VerticalInfo>
            )}
            {data?.bride?.parents?.father && (
              <VerticalInfo>
                <p style={{ color: "#e91e63", marginBottom: 2 }}><b>신부 아버지</b></p>
                <CopyToClipboard
                  text={data.bride.parents.father.account_number}
                  onCopy={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  <Button type="text" style={{ padding: 0, color: "black" }}>
                    {data.bride.parents.father.account_number}
                  </Button>
                </CopyToClipboard>
                <p style={{ color: "black", marginBottom: 0 }}>{data.bride.parents.father.name}</p>
              </VerticalInfo>
            )}
            {data?.bride?.parents?.mother && (
              <VerticalInfo>
                <p style={{ color: "#e91e63", marginBottom: 2 }}><b>신부 어머니</b></p>
                <CopyToClipboard
                  text={data.bride.parents.mother.account_number}
                  onCopy={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  <Button type="text" style={{ padding: 0, color: "black" }}>
                    {data.bride.parents.mother.account_number}
                  </Button>
                </CopyToClipboard>
                <p style={{ color: "black", marginBottom: 0 }}>{data.bride.parents.mother.name}</p>
              </VerticalInfo>
            )}
            <Description>계좌번호 클릭 시 클립보드에 복사됩니다.</Description>
          </Panel>
        </CustomCollapse>
        {"\n예식장 규정에 따라 화환 반입이 불가합니다.\n마음만 감사히 받겠습니다."
          .split("\n")
          .map((line, idx) => (
            <span key={idx} style={{
              fontSize: "1.5vh",
              display: "block",
              lineHeight: 1.7,
              marginBottom: "16px",  // ✅ 여기! 아랫 간격
            }}>
              {line}
              <br />
            </span>
          ))}
      </motion.div>
    </Wrapper>
  );
}

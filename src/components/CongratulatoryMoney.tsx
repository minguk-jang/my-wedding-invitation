import { Collapse, Divider, Button, message, Space } from "antd";
import { styled } from "@stitches/react";
import CopyToClipboard from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

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
  width: "100%",
});

const ButtonGroup = styled("div", {
  display: "flex",
  gap: "8px",
  marginTop: "4px",
  width: "100%",
  position: "relative",
  paddingLeft: "0",
});

const AccountButtonWrapper = styled("div", {
  flex: "0 1 auto",
  marginLeft: "0",
});

const AccountButton = styled(Button, {
  padding: "4px 0",
  color: "black",
  minWidth: "unset",
  textAlign: "left",
  justifyContent: "flex-start",
  border: "none",
  boxShadow: "none",
  "&:hover, &:focus": {
    background: "transparent",
  },
});

const HorizontalLine = styled("div", {
  width: "90%",
  height: "1px",
  backgroundColor: "#cfc6bd",
  margin: "12px auto",
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

  const renderAccountInfo = (
    name: string,
    accountNumber: string,
    label: string,
    color: string
  ) => (
    <>
      <HorizontalLine />
      <VerticalInfo>
        <p style={{ color: color, marginBottom: 2 }}><b>{label}</b></p>
        <ButtonGroup>
          <AccountButtonWrapper>
            <CopyToClipboard
              text={accountNumber}
              onCopy={() => message.success("계좌번호가 복사되었습니다.")}
            >
              <AccountButton type="text">
                {accountNumber}
              </AccountButton>
            </CopyToClipboard>
          </AccountButtonWrapper>
        </ButtonGroup>
        <p style={{ color: "black", marginBottom: 0 }}>{name}</p>
      </VerticalInfo>
    </>
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
            <HorizontalLine />
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
            <HorizontalLine />
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

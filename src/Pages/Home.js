import React from "react";
import styled from "styled-components";
import PangImage from "../assets/logoImage.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImageSection>
          <LogoImage src={PangImage} roundedCircle alt="logo" />
        </LogoImageSection>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Desc>
        <Button>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`;

const LogoImageSection = styled.section`
  margin-top: 10px;
`;

const LogoImage = styled(Image)`
  width: 350px;
  height: 350px;
`;

const Desc = styled.section`
  font-size: 20pt;
  margin-top: 20px;
`;

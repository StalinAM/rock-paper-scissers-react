import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Container = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid ${(props) => props.theme.HeaderOutline};
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 0 auto;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Title = styled.img`
  @media screen and (max-width: 600px) {
    width: 7rem;
  }
`;
const ScoreC = styled.div`
  background-color: ${(props) => props.theme.White};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3.5rem;
  @media screen and (max-width: 600px) {
    padding: 0.5rem 1.5rem;
  }
`;
const Tag = styled.h2`
  color: ${(props) => props.theme.ScoreText};
  font-size: 1.1rem;
  letter-spacing: 2px;
`;
const Score = styled.h1`
  color: ${(props) => props.theme.DarkText};
  font-size: 4.5rem;
  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;
function Header({ score }) {
  return (
    <Container>
      <Title src={Logo} alt="" />
      <ScoreC>
        <Tag>SCORE</Tag>
        <Score>{score}</Score>
      </ScoreC>
    </Container>
  );
}

export default Header;

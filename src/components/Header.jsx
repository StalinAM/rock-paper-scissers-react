import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Container = styled.header`
  max-width: 44rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid ${(props) => props.theme.HeaderOutline};
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 0 auto;
`;
const Title = styled.img``;
const ScoreC = styled.div`
  background-color: ${(props) => props.theme.White};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 3.5rem;
`;
const Tag = styled.h2`
  color: ${(props) => props.theme.ScoreText};
  font-size: 1.1rem;
  letter-spacing: 2px;
`;
const Score = styled.h1`
  color: ${(props) => props.theme.DarkText};
  font-size: 4.5rem;
`;
function Header() {
  return (
    <Container>
      <Title src={Logo} alt="" />
      <ScoreC>
        <Tag>SCORE</Tag>
        <Score>12</Score>
      </ScoreC>
    </Container>
  );
}

export default Header;
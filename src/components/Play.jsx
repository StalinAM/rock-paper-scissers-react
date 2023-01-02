import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import styled from "styled-components";
import { themeRock, themePaper, themeScissors } from "../style/ColorItems";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8rem auto 0;
`;
const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const Title = styled.h5`
  color: ${(props) => props.theme.White};
  font-size: 1.3rem;
  letter-spacing: 3px;
`;
const Again = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Lose = styled.h4`
  font-size: 3rem;
  color: ${(props) => props.theme.White};
`;
const LinkBtn = styled(Link)`
  background-color: ${(props) => props.theme.White};
  color: ${(props) => props.theme.DarkText};
  padding: 1rem 3.5rem;
  border-radius: 0.5rem;
  letter-spacing: 2px;
  &:hover {
    color: hsl(349, 71%, 52%);
  }
`;
function Play({ selection }) {
  return (
    <Container>
      <Cart>
        <Title>YOU PICKED</Title>
        <Item theme={selection} />
      </Cart>
      <Again>
        <Lose>YOU WIN</Lose>
        <LinkBtn to="/">PLAY AGAIN</LinkBtn>
      </Again>
      <Cart>
        <Title>THE HOUSE PICKED</Title>
        <Item theme={themePaper} />
      </Cart>
    </Container>
  );
}

export default Play;

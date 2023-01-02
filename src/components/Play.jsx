import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import styled from "styled-components";
import {
  themeRock,
  themePaper,
  themeScissors,
  Items,
} from "../style/ColorItems";
const Container = styled.div`
  max-width: 50rem;
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
function Play({ selection, score, setScore }) {
  const [house, setHouse] = useState({});
  const [result, setResult] = useState("");
  const houseSelection = () => {
    const random = Math.floor(Math.random() * 3) + 1;
    const themeFilter = Items.filter((item) => {
      return item.id == random;
    });
    setHouse(themeFilter[0]);
  };
  useEffect(() => {
    houseSelection();
  }, []);

  const possibleResults = () => {
    if (selection.id == house.id) {
      setResult("DRAW");
    }
    if (selection.id == 1 && house.id == 2) {
      setScore(score - 1);
      setHouse("YOU LOSE");
    }
    if (selection.id == 1 && house.id == 3) {
      setScore(score + 1);
      setHouse("YOU WIN");
    }
    if (selection.id == 2 && house.id == 1) {
      setScore(score + 1);
      setHouse("YOU WIN");
    }
    if (selection.id == 2 && house.id == 3) {
      setScore(score - 1);
      setHouse("YOU LOSE");
    }
    if (selection.id == 3 && house.id == 1) {
      setScore(score - 1);
      setHouse("YOU LOSE");
    }
    if (selection.id == 3 && house.id == 2) {
      setScore(score + 1);
      setHouse("YOU WIN");
    }
  };
  return (
    <Container>
      <Cart>
        <Title>YOU PICKED</Title>
        <Item theme={selection} />
      </Cart>
      <Again>
        <Lose>{result}</Lose>
        <LinkBtn to="/">PLAY AGAIN</LinkBtn>
      </Again>
      <Cart>
        <Title>THE HOUSE PICKED</Title>
        <Item theme={house} />
      </Cart>
    </Container>
  );
}

export default Play;

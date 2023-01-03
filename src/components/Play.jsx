import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import styled from "styled-components";
import { Items } from "../style/ColorItems";
const Container = styled.div`
  max-width: 50rem;
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-columns: ${(props) =>
    props.counter != 0 ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
  gap: 5rem;
  @media screen and (max-width: 750px) {
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  transform: scale(1.3);
  @media screen and (max-width: 830px) {
    transform: scale(1);
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
const Title = styled.h5`
  color: ${(props) => props.theme.White};
  font-size: 1.3rem;
  letter-spacing: 3px;
  text-align: center;
`;
const Again = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  @media screen and (max-width: 750px) {
    grid-row-start: 2;
    grid-column: 1/3;
  }
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
const BoxWin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: ${(props) => props.theme.White};
  width: 11rem;
  height: 11rem;
  background-color: ${(props) => props.theme.DarkText};
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.win
      ? "inset 0 5px 6px grey, 0 8px hsl(229deg 25% 31%), 0 0 0 50px hsl(0deg 0% 100% / 7%), 0 0 0 100px hsl(0deg 0% 100% / 5%), 0 0 0 150px hsl(0deg 0% 100% / 3%);"
      : ""};
  @media screen and (max-width: 600px) {
    width: 8rem;
    height: 8rem;
    font-size: 6rem;
  }
`;
function Play({ selection, score, setScore }) {
  const [house, setHouse] = useState({});
  const [result, setResult] = useState("");
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [counter, setCounter] = useState(3);

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
      setLeft(false);
      setRight(false);
    } else if (
      (selection.id == 1 && house.id == 2) ||
      (selection.id == 2 && house.id == 3) ||
      (selection.id == 3 && house.id == 1)
    ) {
      setScore(score - 1);
      setResult("YOU LOSE");
      setLeft(false);
      setRight(true);
    } else if (
      (selection.id == 1 && house.id == 3) ||
      (selection.id == 2 && house.id == 1) ||
      (selection.id == 3 && house.id == 2)
    ) {
      setScore(score + 1);
      setResult("YOU WIN");
      setRight(false);
      setLeft(true);
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : possibleResults();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);
  return (
    <Container counter={counter}>
      <Cart>
        <Title>YOU PICKED</Title>
        <BoxWin win={left}>
          <Item theme={selection} />
        </BoxWin>
      </Cart>
      {counter == 0 && (
        <Again>
          <Lose>{result}</Lose>
          <LinkBtn to="/rock-paper-scissers-react/">PLAY AGAIN</LinkBtn>
        </Again>
      )}
      <Cart>
        <Title>THE HOUSE PICKED</Title>
        <BoxWin win={right}>
          {counter == 0 ? <Item theme={house} /> : counter}
        </BoxWin>
      </Cart>
    </Container>
  );
}

export default Play;

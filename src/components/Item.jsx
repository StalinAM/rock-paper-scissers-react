import React from "react";
import styled from "styled-components";
const BorderD = styled.div`
  background: ${(props) => props.colorM};
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 0px 1px ${(props) => props.color};
  @media screen and (max-width: 600px) {
    transform: scale(0.7);
  }
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.White};
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 0px 2px #b4c1d4 inset;
`;
function Item({ theme }) {
  return (
    <BorderD color={theme.colorBG} colorM={theme.color}>
      <Container>
        <img src={theme.img} alt="" />
      </Container>
    </BorderD>
  );
}

export default Item;

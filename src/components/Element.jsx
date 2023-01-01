import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Gradient = styled(Link)`
  position: absolute;
  background: ${(props) => props.colorM};
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 0px 1px ${(props) => props.color};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
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

function Element({ img, colorBG, colorMain, top, bottom, left, right }) {
  return (
    <Gradient
      to="/play"
      color={colorBG}
      colorM={colorMain}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <Container>
        <img src={img} alt="" />
      </Container>
    </Gradient>
  );
}

export default Element;

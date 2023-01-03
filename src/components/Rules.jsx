import React from "react";
import styled from "styled-components";
import close from "../assets/icon-close.svg";
import rules from "../assets/image-rules.svg";
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.White};
  border-radius: 1rem;
  padding: 2rem;
  visibility: ${(props) => (props.show ? "" : "hidden")};
  z-index: 10;
  @media screen and (max-width: 415px) {
    padding: 1rem;
  }
`;
const TitleC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const Title = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.DarkText};
`;
const IconClose = styled.img`
  cursor: pointer;
`;
function Rules({ show, setShow }) {
  return (
    <Container show={show}>
      <TitleC>
        <Title>RULES</Title>
        <IconClose onClick={() => setShow(false)} src={close} alt="" />
      </TitleC>
      <img src={rules} alt="" />
    </Container>
  );
}

export default Rules;

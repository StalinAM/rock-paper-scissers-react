import React from "react";
import styled from "styled-components";
import rock from "../assets/icon-rock.svg";
const Container = styled.div`
  background-color: ${(props) => props.theme.White};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  padding: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5rem solid ${(props) => props.theme.RockGradient};
`;
function Element() {
  return (
    <Container>
      <img src={rock} alt="" />
    </Container>
  );
}

export default Element;

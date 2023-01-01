import React from "react";

import styled from "styled-components";
import TriangleBG from "../assets/bg-triangle.svg";
import Element from "./Element";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissor from "../assets/icon-scissors.svg";

const Container = styled.main`
  width: 29rem;
  height: 24rem;
  position: relative;
  margin: 10rem auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url(${TriangleBG});
  background-position: center;
  background-repeat: no-repeat;
`;
function Main() {
  return (
    <Container>
      <Element
        img={paper}
        colorBG={"#2945c3"}
        colorMain={() => (props) => props.theme.PaperGradient}
        top={"0"}
        left={"0"}
      />

      <Element
        img={scissor}
        colorBG={"#c76c1b"}
        colorMain={() => (props) => props.theme.ScissorsGradient}
        top={"0"}
        right={"0"}
      />
      <Element
        img={rock}
        colorBG={"#991934"}
        colorMain={() => (props) => props.theme.RockGradient}
        left={"calc(50% - 5.5rem)"}
        bottom={"0"}
      />
    </Container>
  );
}

export default Main;

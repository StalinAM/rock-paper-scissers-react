import React from "react";

import styled from "styled-components";
import TriangleBG from "../assets/bg-triangle.svg";
import Element from "./Element";
import { themeRock, themePaper, themeScissors } from "../style/ColorItems";
const Container = styled.main`
  width: 29rem;
  height: 24rem;
  position: relative;
  margin: 8rem auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url(${TriangleBG});
  background-position: center;
  background-repeat: no-repeat;
`;
function Main() {
  return (
    <Container>
      <Element theme={themePaper} top={"0"} left={"0"} />
      <Element theme={themeScissors} top={"0"} right={"0"} />
      <Element theme={themeRock} left={"calc(50% - 5.5rem)"} bottom={"0"} />
    </Container>
  );
}

export default Main;

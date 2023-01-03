import styled from "styled-components";
import TriangleBG from "../assets/bg-triangle.svg";
import Element from "./Element";
import { themeRock, themePaper, themeScissors } from "../style/ColorItems";
const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url(${TriangleBG});
  background-position: center;
  background-repeat: no-repeat;
  justify-items: center;
  align-items: center;
  transform: scale(1.3);
  @media screen and (max-width: 768px) {
    transform: scale(1.1);
  }
  @media screen and (max-width: 600px) {
    transform: scale(0.9);
  }
`;
function Main({ setSelection }) {
  return (
    <Container>
      <Element theme={themePaper} setSelection={setSelection} />
      <Element theme={themeScissors} setSelection={setSelection} />
      <Element theme={themeRock} right={"7rem"} setSelection={setSelection} />
    </Container>
  );
}

export default Main;

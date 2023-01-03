import styled from "styled-components";
import TriangleBG from "../assets/bg-triangle.svg";
import Element from "./Element";
import { Items } from "../style/ColorItems";
const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url(${TriangleBG});
  background-position: center;
  background-repeat: no-repeat;
  justify-items: center;
  align-items: center;
  transform: scale(1.1);
  column-gap: 5rem;
  row-gap: 3rem;
  @media screen and (max-width: 768px) {
    transform: scale(1.1);
  }
  @media screen and (max-width: 600px) {
    transform: scale(0.9);
    row-gap: 0.2rem;
    column-gap: 0.8rem;
  }
  @media screen and (max-width: 360px) {
    transform: scale(0.6);
  }
`;
function Main({ setSelection }) {
  return (
    <Container>
      {Items.map((item) => (
        <Element key={item.id} theme={item} setSelection={setSelection} />
      ))}
    </Container>
  );
}

export default Main;

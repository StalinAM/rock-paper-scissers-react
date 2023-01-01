import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TriangleBG from "../assets/bg-triangle.svg";
import Element from "./Element";
const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: url(${TriangleBG});
  background-position: center;
  background-repeat: no-repeat;
`;
function Main() {
  return (
    <Container>
      <Link to="/play">
        <Element />
      </Link>
      <Link to="/play"></Link>
      <Link to="/play"></Link>
    </Container>
  );
}

export default Main;

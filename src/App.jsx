import GlobalStyles from "./style/GlobalStyles";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { ColorTheme } from "./style/Theme";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Play from "./components/Play";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import { useState } from "react";

const Container = styled.div`
  padding: 2rem 8rem;
  min-height: 100vh;
  background: ${(props) => props.theme.RadialGradient};
  filter: ${(props) => (props.show ? "brightness(40%)" : "")};
  pointer-events: ${(props) => (props.show ? "none" : "")};
  @media screen and (max-width: 830px) {
    padding: 2rem 4rem;
  }
`;
const BtnRules = styled.button`
  font-size: 1rem;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  background: none;
  padding: 0.6rem 1.7rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.White};
  border: 1px solid ${(props) => props.theme.White};
  letter-spacing: 8px;
  &:hover {
    background-color: ${(props) => props.theme.DarkText};
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;
function App() {
  const [show, setShow] = useState(false);
  const [selection, setSelection] = useState();
  const [score, setScore] = useState(0);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ColorTheme}>
        <Container show={show}>
          <Header score={score} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Main setSelection={setSelection} />}
            />
            <Route
              exact
              path="/play"
              element={
                <Play selection={selection} score={score} setScore={setScore} />
              }
            />
          </Routes>
          <Footer />
          <BtnRules onClick={() => setShow(true)}>RULES</BtnRules>
        </Container>
        <Rules show={show} setShow={setShow} />
      </ThemeProvider>
    </>
  );
}

export default App;

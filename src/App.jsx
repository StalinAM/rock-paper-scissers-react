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

const Container = styled.div`
  padding: 2rem 8rem;
  min-height: 100vh;
  background: ${(props) => props.theme.RadialGradient};
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ColorTheme}>
        <Container>
          <Header />
          {/* <Routes>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
        </Routes> */}
          <Rules />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

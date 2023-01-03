import React from "react";
import styled from "styled-components";
const Container = styled.footer`
  text-align: center;
`;
const Atribution = styled.p`
  letter-spacing: 2px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.HeaderOutline};
`;
const Links = styled.a`
  color: ${(props) => props.theme.White};
  &:hover {
    color: ${(props) => props.theme.ScoreText};
  }
`;
function Footer() {
  return (
    <Container>
      <Atribution>
        Challenge by{" "}
        <Links
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Links>
        . Coded by{" "}
        <Links
          href="https://github.com/StalinAM/rock-paper-scissers-react.git"
          target="_blank"
        >
          StalinAM
        </Links>
        .
      </Atribution>
    </Container>
  );
}

export default Footer;

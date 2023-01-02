import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";

const LinkTo = styled(Link)`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

function Element({ theme, top, bottom, left, right }) {
  return (
    <LinkTo to="/play" top={top} bottom={bottom} left={left} right={right}>
      <Item theme={theme} />
    </LinkTo>
  );
}

export default Element;

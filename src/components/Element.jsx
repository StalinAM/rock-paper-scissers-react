import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";

const LinkTo = styled(Link)`
  transform: translateX(${(props) => props.right}rem);
  border-radius: 50%;
  @media screen and (max-width: 600px) {
    transform: translateX(${(props) => (props.right == 8 ? "6rem" : "")});
  }
`;
const Box = styled.div`
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
  @media screen and (max-width: 600px) {
    transform: scale(1.3);
    &:hover {
      transform: scale(1.5);
    }
  }
`;
function Element({ theme, setSelection }) {
  const setItem = () => {
    setSelection(theme);
  };
  return (
    <LinkTo to="/play" right={theme.right} onClick={setItem}>
      <Box>
        <Item theme={theme} />
      </Box>
    </LinkTo>
  );
}

export default Element;

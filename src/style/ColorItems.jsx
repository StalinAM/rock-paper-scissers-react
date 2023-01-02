import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";

const themeRock = {
  img: rock,
  color: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
  colorBG: "#991934",
};
const themePaper = {
  img: paper,
  color: "radial-gradient( hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
  colorBG: "#2945c3",
};
const themeScissors = {
  img: scissors,
  color: "radial-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))",
  colorBG: "#c76c1b",
};
export { themeRock, themePaper, themeScissors };

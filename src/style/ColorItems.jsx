import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";

const Items = [
  {
    id: 2,
    img: paper,
    color: "radial-gradient( hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    colorBG: "#2945c3",
    right: 0,
  },
  {
    id: 3,
    img: scissors,
    color: "radial-gradient(hsl(39, 89%, 49%) , hsl(40, 84%, 53%))",
    colorBG: "#c76c1b",
    right: 0,
  },
  {
    id: 1,
    img: rock,
    color: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    colorBG: "#991934",
    right: 8,
  },
];
export { Items };

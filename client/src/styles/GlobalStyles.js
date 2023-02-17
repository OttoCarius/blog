import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  /* background-color: hsla(0, 100%, 50%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(11, 10%, 86%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 11%, 78%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%); */

  background: -webkit-linear-gradient(90deg, #000000, #000000, #33beff);
  background: linear-gradient(90deg, #000000, #000000, #33beff);
}

`;

export default GlobalStyles;

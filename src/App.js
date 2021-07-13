import styled, { createGlobalStyle } from "styled-components";
import Clock from "./layout/Clock";
import Content from "./layout/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContainer>
        <GlobalStyle />
        <Clock />
        <Content />
      </MainContainer>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`

html {

--color-main: hsla(180, 2%, 19%, 1);
--shadow-main: hsla(180, 2%, 13%, 1);
--shadow-main-border-dark: hsla(180, 2%, 10%, 1);
--shadow-main-border-light: hsla(180, 2%, 15%, 1);
--highlight-main: hsla(180, 2%, 23%, 1);
--highlight-main-border-dark: hsla(180, 2%, 19%, 1);
--highlight-main-border-light: hsla(180, 2%, 25%, 1);

--color-secondary: hsla(41, 94%, 59%, 1);
--shadow-secondary: hsla(41, 94%, 42%, 1);
--color-alternative: hsla(201, 34%, 39%, 1);

--color-text: hsla(38, 58%, 94%, 1);
--inset-shadow: inset 2px 2px 4px hsla(180, 2%, 6%, 1);

--font-family-main: 'Gruppo', cursive;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

const MainContainer = styled.div`
  /* border: 3px solid red; */
  height: 100vh;
  background-color: var(--color-main);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default App;

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
--highlight-main: hsla(180, 2%, 28%, 1);
--highlight-main-border-dark: hsla(180, 2%, 24%, 1);
--highlight-main-border-light: hsla(180, 2%, 29%, 1);

--color-secondary: hsla(41, 94%, 59%, 1);
--shadow-secondary: hsla(41, 94%, 42%, 1);

--color-alternative: hsla(220, 90%, 49%, 0.35);
--highlight-alternative: hsla(220, 90%, 56%, 0.55);
--highlight-alternative-border-light: hsla(220, 90%, 59%, 0.5);
--highlight-alternative-border-dark: hsla(220, 90%, 39%, 0.5);

--color-todo-done: hsla(0, 0%, 99%, 0.20);
--highlight-todo-done: hsla(0, 0%, 56%, 0.55);
--highlight-todo-done-border-light: hsla(0, 0%, 59%, 0.5);
--highlight-todo-done-border-dark: hsla(0, 0%, 39%, 0.5);

--color-todo-delete: hsla(0, 90%, 49%, 0.45);
--highlight-todo-delete: hsla(0, 90%, 56%, 0.55);
--highlight-todo-delete-border-light: hsla(0, 90%, 59%, 0.5);
--highlight-todo-delete-border-dark: hsla(0, 90%, 39%, 0.5);


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

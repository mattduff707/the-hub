import styled, { createGlobalStyle } from "styled-components";
import Content from "./layout/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainContainer>
        <Content style={{ gridArea: "content" }} />
      </MainContainer>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`

html {

  --font-family-main: 'Orbitron', sans-serif;
  --color-text: hsla(38, 58%, 94%, 1);

--screen-border: 4px solid hsl(220, 90%, 64%);
--screen-border-thin: 2px solid hsl(220, 90%, 64%);
--screen-color: hsl(220, 50%, 44%);
--screen-color-bright: hsl(220, 80%, 54%);

--highlight: hsl(25, 100%, 60%);
--highlight-border: 4px solid var(--highlight);
--highlight-border-thin: 2px solid var(--highlight);
--highlight-bg: hsl(25, 50%, 40%);
--highlight-shadow: inset 0px 0px 16px var(--highlight);
--highlight-transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;

--danger: hsl(340, 90%, 55%);
--danger-bg: hsl(340, 50%, 50%);
--danger-shadow: inset 0px 0px 16px var(--danger);
--danger-border: 4px solid var(--danger);
--danger-border-thin: 2px solid var(--danger);

--confirm: hsl(110, 100%, 55%);
--confirm-border: 4px solid var(--confirm);
--confirm-border-thin: 2px solid var(--confirm);


/* 
--color-main: hsla(180, 2%, 19%, 1);
--shadow-main: hsla(180, 2%, 13%, 1);
--shadow-main-border-dark: hsla(180, 2%, 10%, 1);
--shadow-main-border-light: hsla(180, 2%, 15%, 1);
--highlight-main: hsla(180, 2%, 31%, 1);
--highlight-main-border-dark: hsla(180, 2%, 27%, 1);
--highlight-main-border-light: hsla(180, 2%, 34%, 1);

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

 --color-screen: hsla(220, 50%, 46%);
 --highlight-screen: hsla(220, 90%, 71%, 0.55);
--highlight-screen-shadow: 0px 0px 10px 4px hsla(220, 90%, 59%, 0.5);



--shadow-text: 0px 0px 4px hsl(38, 58%, 94%);
--shadow-icon: 0px 0px 3px hsl(38, 58%, 94%);
--color-text-highlight: hsla(20, 88%, 60%, 1);
--shadow-text-highlight: 0px 0px 4px hsl(20, 88%, 60%);
--inset-shadow: inset 2px 2px 4px hsla(180, 2%, 6%, 1);

--hover-main: hsla(30, 100%, 60%);
--hover-main-bg: hsla(30, 100%, 50%) ;
--hover-main-shadow: 0px 0px 10px 0px hsl(30, 88%, 60%);
--hover-main-text: hsl(35, 100%, 55%);
--hover-main-text-shadow: 0px 0px 5px hsl(35, 100%, 65%);
--hover-main-text-shadow-offset: 3px 3px 5px hsl(35, 100%, 55%);
--hover-main-icon: hsl(35, 100%, 55%);
--hover-main-icon-shadow: 0px 0px 4px hsl(35, 100%, 25%);


--hover-danger: hsl(350, 95%, 60%);
--hover-danger-border-color: hsl(340, 95%, 60%);
--hover-danger-shadow: 0px 0px 10px 2px hsl(340, 95%, 65%);
--hover-danger-icon-shadow: 0px 0px 2px hsl(340, 95%, 45%);
--hover-danger-text-shadow: 0px 0px 8px hsla(340, 95%, 65%, 0.85);


--hover-confirm: hsl(120, 95%, 65%);
--hover-confirm-border-color: hsl(120, 95%, 45%);

--hover-confirm-shadow: 0px 0px 4px hsl(120, 95%, 65%);
--hover-confirm-text-shadow: 0px 0px 8px hsl(120, 95%, 65%);
--hover-confirm-icon-shadow: 0px 0px 4px hsl(120, 95%, 65%);
--hover-confirm-border: 2px solid hsl(120, 95%, 75%);

  */


}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    

  }
  body {
    font-family: var(--font-family-main);
    /* height: 100%; */
    /* border: 2px solid red; */
  }
  html {
  /* max-height: 100%; */
  /* border: 2px solid red; */
}

`;

const MainContainer = styled.div`
  /* isolation: isolate; */
  /* border: 3px solid red; */
  height: 100vh;
  background-color: var(--color-main);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "content";
  /* overflow: hidden; */
`;

export default App;

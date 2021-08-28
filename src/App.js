import styled, { createGlobalStyle } from 'styled-components';
import Header from './layout/Header';
import Content from './layout/Content';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <MainContainer>
        <Header style={{ gridArea: 'header' }} />
        <Content style={{ gridArea: 'content' }} />
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

--color-screen: hsla(220, 90%, 66%, 0.55);
--highlight-screen: hsla(220, 90%, 71%, 0.55);


--color-text: hsla(38, 58%, 94%, 1);
--shadow-text: 0px 0px 4px hsl(38, 58%, 94%);
--shadow-icon: 0px 0px 3px hsl(38, 58%, 94%);
--color-text-highlight: hsla(20, 88%, 60%, 1);
--shadow-text-highlight: 0px 0px 4px hsl(20, 88%, 60%);
--inset-shadow: inset 2px 2px 4px hsla(180, 2%, 6%, 1);

--hover-main: hsla(30, 88%, 60%);
--hover-main-bg: hsla(30, 100%, 50%) ;
--hover-main-shadow: 0px 0px 4px 2px hsl(30, 88%, 60%);
--hover-main-text: hsl(35, 100%, 55%);
--hover-main-text-shadow: 0px 0px 5px hsl(35, 100%, 55%);
--hover-main-text-shadow-offset: 3px 3px 5px hsl(35, 100%, 55%);
--hover-main-icon: hsl(35, 100%, 55%);
--hover-main-icon-shadow: 0px 0px 3px hsl(35, 100%, 55%);
--hover-main-icon-shadow-offset: 3px 3px 0px hsla(35, 100%, 55%, 0.65);

--hover-danger: hsl(340, 95%, 65%);
--hover-danger-icon-shadow-offset: 3px 3px 0px hsla(340, 95%, 65%, 0.85);

--hover-confirm: hsl(120, 95%, 65%);
--hover-confirm-icon-shadow-offset: 3px 3px 0px hsla(120, 95%, 65%, 0.45);

--font-family-main: 'Orbitron', sans-serif;


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
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'header'
    'content';
  /* overflow: hidden; */
`;

export default App;

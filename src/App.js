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
--color-text: hsl(38, 58%, 94% );
--color-text-placeholder: hsla(38, 58%, 94%, 0.7 );

--screen-border: 4px solid hsl(220, 90%, 64%);
--screen-border-thin: 2px solid hsl(220, 90%, 64%);
--screen-color: hsl(220, 55%, 44%);
--screen-color-bright: hsl(220, 80%, 54%);

--highlight: hsl(25, 100%, 60%);
--highlight-border: 4px solid var(--highlight);
--highlight-border-thin: 2px solid var(--highlight);
--highlight-bg: hsl(25, 50%, 40%);
--highlight-shadow: inset 0px 0px 16px var(--highlight);
--highlight-transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;

--danger: hsl(340, 80%, 55%);
--danger-bg: hsl(340, 50%, 50%);
--danger-shadow: inset 0px 0px 16px var(--danger);
--danger-border: 4px solid var(--danger);
--danger-border-thin: 2px solid var(--danger);

--confirm: hsl(110, 100%, 55%);
--confirm-border: 4px solid var(--confirm);
--confirm-border-thin: 2px solid var(--confirm);



}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


  }
  body {
    font-family: var(--font-family-main);

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

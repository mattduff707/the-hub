import React from "react";
import styled from "styled-components";
import LeftScreen from "./LeftScreen";
import MainScreen from "./MainScreen";
import RightScreen from "./RightScreen";

const Content = () => {
  return (
    <Wrapper>
      <BorderWrapper>
        <ScreenWrapper>
          <LeftScreen style={{ gridArea: "left" }} />
          <MainScreen style={{ gridArea: "middle" }} />
          <RightScreen style={{ gridArea: "right" }} />
        </ScreenWrapper>
      </BorderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  --border-dark: hsl(180, 2%, 10%);
  --border-light: hsl(180, 2%, 15%);

  --screen-bg: ;
  --screen-shadow: ;

  /* border: 4px solid blue; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  background: var(--color-main);
  /* padding-top: 30px; */
  /* overflow: hidden; */
  /* overflow-y: auto; */
`;
const BorderWrapper = styled.div`
  border: 8px solid var(--border-dark);
  border-right: 8px solid var(--border-light);
  border-bottom: 8px solid var(--border-light);
  border-radius: 20px;
  width: 100%;
  height: 100%;

  background-color: var(--shadow-main);
  box-shadow: var(--inset-shadow);
`;
const ScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    var(--color-alternative),
    var(--highlight-alternative-border-light)
  );
  border-right: 2px solid var(--screen-border);
  border-left: 2px solid var(--screen-border);
  border-top: 2px solid var(--screen-border);
  border-bottom: 2px solid var(--screen-border);
  border-radius: 22px;
  box-shadow: 0px 0px 60px var(--color-alternative);
  display: grid;
  grid-template-areas: "left middle right";
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr;
`;

export default Content;

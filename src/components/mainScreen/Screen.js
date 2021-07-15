import React from "react";
import styled from "styled-components";
import CoolScreen from "../CoolScreen";
import ScreenIndent from "../ScreenIndent";

const Screen = () => {
  return (
    <Wrapper>
      <ScreenIndent>
        <CoolScreen></CoolScreen>
      </ScreenIndent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex: 5;
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
// const ScreenContainer = styled.div`
//   border: 12px solid var(--shadow-main-border-dark);
//   border-right: 8px solid var(--shadow-main-border-light);
//   border-bottom: 8px solid var(--shadow-main-border-light);
//   border-radius: 20px;
//   background-color: var(--shadow-main);
//   box-shadow: var(--inset-shadow);

//   width: 100%;
//   height: 100%;
// `;

export default Screen;

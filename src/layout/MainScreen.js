import React from "react";
import styled from "styled-components";
import Screen from "../components/mainScreen/Screen";
import NavScreen from "../components/mainScreen/nav/NavScreen";

const MainScreen = () => {
  return (
    <Wrapper>
      <NavScreen style={{ flex: "1" }} />
      <Screen style={{ flex: "5" }} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 4px solid green; */
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* grid-template-columns: 1fr;
  grid-template-rows: 5fr 1fr;
  grid-template-areas:
    'screen'
    'buttons'; */
  /* max-height: 100%; */
  overflow-y: hidden;
`;

export default MainScreen;

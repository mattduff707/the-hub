import React from "react";
import styled from "styled-components";
import LeftScreen from "./LeftScreen";
import MainScreen from "./MainScreen";
import RightScreen from "./RightScreen";

const Content = () => {
  return (
    <Wrapper>
      <LeftScreen />
      <MainScreen />
      <RightScreen />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* border: 4px solid blue; */
  height: 100%;
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-areas: "left middle right";
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr;
  /* padding-top: 30px; */
  /* overflow: hidden; */
  /* overflow-y: auto; */
`;

export default Content;

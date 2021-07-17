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

const Wrapper = styled.div`
  /* border: 4px solid blue; */
  height: 100%;
  display: flex;
`;

export default Content;

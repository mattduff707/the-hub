import React from "react";
import styled from "styled-components";
import Screen from "../components/mainScreen/Screen";
import Buttons from "../components/mainScreen/Buttons";

const MainScreen = () => {
  return (
    <Wrapper>
      <Screen />
      <Buttons />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 4px solid green; */
  flex: 3;
  display: flex;
  flex-direction: column;
`;

export default MainScreen;

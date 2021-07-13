import React from "react";
import styled from "styled-components";
import ToDo from "./ToDo";
import MainScreen from "./MainScreen";
import Bookmarks from "./Bookmarks";

const Content = () => {
  return (
    <Wrapper>
      <ToDo />
      <MainScreen />
      <Bookmarks />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid blue; */
  height: 100%;
  display: flex;
`;

export default Content;

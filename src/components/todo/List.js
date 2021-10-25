import React from "react";
import styled from "styled-components";

const List = ({ children }) => {
  console.log("render: List")
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0px 10px 160px;
  overflow: auto;
  border-top: 2px solid var(--highlight-screen);
`;

export default List;

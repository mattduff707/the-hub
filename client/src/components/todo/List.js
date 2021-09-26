import React from "react";
import styled from "styled-components";

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  width: calc(100% + 8px);
  transform: translate(-6px, -7px);
  height: calc(100% + 9px);
  /* border: 2px solid red; */
  list-style: none;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-alternative);
  border-right: 2px solid var(--highlight-alternative-border-light);
  border-left: 2px solid var(--highlight-alternative-border-light);
  border-top: 2px solid var(--highlight-alternative-border-light);
  border-bottom: 2px solid var(--highlight-alternative-border-light);
  border-radius: 22px;
  box-shadow: 0px 0px 60px var(--color-alternative);
`;

export default List;

import React from "react";
import styled from "styled-components";

const CoolScreen = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  width: calc(99%);
  /* transform: translate(-6px, -7px); */
  height: calc(99%);
  /* border: 2px solid red; */
  list-style: none;
  /* isolation: isolate; */
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
  opacity: 1;
`;

export default CoolScreen;

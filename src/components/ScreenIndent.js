import React from "react";
import styled from "styled-components";
import Projector from "./Projector";
import LongProjector from "./LongProjector";

const ScreenIndent = ({ children, long }) => {
  if (long) {
    return (
      <ScreenContainer>
        <LongProjector top />
        <LongProjector bottom />
        {children}
      </ScreenContainer>
    );
  }
  return (
    <ScreenContainer>
      <Projector
        left="-20px"
        top="-10px"
        rotation="45deg"
        shadow="3px 3px 3px var(--shadow-main)"
        borderTop="3px solid var(--highlight-main-border-light)"
        borderRight="5px solid var(--highlight-main-border-dark)"
        borderBottom="5px solid var(--highlight-main-border-dark)"
        borderLeft="3px solid var(--highlight-main-border-light)"
      />
      <Projector
        right="-20px"
        top="-10px"
        rotation="135deg"
        borderTop="5px solid var(--highlight-main-border-dark)"
        borderRight="5px solid var(--highlight-main-border-dark)"
        borderBottom="3px solid var(--highlight-main-border-light)"
        borderLeft="3px solid var(--highlight-main-border-light)"
        shadow="3px -3px 3px var(--shadow-main)"
      />
      <Projector
        right="-20px"
        bottom="-10px"
        rotation="-135deg"
        borderTop="5px solid var(--highlight-main-border-dark)"
        borderRight="5px solid var(--highlight-main-border-light)"
        borderBottom="3px solid var(--highlight-main-border-light)"
        borderLeft="3px solid var(--highlight-main-border-dark)"
        shadow="-3px 0px 3px var(--shadow-main)"
      />
      <Projector
        left="-25px"
        bottom="-10px"
        rotation="-45deg"
        borderTop="5px solid var(--highlight-main-border-light)"
        borderRight="5px solid var(--highlight-main-border-light)"
        borderBottom="3px solid var(--highlight-main-border-dark)"
        borderLeft="3px solid var(--highlight-main-border-dark)"
        shadow="-3px 3px 3px var(--shadow-main)"
      />
      {children}
    </ScreenContainer>
  );
};

const ScreenContainer = styled.div`
  border: 8px solid var(--shadow-main-border-dark);
  border-right: 8px solid var(--shadow-main-border-light);
  border-bottom: 8px solid var(--shadow-main-border-light);
  border-radius: 30px;
  background-color: var(--shadow-main);
  box-shadow: var(--inset-shadow);
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ScreenIndent;

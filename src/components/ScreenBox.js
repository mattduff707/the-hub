import React from "react";
import styled from "styled-components";

const ScreenBox = ({ className, tag, children }) => {
  return (
    <Wrapper className={className} as={tag}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-shadow: var(--shadow-text);
  color: var(--color-text);
  background-color: var(--screen-color);
  border: var(--screen-border-thin);
  border-radius: 8px;
  /* box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light); */
`;

export default ScreenBox;

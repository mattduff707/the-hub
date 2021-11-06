import React from "react";
import styled from "styled-components";

const Btn = ({ children, type, handleClick, className }) => {
  return (
    <StyledButton type={type} onClick={handleClick} className={className}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  color: var(--color-text);
  border: var(--screen-border-thin);
  background-color: transparent;
  border-radius: 8px;
  font-family: var(--font-family-main);
  letter-spacing: 2px;
  font-weight: 600;
  transition: var(--highlight-transition);
  &:hover {
    /* text-shadow: var(--hover-main-shadow); */
    border-color: var(--highlight);
    background-color: var(--highlight-bg);
    /* box-shadow: 0px 0px 10px 1px var(--hover-main); */
    box-shadow: var(--highlight-shadow);
    transition: var(--highlight-transition);
  }
`;

export default Btn;

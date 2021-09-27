import React from 'react';
import styled from 'styled-components';

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
  border: 2px solid var(--highlight-screen);

  background-color: var(--color-screen);

  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  font-family: var(--font-family-main);
  letter-spacing: 2px;
  font-weight: 600;
  transition: border-color, box-shadow, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  &:hover {
    /* text-shadow: var(--hover-main-shadow); */
    border-color: var(--hover-main);
    background-color: var(--hover-main-bg);
    box-shadow: 0px 0px 10px 1px var(--hover-main);

    transition: border-color, box-shadow, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
`;

export default Btn;

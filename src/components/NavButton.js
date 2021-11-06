import React from "react";
import styled from "styled-components";

const NavButton = ({ inactive, children, isActive, handleClick, path }) => {
  if (inactive) {
    return <InactiveLink path={path}>{children}</InactiveLink>;
  }
  return (
    <Wrapper onClick={handleClick} isActive={isActive} path={path}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  font-family: var(--font-family-main);
  font-size: 1rem;
  margin: 0px 10px;
  width: 140px;
  color: var(--color-text);
  padding: 4px 0px 24px;
  border: var(--screen-border);
  border-bottom: none;
  /* transform: translateY(2px); */
  border-radius: 12px 12px 0px 0px;
  /* box-shadow: var(--highlight-screen-shadow); */
  background: ${(props) =>
    props.isActive ? "var(--screen-color)" : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background, border, transform, box-shadow;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  cursor: pointer;
  transform: translateY(18px);

  ${(props) => {
    if (!props.isActive) {
      return `
        & > * {
    transition: border, transform;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transform: translateY(0px);
  }
        `;
    }
  }}

  ${(props) => {
    if (!props.isActive) {
      return `
      &:hover {
    background: var(--highlight-bg);
    border: var(--highlight-border);
    box-shadow: var(--highlight-shadow);
    /* color: var(--highlight-text); */
    border-bottom: none;
    transform: ${props.isActive ? "translateY(18px)" : "translateY(12px)"};
    transition: background, border, transform, box-shadow;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  
        & > * {
    transition: border, transform;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transform: translateY(4px);
    }
  }
      `;
    }
  }}
`;
const InactiveLink = styled(Wrapper)`
  /* text-shadow: var(--hover-danger-text-shadow);
  background: var(--hover-danger);
  border-color: var(--hover-danger-border-color); */
  /* box-shadow: var(--hover-danger-shadow); */
  cursor: not-allowed;
  padding: 5px 0px 20px;
  &:hover {
    text-shadow: var(--hover-danger-text-shadow);
    background: var(--hover-danger);
    border-color: var(--hover-danger-border-color);
    box-shadow: var(--hover-danger-shadow);
  }
`;

export default NavButton;

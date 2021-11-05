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
  font-family: var(--font-family-main);
  font-size: 1rem;
  margin: 0px 10px;
  width: 140px;
  color: var(--color-text);
  padding: 5px 0px;
  border: 2px solid var(--screen-border);
  border-bottom: none;
  border-radius: 8px 8px 0px 0px;
  /* box-shadow: var(--highlight-screen-shadow); */
  background: ${(props) =>
    props.isActive ? "var(--color-screen)" : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background, border, box-shadow;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  cursor: pointer;

  &:hover {
    background: var(--hover-main-bg);
    border: 2px solid var(--hover-main);
    border-bottom: none;
    box-shadow: var(--hover-main-shadow);
    transition: background, border, box-shadow;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
`;
const InactiveLink = styled(Wrapper)`
  /* text-shadow: var(--hover-danger-text-shadow);
  background: var(--hover-danger);
  border-color: var(--hover-danger-border-color); */
  /* box-shadow: var(--hover-danger-shadow); */
  cursor: not-allowed;
  padding: 5px;
  &:hover {
    text-shadow: var(--hover-danger-text-shadow);
    background: var(--hover-danger);
    border-color: var(--hover-danger-border-color);
    box-shadow: var(--hover-danger-shadow);
  }
`;

export default NavButton;

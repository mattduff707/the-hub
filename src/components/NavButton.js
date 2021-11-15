import React from "react";
import styled from "styled-components";

const NavButton = ({
  inactive,
  children,
  isActive,
  handleClick,
  path,
  className,
  style,
}) => {
  if (inactive) {
    return (
      <InactiveLink className={className} style={style} path={path}>
        {children}
      </InactiveLink>
    );
  }
  return (
    <Wrapper
      className={className}
      style={style}
      onClick={handleClick}
      isActive={isActive}
      path={path}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  font-family: var(--font-family-main);
  font-size: 1rem;
  font-weight: 600;
  margin: 0px 10px;
  width: 140px;
  /* height: 56px; */
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
  &:hover {
    border: var(--highlight-border);
    border-bottom: none;
    background-color: var(--screen-color-bright);
  }

  ${(props) => {
    if (!props.isActive) {
      return `
        & > * {
    transition: transform 0.4s ease;
    transform: translateY(1px);
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
    transition: var(--highlight-transition), transform 0.4s ease;
  
        & > * {
    transition: transform 0.4s ease;
    transform: translateY(4px);
    }
  }
      `;
    }
  }}
`;
const InactiveLink = styled(Wrapper)`
  cursor: not-allowed;
  &:hover {
    box-shadow: var(--danger-shadow);
    background: var(--danger-bg);
    border-color: var(--danger);
    transform: translateY(18px);
    & > * {
      transform: translateY(1px);
    }
  }
`;

export default NavButton;

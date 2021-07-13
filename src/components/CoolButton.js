import React from "react";
import styled from "styled-components";

const CoolButton = ({
  children,
  className,
  handleClick,
  margin,
  padding,
  fontSize,
}) => {
  return (
    <Btn margin={margin} padding={padding} onClick={handleClick}>
      <Shadow></Shadow>
      <Edge></Edge>
      <Front padding={padding} fontSize={fontSize} className={className}>
        {children}
      </Front>
    </Btn>
  );
};

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: hsl(0deg 0% 0% / 0.35);
  will-change: transform;
  transform: translateY(6px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    to left,
    hsl(41, 94%, 29%) 0%,
    hsl(41, 94%, 29%) 8%,
    hsl(41, 94%, 29%) 92%,
    hsl(41, 94%, 29%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  border: 4px solid var(--shadow-secondary);
  /* box-shadow: inset 2px 4px 8px var(--shadow-secondary); */
  border-radius: 50%;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  /* color: var(--color-alternative); */
  background-color: var(--color-secondary);
  will-change: transform;
  transform: translateY(-6px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1),
    color 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5),
    border 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
`;
const Btn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  margin: ${(props) => props.margin};

  &:hover ${Front} {
    transform: translateY(-8px);
    color: var(--color-text-primary);
    border-color: var(--color-alternative);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5),
      border-color 500ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
export default CoolButton;

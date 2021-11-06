import React from "react";
import styled from "styled-components";

const IconBtn = ({
  children,
  className,
  handleClick,
  type = "button",
  danger,
  confirm,
}) => {
  return (
    <Wrapper
      danger={danger}
      confirm={confirm}
      type={type}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  color: var(--color-text);
  /* text-shadow: var(--shadow-text); */
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color, filter;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  &:hover {
    transition: color, filter;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: ${(props) =>
      props.danger
        ? "var(--danger)"
        : props.confirm
        ? "var(--hover-confirm)"
        : "var(--hover-main-icon)"};
  }
`;

export default IconBtn;

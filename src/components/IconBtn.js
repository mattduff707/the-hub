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
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.5s ease;
  &:hover {
    transition: color 0.3s ease;
    color: ${(props) =>
      props.danger
        ? "var(--danger)"
        : props.confirm
        ? "var(--confirm)"
        : "var(--highlight)"};
  }
`;

export default IconBtn;

import React from "react";
import styled from "styled-components";

const TextInput = ({ className, onChange, value, id, placeholder, name }) => {
  return (
    <>
      <StyledInput
        className={className}
        onChange={onChange}
        value={value}
        autoComplete="off"
        id={id}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};
const StyledInput = styled.input`
  width: 100%;
  padding: 0px 10px;
  color: var(--color-text);
  background-color: var(--screen-color);
  border-radius: 8px;
  font-family: var(--font-family-main);
  /* letter-spacing: 2px; */
  font-weight: 600;
  outline: none;
  border: var(--screen-border-thin);
  letter-spacing: 2px;
  font-size: 0.9rem;
  transition: var(--highlight-transition);
  &:focus {
    background-color: var(--screen-color-bright);
    border: var(--highlight-border-thin);
    /* box-shadow: var(--highlight-shadow); */
  }
`;
export default TextInput;

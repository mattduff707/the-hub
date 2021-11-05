import React from "react";
import styled from "styled-components";

const TextInput = ({ className, onChange, value, id }) => {
  return (
    <>
      <StyledInput
        className={className}
        onChange={onChange}
        value={value}
        autoComplete="off"
        id={id}
      />
    </>
  );
};
const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  padding: 15px 10px;
  color: var(--color-text);
  background-color: var(--color-screen);
  border-radius: 8px;
  font-family: var(--font-family-main);
  /* letter-spacing: 2px; */
  font-weight: 600;
  outline: none;
  border: 2px solid var(--screen-border);
  /* box-shadow: var(--highlight-screen-shadow); */
  text-shadow: var(--shadow-text);
  letter-spacing: 2px;
  font-size: 0.9rem;
`;
export default TextInput;

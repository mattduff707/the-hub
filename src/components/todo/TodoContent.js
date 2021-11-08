import React from "react";
import styled from "styled-components";

const TodoContent = ({ value, textContent, isEditing, handleChange }) => {
  if (isEditing) {
    return <EditContent value={textContent} onChange={handleChange} />;
  }
  return <TextContent>{value}</TextContent>;
};

const TextContent = styled.p`
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 16px;
  color: var(--color-text);
`;

const EditContent = styled.textarea`
  font-weight: 600;
  letter-spacing: 2px;
  resize: vertical;
  width: 100%;
  min-height: 80px;
  color: var(--color-text);
  overflow: hidden;

  border: none;
  border-radius: 8px;
  font-family: var(--font-family-main);
  border: var(--screen-border-thin);
  background-color: var(--color-screen);
  outline: none;
  padding: 5px 10px;
  font-size: 16px;
  transition: var(--highlight-transition);
  &:focus {
    background: var(--screen-color-bright);
    border: var(--highlight-border-thin);
  }
`;

export default TodoContent;

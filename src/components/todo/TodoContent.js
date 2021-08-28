import React from 'react';
import styled from 'styled-components';

const TodoContent = ({ value, textContent, editing, handleChange }) => {
  if (editing) {
    return <EditContent value={textContent} onChange={handleChange} />;
  }
  return <TextContent>{value}</TextContent>;
};

const TextContent = styled.p`
  text-shadow: var(--shadow-text);
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
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  background-color: var(--color-screen);
  outline: none;
  padding: 5px 10px;
  text-shadow: var(--shadow-text);
  font-size: 16px;
`;
// const SubmitBtn = styled.button`
//   border: 2px solid var(--highlight-screen);
//   background-color: var(--color-screen);
//   margin-left: 10px;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
//   text-shadow: var(--shadow-text);
//   font-family: var(--font-family-main);
//   letter-spacing: 2px;
//   font-size: 18px;
//   font-weight: 600;
//   padding: 5px;
// `;

export default TodoContent;

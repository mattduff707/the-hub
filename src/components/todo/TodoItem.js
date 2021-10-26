import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoContent from './TodoContent';

import TodoDate from './TodoDate';
import TodoItemButtons from './TodoItemButtons';

const TodoItem = ({ value, date_added, date_completed, completed, itemId, confirmEdit }) => {
  console.log('render: TodoItem');
  const [textContent, setTextContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(() => !isEditing);
    setTextContent(value);
  };

  useEffect(() => {
    setTextContent(value);
  }, [value]);

  return (
    <Wrapper>
      <Content>
        <TodoContent
          value={value}
          handleChange={(e) => setTextContent(e.target.value)}
          textContent={textContent}
          isEditing={isEditing}
          date_completed={date_completed}
          date_added={date_added}
        />
      </Content>
      <TodoDate date_added={date_added} date_completed={date_completed} />
      <TodoItemButtons
        textContent={textContent}
        confirmEdit={confirmEdit}
        handleEdit={handleEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        itemId={itemId}
        completed={completed}
      />
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;
  border: 2px solid var(--highlight-screen);
  background-color: var(--color-screen);
  padding: 10px 10px 5px 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.article`
  text-shadow: var(--shadow-text);
  color: var(--color-text);
  /* width: 75%; */
  font-size: 18px;
  padding-bottom: 5px;
  border-bottom: 2px solid var(--highlight-screen);
`;

export default TodoItem;

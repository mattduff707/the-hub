import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import TodoForm from './TodoForm';
import List from '../List';
import TodoItem from './TodoItem';

import { useSelector } from 'react-redux';

import Loading from '../Loading';
import TodoNav from './TodoNav';

const TodoList = () => {
  const { tasklist, error, loading } = useSelector((state) => state.tasks);

  const todoListTag = 'todoList';
  const doneListTag = 'doneList';
  const doneList = tasklist.filter((task) => task.completed);
  const todoList = tasklist.filter((task) => !task.completed);
  const [activeTag, setActiveTag] = useState(todoListTag);

  const createList = (taskArr) => {
    return taskArr.map((task, index) => {
      return (
        <TodoItem
          itemId={task._id}
          key={index + task.value}
          value={task.value}
          date_added={task.date_added}
          date_completed={task.date_completed}
          completed={task.completed}
        />
      );
    });
  };

  if (loading) {
    return (
      <LoadWrap>
        <Loading />;
      </LoadWrap>
    );
  }
  if (error) {
    <p>Error</p>;
  }

  return (
    <Wrapper>
      <Heading>Tasks</Heading>
      <TodoNav activeTag={activeTag} setActiveTag={setActiveTag} todoListTag={todoListTag} doneListTag={doneListTag} />
      {activeTag === todoListTag && (
        <>
          <TodoForm />
          <List>{createList(todoList)}</List>
        </>
      )}
      {activeTag === doneListTag && <List>{createList(doneList)}</List>}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
`;
const LoadWrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
`;

export default TodoList;

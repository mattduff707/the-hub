import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import TodoForm from './TodoForm';
import List from './List';
import TodoItem from './TodoItem';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

import Loading from '../Loading';
import TodoNav from './TodoNav';

const TodoList = () => {
  console.log('render: TodoList');
  const { tasklist, error, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { removeTask, editTask, finishTask } = bindActionCreators(actionCreators, dispatch);

  const tasklistTag = 'tasklist';
  const donelistTag = 'donelist';
  const doneList = tasklist.filter((task) => task.completed);
  const todoList = tasklist.filter((task) => !task.completed);
  const [activeTag, setActiveTag] = useState(tasklistTag);

  const deleteItem = (_id) => {
    removeTask(_id);
  };

  const confirmEdit = (_id, newText) => {
    editTask({ _id, newText });
  };
  const completeTask = (task) => {
    finishTask(task);
  };

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
          deleteItem={deleteItem}
          confirmEdit={confirmEdit}
          completeTask={completeTask}
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
      <TodoNav activeTag={activeTag} setActiveTag={setActiveTag} tasklistTag={tasklistTag} donelistTag={donelistTag} />
      {activeTag === tasklistTag && (
        <>
          <TodoForm />
          <List>{createList(todoList)}</List>
        </>
      )}
      {activeTag === donelistTag && <List>{createList(doneList)}</List>}
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

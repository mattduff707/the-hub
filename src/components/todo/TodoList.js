import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import TodoForm from './TodoForm';
import List from './List';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

import Loading from '../Loading';
import TodoNav from './TodoNav';

const TodoList = () => {
  const listState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { addTask, removeTask, editTask } = bindActionCreators(actionCreators, dispatch);

  const tasklistTag = 'tasklist';
  const donelistTag = 'donelist';
  const [inputVal, setInputVal] = useState('');
  const [activeTag, setActiveTag] = useState(tasklistTag);

  const handleChange = (e) => {
    setInputVal(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputVal) {
      return;
    }
    addTask(inputVal);
    setInputVal('');
  };

  const deleteItem = (_id) => {
    removeTask(_id);
    // axios.delete(api + _id);
  };

  const confirmEdit = (_id, newText) => {
    editTask({ _id, newText });
  };

  if (listState.loading) {
    return (
      <LoadWrap>
        <Loading />;
      </LoadWrap>
    );
  }
  if (listState.error) {
    <p>Error</p>;
  }

  return (
    <Wrapper>
      <Heading>Tasks</Heading>
      <TodoNav activeTag={activeTag} />
      {activeTag === tasklistTag && (
        <>
          <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} inputVal={inputVal} />
          <List activeList={listState.tasklist} deleteItem={deleteItem} confirmEdit={confirmEdit} />
        </>
      )}
      {activeTag === donelistTag && (
        <List activeList={listState.donelist} deleteItem={deleteItem} confirmEdit={confirmEdit} />
      )}
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

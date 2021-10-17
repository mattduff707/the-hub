import React, { useState } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

import axios from 'axios';
import Loading from '../Loading';

const TodoList = () => {
  // const api = 'http://localhost:3000/tasklist/';
  const api = 'https://the-hub-server.herokuapp.com/tasklist/';

  const listState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { addTask, removeTask, editTask } = bindActionCreators(actionCreators, dispatch);

  const [inputVal, setInputVal] = useState('');

  const handleChange = (e) => {
    setInputVal(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputVal) {
      return;
    }

    axios
      .post(api, { value: inputVal, date_added: 'now' })
      .then((res) => addTask({ value: inputVal, date_added: 'now', _id: res.data }));
    // Task added here because MongoDb is creating my ID values
    setInputVal('');
  };

  const deleteItem = (_id) => {
    axios.delete(api + _id).then((response) => {
      console.log(response.data);
    });
    removeTask(_id);
  };

  const confirmEdit = (_id, newText) => {
    axios.patch(api + _id, { value: newText });
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
      <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} inputVal={inputVal} />
      <ListWrapper>
        {listState.tasklist.map((task, index) => {
          return (
            <TodoItem
              itemId={task._id}
              key={index}
              value={task.value}
              deleteItem={deleteItem}
              confirmEdit={confirmEdit}
            />
          );
        })}
      </ListWrapper>
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

const ListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0px 10px 160px;
  overflow: auto;
`;

export default TodoList;

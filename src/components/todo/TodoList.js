import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';
import useFetch from '../../services/useFetch';
import axios from 'axios';
import Loading from '../Loading';
// import { fetchTodos } from '../../state/reducers/tasksReducer';

const TodoList = () => {
  // const api = 'http://localhost:3000/tasklist/';
  const api = 'https://the-hub-server.herokuapp.com/tasklist/';

  const listState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { addTask } = bindActionCreators(actionCreators, dispatch);

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

    setInputVal('');
  };

  // const deleteItem = (id) => {
  //   axios.delete(api + id).then((response) => {
  //     console.log(response.data);
  //   });
  //   const filteredList = list.filter((e) => e._id !== id);
  //   setList(() => filteredList);
  // };

  // const confirmEdit = (id, newText) => {
  //   const newList = list.map((item) => {
  //     if (item._id === id) {
  //       item.value = newText;
  //       return item;
  //     }
  //     return item;
  //   });
  //   axios.patch(api + id, { value: newText });

  //   setList(() => newList);
  // };

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
        {listState.tasklist.map((e, index) => {
          return <TodoItem itemId={e._id} key={index} value={e.value} deleteItem={'d'} confirmEdit={'confirmEdidt'} />;
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

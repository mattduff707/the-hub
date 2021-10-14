import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';
import useFetch from '../../services/useFetch';
import axios from 'axios';

const TodoList = () => {
  const api = 'http://localhost:3000/tasklist/';
  const { data, loading, error } = useFetch(api);
  console.log(data, loading, error);

  const state = useSelector((state) => state.tasks);
  console.log(state);

  const dispatch = useDispatch();

  const { addTask } = bindActionCreators(actionCreators, dispatch);

  const [list, setList] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const handleChange = (e) => {
    setInputVal(() => e.target.value);
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      setList(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask('test task');
    if (!inputVal) {
      return;
    }
    axios
      .post(api + 'qwe', { value: inputVal, date_added: 'now' })
      .then((res) => setList(() => [...list, { value: inputVal, date_added: 'now', _id: res.data }]));

    setInputVal('');
  };

  const deleteItem = (id) => {
    axios.delete(api + id).then((response) => {
      console.log(response.data);
    });
    const filteredList = list.filter((e) => e._id !== id);
    setList(() => filteredList);
  };

  const confirmEdit = (id, newText) => {
    const newList = list.map((item) => {
      if (item._id === id) {
        item.value = newText;
        return item;
      }
      return item;
    });
    axios.patch(api + id, { value: newText });

    setList(() => newList);
  };

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (data) {
    return (
      <Wrapper>
        <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} inputVal={inputVal} />
        <ListWrapper>
          {list.map((e, index) => {
            return (
              <TodoItem itemId={e._id} key={index} value={e.value} deleteItem={deleteItem} confirmEdit={confirmEdit} />
            );
          })}
        </ListWrapper>
      </Wrapper>
    );
  }
};
const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: visible;
`;

const ListWrapper = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0px 10px 160px;
  overflow: auto;
`;

export default TodoList;

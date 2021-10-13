import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';

const TodoList = () => {
  const state = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const { addTask } = bindActionCreators(actionCreators, dispatch);
  console.log(state);

  const todoTag = 'todoList';

  const [list, setList] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const handleChange = (e) => {
    setInputVal(() => e.target.value);
  };

  useEffect(() => {
    const windowStorage = JSON.parse(window.localStorage.getItem(todoTag));
    if (windowStorage) {
      setList(windowStorage);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask('test task');
    if (!inputVal) {
      return;
    }

    setList(() => {
      return [...list, { id: list.length, value: inputVal, editing: false }];
    });
    setInputVal('');
  };

  const deleteItem = (id) => {
    const filteredList = list.filter((e) => e.id !== id);
    setList(() => filteredList);
  };

  const startEdit = (id) => {
    const newList = list.map((e) => {
      if (e.id === id) {
        e.editing = !e.editing;
        return e;
      }
      return e;
    });
    setList(() => newList);
  };

  const confirmEdit = (id, newText) => {
    const newList = list.map((e) => {
      if (e.id === id) {
        e.value = newText;
        e.editing = !e.editing;
        return e;
      }
      return e;
    });
    setList(() => newList);
  };

  useEffect(() => {
    window.localStorage.setItem(todoTag, JSON.stringify(list));
  }, [list]);

  return (
    <Wrapper>
      <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} inputVal={inputVal} />
      <ListWrapper>
        {list.map((e) => {
          return (
            <TodoItem
              itemId={e.id}
              key={e.value + e.id}
              value={e.value}
              deleteItem={deleteItem}
              startEdit={startEdit}
              confirmEdit={confirmEdit}
              editing={e.editing}
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

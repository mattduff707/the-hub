import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
// import List from "./List";
import ScreenIndent from "../ScreenIndent";
import CoolScreen from "../CoolScreen";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const todoTag = "todoList";
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const windowStorage = JSON.parse(window.localStorage.getItem(todoTag));
    if (windowStorage) {
      setList(windowStorage);
    }
    // async function init() {
    //   try {
    //     const response = await JSON.parse(window.localStorage.getItem(todoTag));
    //   }
    // }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const todoVal = e.target[0].value;
    if (!todoVal) {
      return;
    }

    e.target[0].value = "";
    setList(() => {
      return [...list, { id: list.length, value: todoVal, editing: false }];
    });
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
    // console.log(window.localStorage);
  }, [list]);

  if (loading) {
    return (
      <Wrapper>
        <Loading>Loading...</Loading>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <TodoForm handleSubmit={handleSubmit} />
      <ListWrapper>
        {/* <TodoItem value="Finish project wireframe" />
            <TodoItem />
            <TodoItem /> */}
        {list.map((e) => {
          return (
            <TodoItem
              itemId={e.id}
              key={e + e.id}
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
  flex: 1;
  height: 100%;
  /* border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  border-radius: 20px;
  box-shadow: var(--inset-shadow);
  background-color: var(--shadow-main); */
  /* margin-bottom: 20px; */
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const Loading = styled.p`
  color: var(--color-text);
  text-shadow: var(--shadow-text);
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ListWrapper = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px 10px;
`;

export default TodoList;

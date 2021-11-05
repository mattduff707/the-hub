import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../Btn";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskActionCreators } from "../../state/actionCreators";

const TodoForm = () => {
  const dispatch = useDispatch();
  const { addTask } = bindActionCreators(taskActionCreators, dispatch);
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputVal) {
      return;
    }
    addTask(inputVal);
    setInputVal("");
  };

  return (
    <Wrapper name="taskForm" onSubmit={handleSubmit}>
      <TextInput
        placeholder="Type task..."
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
        type="text"
        name="addTodo"
      />
      <Submit type="submit">Add</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  /* border-top: 2px solid var(--color-screen); */
  /* border-bottom: 2px solid var(--color-screen); */
  background-color: transparent;
  padding: 20px 10px 0px;
  display: flex;
`;

const TextInput = styled.input`
  color: var(--color-text);
  background-color: var(--color-screen);
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-family-main);
  /* letter-spacing: 2px; */
  font-weight: 600;
  padding: 20px 10px;
  outline: none;
  flex: 4;
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  font-size: 18px;
  &::placeholder {
    color: var(--color-text);
    opacity: 0.5;
  }
`;
const Submit = styled(Btn)`
  flex: 1;
  margin-left: 10px;
  font-size: 1.1rem;
`;

export default TodoForm;

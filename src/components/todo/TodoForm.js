import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../Btn";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskActionCreators } from "../../state/actionCreators";
import TextInput from "../TextInput";

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

const Submit = styled(Btn)`
  flex: 1;
  margin-left: 10px;
  font-size: 1.1rem;
  padding: 5px 10px;
`;

export default TodoForm;

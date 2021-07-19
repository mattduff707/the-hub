import React from "react";
import styled from "styled-components";

const TodoForm = () => {
  return (
    <Wrapper>
      <TextInput />
      <Submit>Add</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  /* border-top: 2px solid var(--color-screen); */
  /* border-bottom: 2px solid var(--color-screen); */
  background-color: transparent;
  padding: 15px 10px 15px 10px;
  display: flex;
  border-bottom: 2px solid var(--highlight-screen);
  margin-bottom: 15px;
  padding-top: 50px;
  /* box-shadow: 0px 0px 10px 0px var(--highlight-alternative-border-light); */
`;

const TextInput = styled.input`
  background-color: var(--color-screen);
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-family: var(--font-family-main);
  letter-spacing: 2px;
  font-weight: 600;
  padding: 20px 10px;
  outline: none;
  flex: 4;
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  font-size: 18px;
`;
const Submit = styled.button`
  border: 2px solid var(--highlight-screen);
  flex: 1;
  background-color: var(--color-screen);
  margin-left: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  font-family: var(--font-family-main);
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 600;
`;

export default TodoForm;

import React from "react";
import styled from "styled-components";
import TodoList from "../components/todo/TodoList";

const LeftScreen = () => {
  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid green; */
  flex: 1;
  height: 100%;
  /* padding: 0px 0px 30px 40px; */
  /* overflow: auto; */
  overflow: hidden;
  padding-top: 30px;
  border-right: 2px solid var(--screen-border);
`;

export default LeftScreen;

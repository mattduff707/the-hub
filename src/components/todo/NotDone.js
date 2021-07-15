import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import List from "./List";

const NotDone = ({ notDoneArr }) => {
  return (
    <Wrapper>
      <Stand tl />
      <Stand tr />
      <Stand br />
      <Stand bl />
      <List>
        {notDoneArr.map((e) => {
          return <TodoItem key={e} value={e} />;
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  flex: 1;
  border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  border-radius: 20px;
  box-shadow: var(--inset-shadow);
  background-color: var(--shadow-main);
  margin-bottom: 20px;
  position: relative;
`;

const Stand = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--highlight-main);
  top: 15px;
  left: 15px;
`;

export default NotDone;

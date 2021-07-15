import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import List from "./List";

const Done = ({ doneArr }) => {
  return (
    <Wrapper>
      <List>
        {doneArr.map((e) => {
          return <TodoItem key={e} value={e} done={true} />;
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
  margin-top: 20px;
`;

export default Done;

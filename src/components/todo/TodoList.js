import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
// import List from "./List";
import ScreenIndent from "../ScreenIndent";
import CoolScreen from "../CoolScreen";
import TodoForm from "./TodoForm";

const TodoList = ({ notDoneArr }) => {
  return (
    <Wrapper>
      <ScreenIndent long>
        <CoolScreen sideScreen>
          <TodoForm />
          <ListWrapper>
            <TodoItem value="Finish project wireframe" />
            <TodoItem />
            <TodoItem />
            {/* {notDoneArr.map((e) => {
            return <TodoItem key={e} value={e} />;
          })} */}
          </ListWrapper>
        </CoolScreen>
      </ScreenIndent>
    </Wrapper>
  );
};

const Wrapper = styled.article`
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
`;
const ListWrapper = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0px 10px;
`;

export default TodoList;

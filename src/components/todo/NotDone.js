import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import List from "./List";
import ScreenIndent from "../ScreenIndent";
import CoolScreen from "../CoolScreen";

const NotDone = ({ notDoneArr }) => {
  return (
    <Wrapper>
      <ScreenIndent>
        <CoolScreen>
          {notDoneArr.map((e) => {
            return <TodoItem key={e} value={e} />;
          })}
        </CoolScreen>
      </ScreenIndent>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  flex: 1;
  /* border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  border-radius: 20px;
  box-shadow: var(--inset-shadow);
  background-color: var(--shadow-main); */
  margin-bottom: 20px;
  position: relative;
`;

export default NotDone;

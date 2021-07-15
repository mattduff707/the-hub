import React from "react";
import styled from "styled-components";

const TodoItem = ({ value, done }) => {
  if (done) {
    return <Wrapper>{/* <p>{value}</p> */}</Wrapper>;
  }
  return (
    <Wrapper>
      {/* <BorderWrapper>
        <p>{value}</p>
      </BorderWrapper> */}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: calc(100% + 10px);
  transform: translateX(-2px);
  /* background-color: var(--color-alternative); */
  /* background: linear-gradient(
    -10deg,
    var(--highlight-alternative),
    var(--color-alternative) 70%
  ); */
  isolation: isolate;
  z-index: 1;
  border-radius: 10px;
  /* border-bottom: 4px solid var(--color-alternative); */
  margin-bottom: 1px;
  margin-left: 100px;
  /* box-shadow: 0px 1px 5px hsla(201, 54%, 5%, 1); */
`;
const BorderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  /* border-right: 2px solid var(--highlight-alternative-border-dark);
  border-left: 2px solid var(--highlight-alternative-border-light);
  border-top: 2px solid var(--highlight-alternative-border-light);
  border-bottom: 2px solid var(--highlight-alternative-border-dark); */
`;

const DoneWrapper = styled(Wrapper)`
  background-color: var(--color-todo-done);
  border-right: 3px solid var(--highlight-todo-done-border-dark);
  border-left: 2px solid var(--highlight-todo-done-border-light);
  border-top: 2px solid var(--highlight-todo-done-border-light);
  border-bottom: 6px solid var(--highlight-todo-done-border-dark);
`;

export default TodoItem;

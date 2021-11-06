import React from "react";
import styled from "styled-components";
import NavButton from "../NavButton";

const TodoNav = ({ activeTag, setActiveTag, doneListTag, todoListTag }) => {
  return (
    <Wrapper>
      <NavList>
        <li>
          <NavButton
            isActive={activeTag === todoListTag}
            handleClick={() => setActiveTag(todoListTag)}
          >
            <p>To-do</p>
          </NavButton>
        </li>
        <li>
          <NavButton
            isActive={activeTag === doneListTag}
            handleClick={() => setActiveTag(doneListTag)}
          >
            <p>Done</p>
          </NavButton>
        </li>
      </NavList>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--screen-border);
`;
const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  overflow: hidden;
`;

export default TodoNav;

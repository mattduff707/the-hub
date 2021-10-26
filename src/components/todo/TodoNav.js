import React from 'react';
import styled from 'styled-components';
import Btn from '../Btn';
import ScreenBox from '../ScreenBox';
const TodoNav = ({ activeTag, setActiveTag, doneListTag, todoListTag }) => {
  return (
    <Wrapper>
      <NavList>
        <li>
          <NavBtn isActive={activeTag === todoListTag} handleClick={() => setActiveTag(todoListTag)}>
            To-do
          </NavBtn>
        </li>
        <li>
          <NavBtn isActive={activeTag === doneListTag} handleClick={() => setActiveTag(doneListTag)}>
            Done
          </NavBtn>
        </li>
      </NavList>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavList = styled(ScreenBox)`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 10px 20px;
`;
const NavBtn = styled(Btn)`
  font-size: 1.2rem;
  padding: 5px 10px;
  margin: 0px 10px;
  color: ${(props) => (props.isActive ? 'var(--hover-confirm)' : 'var(--color-text)')};
`;

export default TodoNav;

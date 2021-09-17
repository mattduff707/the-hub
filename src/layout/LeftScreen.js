import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/todo/TodoList';
import CoolScreen from '../components/CoolScreen';
import ScreenIndent from '../components/ScreenIndent';
import Heading from '../components/Heading';

const LeftScreen = () => {
  return (
    <Wrapper>
      <ScreenIndent long>
        <StyledScreen sideScreen>
          <Heading>Tasks</Heading>
          <TodoList />
        </StyledScreen>
      </ScreenIndent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid green; */
  flex: 1;
  height: 100%;
  padding: 0px 0px 30px 40px;
  /* overflow: auto; */
  overflow: hidden;
  padding-top: 30px;
`;
const StyledScreen = styled(CoolScreen)`
  padding-top: 40px;
  overflow: hidden;
`;

export default LeftScreen;

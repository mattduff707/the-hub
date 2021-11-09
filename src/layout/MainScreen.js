import React from 'react';
import styled from 'styled-components';
import Screen from '../components/mainScreen/Screen';
import NavScreen from '../components/mainScreen/nav/NavScreen';

const MainScreen = () => {
  return (
    <Wrapper>
      <NavScreen style={{ gridArea: 'nav' }} />
      <Screen style={{ gridArea: 'content' }} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 4px solid green; */
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 5fr;
  grid-template-areas:
    'nav'
    'content';
  /* max-height: 100%; */
  overflow-y: hidden;
  /* position: relative; */
`;

export default MainScreen;

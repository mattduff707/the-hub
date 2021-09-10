import React from 'react';
import styled from 'styled-components';
import Screen from '../components/mainScreen/Screen';
import NavScreen from '../components/mainScreen/nav/NavScreen';

const MainScreen = () => {
  return (
    <Wrapper>
      <Screen style={{ gridArea: 'screen' }} />
      <NavScreen style={{ gridArea: 'buttons' }} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 4px solid green; */
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 1fr;
  grid-template-areas:
    'screen'
    'buttons';
  /* max-height: 100%; */
  overflow-y: hidden;
`;

export default MainScreen;

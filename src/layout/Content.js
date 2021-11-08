import React from 'react';
import styled from 'styled-components';
import LeftScreen from './LeftScreen';
import MainScreen from './MainScreen';
import RightScreen from './RightScreen';
import gridBg from '../images/gridBg.png';

const Content = () => {
  return (
    <Wrapper>
      <BorderWrapper>
        <ScreenWrapper>
          <LeftScreen style={{ gridArea: 'left' }} />
          <MainScreen style={{ gridArea: 'middle' }} />
          <RightScreen style={{ gridArea: 'right' }} />
        </ScreenWrapper>
      </BorderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  --border-dark: hsl(180, 2%, 10%);
  --border-light: hsl(180, 2%, 28%);

  --indent-bg: hsl(180, 2%, 13%);
  --edge-bg: hsl(180, 2%, 19%);
  --screen-shadow: ;
  --screen-radial-outside: hsla(220, 60%, 42%, 0.88);
  --screen-radial-inside: hsla(220, 60%, 30%, 0.88);

  /* border: 4px solid blue; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 30px;
  background: var(--edge-bg);
  /* padding-top: 30px; */
  /* overflow: hidden; */
  /* overflow-y: auto; */
`;
const BorderWrapper = styled.div`
  border: 10px solid var(--border-dark);
  border-right: 10px solid var(--border-light);
  border-bottom: 10px solid var(--border-light);
  border-radius: 20px;
  width: 100%;
  height: 100%;

  /* background-color: var(--indent-bg); */
  background: url(${gridBg}) repeat;
  box-shadow: var(--inset-shadow);
`;
const ScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(var(--screen-radial-inside), var(--screen-radial-outside));
  /* border-right: 2px solid var(--screen-border);
  border-left: 2px solid var(--screen-border);
  border-top: 2px solid var(--screen-border);
  border-bottom: 2px solid var(--screen-border); */
  border: var(--screen-border);
  border-radius: 10px;
  /* box-shadow: 0px 0px 60px var(--color-alternative); */
  display: grid;
  grid-template-areas: 'left middle right';
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-rows: 1fr;
`;

export default Content;

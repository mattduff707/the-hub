import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import CoolScreen from '../CoolScreen';
import ScreenIndent from '../ScreenIndent';
import Home from './home/Home';
import Snippets from './snippets/Snippets';
import Math from './math/Math';

const Screen = () => {
  return (
    <Wrapper>
      <ScreenIndent>
        <CoolScreen>
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/snippets">
                <Snippets />
              </Route>
              <Route path="/math">
                <Math />
              </Route>
            </Switch>
          </Container>
        </CoolScreen>
      </ScreenIndent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* flex: 2; */
  /* border: 2px solid yellow; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* height: 100%; */
  min-height: 100%;
  padding: 30px 30px 20px 30px;
  overflow: auto;
`;

const Container = styled.div`
  padding: 25px;
  /* border: 2px solid red; */
  width: 100%;
  /* height: 100%; */
  min-height: 100%;

  overflow-y: auto;
`;

export default Screen;

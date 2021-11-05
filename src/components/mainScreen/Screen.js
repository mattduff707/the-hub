import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./home/Home";
import Snippets from "./snippets/Snippets";
import Math from "./math/Math";

const Screen = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100%;
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

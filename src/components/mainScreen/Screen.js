import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./home/Home";
import Snippets from "./snippets/Snippets";
import Math from "./math/Math";
import Flash from "./flash/Flash";

const Screen = () => {
  return (
    <Wrapper>
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
        <Route path="/flash">
          <Flash />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  position: relative;
  overflow-y: auto;
  transform: translateY(0px);
  /* border: 2px solid blue; */
  /* padding: 25px; */
`;

export default Screen;

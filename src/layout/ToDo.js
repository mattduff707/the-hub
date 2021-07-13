import React from "react";
import styled from "styled-components";
import Done from "../components/todo/Done";
import NotDone from "../components/todo/NotDone";

const ToDo = () => {
  return (
    <Wrapper>
      <Done />
      <NotDone />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid green; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0px 30px 40px;
`;

export default ToDo;

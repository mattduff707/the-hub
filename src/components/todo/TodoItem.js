import React from "react";
import styled from "styled-components";

const TodoItem = ({ value, done }) => {
  return (
    <Wrapper>
      <Content>{value}</Content>
      <ButtonWrapper>
        <IconButton>
          <Icon className="far fa-edit"></Icon>
        </IconButton>
        <InnerWrapper>
          <IconButton style={{ fontWeight: "bolder" }}>
            <i className="far fa-check-circle"></i>
          </IconButton>
          <IconButton style={{ fontWeight: "bolder" }}>
            <i className="far fa-times-circle"></i>
          </IconButton>
        </InnerWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;
  /* background: ; */
  min-height: 50px;
  border: 2px solid var(--highlight-screen);
  background-color: var(--color-screen);
  padding: 10px 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const Content = styled.article`
  text-shadow: var(--shadow-text);
  flex: 4;
  /* width: 75%; */
  font-size: 18px;
`;
const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  border-left: 2px solid var(--highlight-screen);
  /* width: 25%; */
  /* height: 50px; */
  /* border: 2px solid black; */
  /* background-color: red; */
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 2px solid black; */
`;
const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  text-shadow: var(--shadow-text);
  padding: 0px 5px;
  /* margin: 0px 5px; */
  /* border: 2px solid black; */
`;

const Icon = styled.i`
  transform: translateY(-3px);
`;

export default TodoItem;

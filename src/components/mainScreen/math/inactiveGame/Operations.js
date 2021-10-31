import React from 'react';
import styled from 'styled-components';
import { operationsArr } from '../generateQuestions';

const Operations = ({ gameOperations, handleOperationsChange }) => {
  return (
    <Wrapper>
      <OperationsTitle>Operations:</OperationsTitle>

      {operationsArr.map((operation) => {
        return (
          <Container key={operation}>
            <OperationsLabel htmlFor={operation}>{operation}:</OperationsLabel>
            <OperationsSetting
              type="checkbox"
              id={operation}
              name="operations"
              value={operation}
              checked={gameOperations.includes(operation)}
              onChange={handleOperationsChange}
            />
          </Container>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;
const OperationsTitle = styled.p`
  padding-bottom: 5px;
  font-size: 1.2rem;
  /* text-decoration: underline; */
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
`;
const OperationsLabel = styled.label`
  padding-right: 5px;
  text-transform: capitalize;
`;
const OperationsSetting = styled.input`
  margin-right: 5px;
  appearance: none;
  border: 2px solid var(--hover-main);
  box-shadow: var(--hover-main-shadow);
  border-radius: 2px;
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  &:checked {
    /* background: var(--hover-confirm); */
    box-shadow: var(--hover-confirm-shadow);
    border: var(--hover-confirm-border);
  }
  &:checked:before {
    content: '';
    border-right: var(--hover-confirm-border);
    border-bottom: var(--hover-confirm-border);
    height: 70%;
    width: 40%;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transform: rotate(45deg) translateY(-15%) translateX(-20%);
  }
`;
export default Operations;

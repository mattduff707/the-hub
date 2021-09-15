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
`;
const OperationsLabel = styled.label`
  padding-right: 5px;
  text-transform: capitalize;
`;
const OperationsSetting = styled.input`
  margin-right: 5px;
`;
export default Operations;

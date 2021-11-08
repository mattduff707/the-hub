import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';
import ScreenBox from '../../../ScreenBox';
import Score from './Score';

const CompletedGame = ({ correctQuestions, incorrectQuestions, gameOperations, handleGameStart, exitGame }) => {
  const totalArr = [...correctQuestions, ...incorrectQuestions];

  const getOperationTotal = (arr, operation) => {
    const operationArr = arr.filter((q) => q.operation === operation);
    return operationArr.length;
  };

  return (
    <Wrapper>
      <Title>Game Over</Title>
      <Subtitle>Score</Subtitle>
      <Score valOne={correctQuestions.length} valTwo={totalArr.length} operation="Total" />
      {gameOperations.map((operationStr) => {
        return (
          <Score
            key={operationStr}
            valOne={getOperationTotal(correctQuestions, operationStr)}
            valTwo={getOperationTotal(totalArr, operationStr)}
            operation={operationStr}
          />
        );
      })}
      <BtnWrapper>
        <StyledBtn handleClick={handleGameStart}>Replay</StyledBtn>
        <StyledBtn handleClick={exitGame}>Exit</StyledBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(ScreenBox)`
  min-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;
const Title = styled.h1`
  font-size: 3rem;
  color: var(--danger);
`;
const Subtitle = styled.h2`
  font-size: 2rem;
  text-decoration: underline;
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 10px;
`;
const StyledBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1.2rem;
  margin: 0px 5px;
`;

export default CompletedGame;

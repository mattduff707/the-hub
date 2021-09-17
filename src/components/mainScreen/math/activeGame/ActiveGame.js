import React from 'react';
import { MemoizedStatusBar } from './StatusBar';
import { MemoizedQuestionList } from './QuestionList';
import styled from 'styled-components';

const ActiveGame = ({ gameQuestions, gameLength, handleIsCorrect, correctQuestions, incorrectQuestions, endGame }) => {
  return (
    <Wrapper>
      <MemoizedStatusBar
        gameLength={gameLength}
        correctQuestions={correctQuestions}
        incorrectQuestions={incorrectQuestions}
        endGame={endGame}
      />
      <MemoizedQuestionList gameQuestions={gameQuestions} handleIsCorrect={handleIsCorrect} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MemoizedActiveGame = React.memo(ActiveGame);

import React from 'react';
import StatusBar from './StatusBar';
import QuestionList from './QuestionList';
import styled from 'styled-components';

const ActiveGame = ({ gameQuestions, gameLength, handleIsCorrect, correctQuestions, incorrectQuestions, endGame }) => {
  return (
    <Wrapper>
      <StatusBar
        gameLength={gameLength}
        correctQuestions={correctQuestions}
        incorrectQuestions={incorrectQuestions}
        endGame={endGame}
      />
      <QuestionList gameQuestions={gameQuestions} handleIsCorrect={handleIsCorrect} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ActiveGame;

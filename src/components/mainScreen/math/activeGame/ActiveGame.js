import React from 'react';
import StatusBar from './StatusBar';
import QuestionList from './QuestionList';
import styled from 'styled-components';

const ActiveGame = ({ gameQuestions, gameLength }) => {
  return (
    <Wrapper>
      <StatusBar gameLength={gameLength} />
      <QuestionList gameQuestions={gameQuestions} />
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

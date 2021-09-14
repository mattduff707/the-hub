import React from 'react';
import StatusBar from './StatusBar';
import Question from './Question';
import styled from 'styled-components';

const ActiveGame = () => {
  return (
    <>
      <StatusBar />
      <QuestionWrapper>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </QuestionWrapper>
    </>
  );
};

const QuestionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

export default ActiveGame;

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
const QuestionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 80px;
`;

export default ActiveGame;

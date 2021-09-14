import React from 'react';
import styled from 'styled-components';
import Question from './Question';
const QuestionList = () => {
  return (
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
  );
};
const QuestionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 90px;
`;

export default QuestionList;

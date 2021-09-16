import React from 'react';
import styled from 'styled-components';
import Question from './Question';
const QuestionList = ({ gameQuestions }) => {
  return (
    <QuestionWrapper>
      {gameQuestions.map((question) => {
        const { operation, valOne, valTwo } = question;
        return <Question key={operation + valOne + valTwo} valOne={valOne} valTwo={valTwo} operation={operation} />;
      })}
    </QuestionWrapper>
  );
};
const QuestionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
`;

export default QuestionList;

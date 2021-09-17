import React from 'react';
import styled from 'styled-components';
import Question from './Question';
const QuestionList = ({ gameQuestions, handleIsCorrect }) => {
  return (
    <QuestionWrapper>
      {gameQuestions.map((question) => {
        const { operation, valOne, valTwo } = question;
        return (
          <Question
            question={question}
            key={operation + valOne + valTwo}
            valOne={valOne}
            valTwo={valTwo}
            operation={operation}
            handleIsCorrect={handleIsCorrect}
          />
        );
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

export const MemoizedQuestionList = React.memo(QuestionList);

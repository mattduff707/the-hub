import React from 'react';
import styled from 'styled-components';
import Question from './Question';
const QuestionList = ({ gameQuestions, handleIsCorrect }) => {
  return (
    <QuestionWrapper>
      {gameQuestions.map((question, index) => {
        const { operation, valOne, valTwo } = question;
        return (
          <Question
            question={question}
            key={index}
            valOne={valOne}
            valTwo={valTwo}
            operation={operation}
            handleIsCorrect={handleIsCorrect}
            index={index}
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

export default QuestionList;

import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import OperationIcon from './OperationIcon';
import EqualsIcon from '../../../../icons/Equals';
import QuestionInput from './QuestionInput';
import Btn from '../../../Btn';

const Question = ({ valOne, valTwo, operation, question, handleIsCorrect, index }) => {
  const [correctAnswer, setCorrectAnswer] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setisCorrect] = useState();

  const currentQuestionRef = useRef(null);

  const getAddition = (a, b) => {
    return a + b;
  };
  const getSubtraction = (a, b) => {
    return a - b;
  };
  const getMultiplication = (a, b) => {
    return a * b;
  };

  useEffect(() => {
    setCorrectAnswer(() => {
      if (operation === 'addition') {
        return getAddition(parseInt(valOne), parseInt(valTwo));
      } else if (operation === 'subtraction') {
        return getSubtraction(parseInt(valOne), parseInt(valTwo));
      } else {
        return getMultiplication(parseInt(valOne), parseInt(valTwo));
      }
    });
    if (index === 0) {
      // Set cursor to first question
      changeFocus(index - 1, currentQuestionRef);
    }
  }, [operation, valOne, valTwo, index]);

  // Check for upcoming questions, If an upcoming question is unanswered, move the cursor into that questions input
  const changeFocus = (currentIndex, ref) => {
    const allQuestionsArr = [...ref.current.parentElement.children];
    const nextQuestionsArr = allQuestionsArr.slice(currentIndex + 1, allQuestionsArr.length - 1);
    const nextAvailableQuestion = nextQuestionsArr.find((element) => element.dataset.isunanswered === 'true');

    if (nextAvailableQuestion) {
      nextAvailableQuestion.answer.focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputVal = e.target.answer.value;
    const isAnswerCorrect = correctAnswer === parseInt(inputVal);
    if (inputVal.length > 0) {
      setIsAnswered(() => true);
      setisCorrect(() => isAnswerCorrect);
      handleIsCorrect(isAnswerCorrect, question);
      changeFocus(index, currentQuestionRef);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit} ref={currentQuestionRef} data-isunanswered={!isAnswered}>
      <Container>
        {valOne} <OperationIcon operation={operation} /> {valTwo} <StyledEqualsIcon />{' '}
        <QuestionInput isCorrect={isCorrect} isAnswered={isAnswered} />
      </Container>
      {!isAnswered ? (
        <SubmitBtn type="submit">Submit</SubmitBtn>
      ) : (
        <StyledAnswer isCorrect={isCorrect}>{correctAnswer}</StyledAnswer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  font-size: 1.2rem;
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: var(--highlight-screen-shadow);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  height: 125px;
  padding: 20px;
  margin: 10px;
`;

const StyledEqualsIcon = styled(EqualsIcon)`
  height: 16px;
  width: 16px;
  margin: 0px 4px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const StyledAnswer = styled.span`
  color: ${(props) => (props.isCorrect ? 'var(--hover-confirm)' : `var(--hover-danger)`)};
  text-shadow: ${(props) => (props.isCorrect ? 'var(--hover-confirm-text-shadow)' : `var(--hover-danger-text-shadow)`)};
`;
const SubmitBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1rem;
`;

export default Question;

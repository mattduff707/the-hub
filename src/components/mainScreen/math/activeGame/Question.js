import { useState, useEffect } from 'react';
import styled from 'styled-components';
import OperationIcon from './OperationIcon';
import EqualsIcon from '../../../../icons/Equals';
import Btn from '../../../Btn';

const Question = ({ valOne, valTwo, operation }) => {
  const [answer, setAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setisCorrect] = useState();

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
  }, [operation, valOne, valTwo]);

  const handleChange = (e) => {
    setAnswer(() => parseInt(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnswered(() => true);
    setisCorrect(() => {
      return answer === correctAnswer;
    });
  };
  if (!isAnswered) {
    return (
      <Wrapper onSubmit={handleSubmit}>
        <Container>
          {valOne} <OperationIcon operation={operation} /> {valTwo} <StyledEqualsIcon />
          <AnswerInput type="number" value={answer} onChange={handleChange} />
        </Container>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Wrapper>
    );
  } else if (isCorrect) {
    return (
      <Wrapper onSubmit={handleSubmit}>
        <Container>
          {valOne} <OperationIcon operation={operation} /> {valTwo} <StyledEqualsIcon />
          <StyledAnswer isCorrect={isCorrect}>{answer}</StyledAnswer>
        </Container>
        <StyledAnswer isCorrect={isCorrect}>{correctAnswer}</StyledAnswer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper onSubmit={handleSubmit}>
        <Container>
          {valOne} <OperationIcon operation={operation} /> {valTwo} <StyledEqualsIcon />
          <StyledAnswer isCorrect={isCorrect}>{answer}</StyledAnswer>
        </Container>
        <StyledAnswer isCorrect={isCorrect}>{correctAnswer}</StyledAnswer>
      </Wrapper>
    );
  }
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
  padding: 20px;
  margin: 10px;
`;

const StyledEqualsIcon = styled(EqualsIcon)`
  height: 16px;
  width: 16px;
  margin: 0px 4px;
`;
const AnswerInput = styled.input`
  font-size: inherit;
  font-family: inherit;
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: var(--highlight-screen-shadow);
  border-radius: 8px;
  width: 100px;
  padding: 5px;
  margin: 0;
  color: var(--color-text);
  text-shadow: var(--shadow-text);
  -moz-appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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

import React from 'react';
import styled from 'styled-components';
import SubtractionIcon from '../../../../icons/Subtraction';
import EqualsIcon from '../../../../icons/Equals';
import Btn from '../../../Btn';

const Question = () => {
  return (
    <Wrapper>
      <Container>
        349 <StyledSubtractionIcon /> 240 <StyledEqualsIcon /> <Answer type="number" />
      </Container>
      <SubmitBtn>Submit</SubmitBtn>
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
  padding: 20px;
  margin: 10px;
`;
const StyledSubtractionIcon = styled(SubtractionIcon)`
  height: 16px;
  width: 16px;
  margin: 0px 4px;
`;
const StyledEqualsIcon = styled(EqualsIcon)`
  height: 16px;
  width: 16px;
  margin: 0px 4px;
`;
const Answer = styled.input`
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
const SubmitBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1rem;
`;

export default Question;

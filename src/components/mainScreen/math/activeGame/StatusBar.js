import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';
import { MemoizedTimer } from './Timer';

const StatusBar = ({ gameLength, correctQuestions, incorrectQuestions, endGame }) => {
  return (
    <Wrapper>
      <TimerContainer>
        Time Remaining: <MemoizedTimer endGame={endGame} gameLength={gameLength} />
      </TimerContainer>
      <Container>
        Answered: {correctQuestions.length} / {correctQuestions.length + incorrectQuestions.length}
      </Container>
      <StyledBtn handleClick={endGame}>End</StyledBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid red;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: var(--highlight-screen-shadow);
  z-index: 20;
  width: 100%;
`;
const Container = styled.div`
  font-size: 1.4rem;
  padding: 0px 20px;

  @media (max-width: 1800px) {
    font-size: 1rem;
  }
  @media (max-width: 1300px) {
    padding: 0px 15px;
    font-size: 0.9rem;
  }
`;
const TimerContainer = styled(Container)`
  width: 320px;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    width: 240px;
  }
  @media (max-width: 1300px) {
    width: 220px;
  }
`;

const StyledBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1.2rem;
  @media (max-width: 1800px) {
    font-size: 1rem;
  }
`;

export const MemoizedStatusBar = React.memo(StatusBar);

import React from 'react';
import styled from 'styled-components';

const CompletedGame = () => {
  return (
    <Wrapper>
      <Title>Game Over</Title>
      <Subtitle>Score</Subtitle>
      <Score>Total: 19 / 20</Score>
      <Score>Multiplication: 6 / 6</Score>
      <Score>Addition: 6 / 7</Score>
      <Score>Subtraction: 7 / 7</Score>
      <BtnWrapper>
        <button>Replay</button>
        <button>Exit</button>
      </BtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: var(--highlight-screen-shadow);
  border-radius: 8px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;
const Title = styled.h1`
  font-size: 3rem;
  color: var(--hover-danger);
  text-shadow: var(--hover-danger-text-shadow);
`;
const Subtitle = styled.h2`
  font-size: 2rem;
  text-decoration: underline;
`;
const Score = styled.p`
  font-size: 1.5rem;
  padding: 5px 0px;
`;
const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default CompletedGame;

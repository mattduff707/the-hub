import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';

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
        <StyledBtn>Replay</StyledBtn>
        <StyledBtn>Exit</StyledBtn>
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
  padding-top: 10px;
`;
const StyledBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1.2rem;
  margin: 0px 5px;
`;

export default CompletedGame;

import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';
import Timer from './Timer';

const StatusBar = () => {
  return (
    <Wrapper>
      <Container>
        Time Remaining: <Timer />
      </Container>
      <Container>Answered: 7 / 10</Container>
      <StyledBtn>End</StyledBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid red;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: var(--highlight-screen-shadow);
  z-index: 20;
`;
const Container = styled.div`
  font-size: 1.4rem;
  padding: 0px 20px;
`;

const StyledBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1.2rem;
`;

export default StatusBar;

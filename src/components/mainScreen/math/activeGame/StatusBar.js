import React from 'react';
import styled from 'styled-components';

const StatusBar = () => {
  return (
    <Wrapper>
      <Container>
        Time Remaining: <Timer>4:32</Timer>
      </Container>
      <Container>Answered: 7 / 10</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: var(--highlight-screen-shadow);
`;
const Container = styled.div`
  font-size: 1.4rem;
  padding: 0px 20px;
`;
const Timer = styled.span`
  color: var(--hover-main-text);
  text-shadow: var(--hover-main-text-shadow);
`;

export default StatusBar;

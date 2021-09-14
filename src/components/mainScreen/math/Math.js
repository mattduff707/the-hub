import { useState } from 'react';
import styled from 'styled-components';
import InactiveGame from './inactiveGame/InactiveGame';
import ActiveGame from './activeGame/ActiveGame';
import CompletedGame from './completedGame/CompletedGame';

const Math = () => {
  const inactiveGame = 'inactive';
  const activeGame = 'active';
  const completedGame = 'completedGame';

  const [gameState, setGameState] = useState(inactiveGame);

  const handleGameStart = () => {
    setGameState(() => activeGame);
  };

  if (gameState === inactiveGame) {
    return (
      <Wrapper>
        <InactiveGame handleGameStart={handleGameStart} />
      </Wrapper>
    );
  } else if (gameState === activeGame) {
    return (
      <Wrapper>
        <ActiveGame />
      </Wrapper>
    );
  } else if (gameState === completedGame) {
    return (
      <Wrapper style={{ justifyContent: 'center' }}>
        <CompletedGame />
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
  text-shadow: var(--shadow-text);
`;
export default Math;

import { useState } from 'react';
import styled from 'styled-components';
import InactiveGame from './inactiveGame/InactiveGame';
import ActiveGame from './activeGame/ActiveGame';

const Math = () => {
  const inactiveGame = 'inactive';
  const activeGame = 'active';
  // const completedGame = 'completedGame';

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
  }
};

const Wrapper = styled.section`
  width: 100%;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
  text-shadow: var(--shadow-text);
`;
export default Math;

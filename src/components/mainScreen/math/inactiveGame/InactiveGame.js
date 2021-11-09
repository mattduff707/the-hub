import React from 'react';
import PageTitle from '../../PageTitle';
import Rules from './Rules';
import Settings from './Settings';

const InactiveGame = ({
  handleGameStart,
  handleLengthChange,
  gameLength,
  gameOperations,
  handleOperationsChange,
  gameDifficulty,
  handleDifficultyChange,
}) => {
  return (
    <>
      <PageTitle style={{ marginTop: '20px' }}>Math Blitz</PageTitle>
      <Rules isDisabled={gameOperations.length < 1} />
      <Settings
        handleGameStart={handleGameStart}
        gameLength={gameLength}
        handleLengthChange={handleLengthChange}
        gameOperations={gameOperations}
        handleOperationsChange={handleOperationsChange}
        gameDifficulty={gameDifficulty}
        handleDifficultyChange={handleDifficultyChange}
      />
    </>
  );
};

export default InactiveGame;

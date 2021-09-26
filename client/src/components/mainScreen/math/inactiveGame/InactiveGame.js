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
      <PageTitle>Math Blitz</PageTitle>
      <Rules />
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

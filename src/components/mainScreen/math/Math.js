import { useState, useCallback } from 'react';
import styled from 'styled-components';
import InactiveGame from './inactiveGame/InactiveGame';
import ActiveGame from './activeGame/ActiveGame';
import CompletedGame from './completedGame/CompletedGame';
import generateQuestions, { operationsArr, difficultiesArr } from './generateQuestions';

const Math = () => {
  const inactiveGame = 'inactive';
  const activeGame = 'active';
  const completedGame = 'completedGame';
  const questionTotal = 60;

  const [gameState, setGameState] = useState(inactiveGame);
  const [gameLength, setGameLength] = useState(5);
  const [gameOperations, setGameOperations] = useState([...operationsArr]);
  const [gameDifficulty, setGameDifficulty] = useState(difficultiesArr[1]);
  const [gameQuestions, setGameQuestions] = useState([]);
  const [correctQuestions, setCorrectQuestions] = useState([]);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  /*Settings handlers*/
  const handleLengthChange = (e) => {
    e.preventDefault();
    setGameLength(() => e.target.value);
  };
  const handleOperationsChange = (e) => {
    const operation = e.target.value;
    if (gameOperations.includes(operation)) {
      const filteredOperations = gameOperations.filter((val) => val !== operation);
      setGameOperations(() => filteredOperations);
    } else {
      setGameOperations(() => [...gameOperations, operation]);
    }
  };
  const handleDifficultyChange = (e) => {
    e.preventDefault();
    setGameDifficulty(() => e.target.value);
  };

  const handleGameStart = () => {
    setGameQuestions(generateQuestions(gameDifficulty, gameOperations, questionTotal));
    setGameState(() => activeGame);
  };
  /********/

  /*Question Handlers*/
  const handleIsCorrect = useCallback(
    (isCorrect, questionObj) => {
      if (isCorrect) {
        setCorrectQuestions(() => [...correctQuestions, questionObj]);
      } else {
        setIncorrectQuestions(() => [...incorrectQuestions, questionObj]);
      }
    },
    [correctQuestions, incorrectQuestions]
  );
  /*Game over Handlers*/
  const endGame = useCallback(() => {
    setGameState(() => completedGame);
  }, [setGameState, completedGame]);
  const exitGame = () => setGameState(() => inactiveGame);

  /******/

  if (gameState === inactiveGame) {
    return (
      <Wrapper>
        <InactiveGame
          handleGameStart={handleGameStart}
          gameLength={gameLength}
          handleLengthChange={handleLengthChange}
          gameOperations={gameOperations}
          handleOperationsChange={handleOperationsChange}
          gameDifficulty={gameDifficulty}
          handleDifficultyChange={handleDifficultyChange}
        />
      </Wrapper>
    );
  } else if (gameState === activeGame) {
    return (
      <Wrapper>
        <ActiveGame
          gameQuestions={gameQuestions}
          gameLength={gameLength}
          handleIsCorrect={handleIsCorrect}
          correctQuestions={correctQuestions}
          incorrectQuestions={incorrectQuestions}
          endGame={endGame}
        />
      </Wrapper>
    );
  } else if (gameState === completedGame) {
    return (
      <Wrapper style={{ justifyContent: 'center' }}>
        <CompletedGame
          correctQuestions={correctQuestions}
          incorrectQuestions={incorrectQuestions}
          gameOperations={gameOperations}
          handleGameStart={handleGameStart}
          exitGame={exitGame}
        />
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

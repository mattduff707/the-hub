import React from 'react';
import styled from 'styled-components';

const Difficulty = ({ gameDifficulty, handleDifficultyChange }) => {
  return (
    <>
      <StyledLabel htmlFor="difficulty">Difficulty:</StyledLabel>
      <DifficultySetting value={gameDifficulty} onChange={handleDifficultyChange} id="difficulty" name="difficulty">
        <option value="easy">Easy</option>
        <option defaultValue value="medium">
          Medium
        </option>
        <option value="hard">Hard</option>
      </DifficultySetting>
    </>
  );
};
const StyledLabel = styled.label`
  padding-right: 5px;
`;
const DifficultySetting = styled.select`
  background: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  color: var(--color-text);
  font-size: 1rem;
  padding: 5px;
  text-shadow: inherit;

  & > option {
    background-color: var(--color-screen);
  }
`;

export default Difficulty;

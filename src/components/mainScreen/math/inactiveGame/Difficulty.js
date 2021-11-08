import React from 'react';
import styled from 'styled-components';
import { difficultiesArr } from '../generateQuestions';

const Difficulty = ({ gameDifficulty, handleDifficultyChange }) => {
  return (
    <>
      <StyledLabel htmlFor="difficulty">Difficulty:</StyledLabel>
      <DifficultySetting value={gameDifficulty} onChange={handleDifficultyChange} id="difficulty" name="difficulty">
        {difficultiesArr.map((difficultyVal) => {
          return (
            <option key={difficultyVal} value={difficultyVal}>
              {difficultyVal}
            </option>
          );
        })}
      </DifficultySetting>
    </>
  );
};
const StyledLabel = styled.label`
  padding-right: 5px;
`;
const DifficultySetting = styled.select`
  background: var(--screen-color);
  border: var(--screen-border-thin);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  color: var(--color-text);
  font-size: 1rem;
  padding: 5px;
  text-transform: capitalize;
  transition: var(--highlight-transition);
  outline: none;
  &:focus {
    background: var(--screen-color-bright);
    border: var(--highlight-border-thin);
  }
  & > option {
    background-color: var(--screen-color-bright);
    text-transform: capitalize;
  }
`;

export default Difficulty;

import React from "react";
import styled from "styled-components";
import { difficultiesArr } from "../generateQuestions";

const Difficulty = ({ gameDifficulty, handleDifficultyChange }) => {
  return (
    <>
      <StyledLabel htmlFor="difficulty">Difficulty:</StyledLabel>
      <DifficultySetting
        value={gameDifficulty}
        onChange={handleDifficultyChange}
        id="difficulty"
        name="difficulty"
      >
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
  background: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  color: var(--color-text);
  font-size: 1rem;
  padding: 5px;
  text-transform: capitalize;
  & > option {
    background-color: var(--color-screen);
    text-transform: capitalize;
  }
`;

export default Difficulty;

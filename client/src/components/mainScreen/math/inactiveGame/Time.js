import React from 'react';
import styled from 'styled-components';

const Time = ({ gameLength, handleLengthChange }) => {
  return (
    <>
      <StyledLabel htmlFor="time">Time (Minutes):</StyledLabel>
      <TimeSetting value={gameLength} onChange={handleLengthChange} id="time" name="time">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5" defaultValue>
          5
        </option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </TimeSetting>
    </>
  );
};
const StyledLabel = styled.label`
  padding-right: 5px;
`;
const TimeSetting = styled.select`
  background: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  color: var(--color-text);
  font-size: 1rem;
  padding: 5px;
`;

export default Time;

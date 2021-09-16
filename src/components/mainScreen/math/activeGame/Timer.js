import React from 'react';
import Countdown from 'react-countdown';
import styled from 'styled-components';

const renderer = ({ minutes, seconds }) => {
  return (
    <StyledTimer minutes={minutes}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </StyledTimer>
  );
};
const Timer = ({ className, gameLength }) => {
  const getTime = (minutes) => {
    return minutes * 60000;
  };
  return (
    <>
      <Countdown className={className} date={Date.now() + getTime(gameLength)} renderer={renderer} />
    </>
  );
};

const StyledTimer = styled.span`
  color: ${(props) => (props.minutes < 1 ? `var(--hover-danger)` : `var(--hover-main-text)`)};
  text-shadow: ${(props) => (props.minutes < 1 ? `var(--hover-danger-text-shadow)` : `var(--hover-main-text-shadow)`)};
  padding-left: 5px;
`;

export default Timer;

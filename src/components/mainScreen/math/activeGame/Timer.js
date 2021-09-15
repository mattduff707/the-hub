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
const Timer = ({ className, time }) => {
  return (
    <>
      <Countdown className={className} date={Date.now() + 70000} renderer={renderer} />
    </>
  );
};

const StyledTimer = styled.span`
  color: ${(props) => (props.minutes < 1 ? `var(--hover-danger)` : `var(--hover-main-text)`)};
  text-shadow: ${(props) => (props.minutes < 1 ? `var(--hover-danger-text-shadow)` : `var(--hover-main-text-shadow)`)};
`;

export default Timer;

import React from "react";
import Countdown from "react-countdown";
import styled from "styled-components";

const renderer = ({ minutes, seconds }) => {
  return (
    <StyledTimer minutes={minutes}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </StyledTimer>
  );
};
const Timer = ({ className, gameLength, endGame }) => {
  const getTime = (minutes) => {
    return minutes * 60000;
  };
  return (
    <>
      <Countdown
        onComplete={endGame}
        className={className}
        date={Date.now() + getTime(gameLength)}
        renderer={renderer}
      />
    </>
  );
};

const StyledTimer = styled.span`
  color: ${(props) =>
    props.minutes < 1 ? `var(--hover-danger)` : `var(--hover-main-text)`};
  padding-left: 5px;
`;

export const MemoizedTimer = React.memo(Timer);

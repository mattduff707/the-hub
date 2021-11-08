import React from 'react';
import styled from 'styled-components';

const CircleProjector = () => {
  return (
    <Circle>
      <Light />
    </Circle>
  );
};

const Circle = styled.div`
  position: absolute;

  border-radius: 50%;
  border-right: 6px solid var(--highlight-main-border-dark);
  border-bottom: 6px solid var(--highlight-main-border-dark);
  border-top: 4px solid var(--highlight-main-border-light);
  border-left: 4px solid var(--highlight-main-border-light);
  padding: 5px;
  background-color: var(--highlight-main);
  box-shadow: 0px 0px 5px 1px var(--shadow-main);
`;
const Light = styled.div`
  border-radius: 50%;
  border: 2px solid var(--alternative-);
  background: var(--highlight-alternative);
  border: 2px solid var(--highlight-alternative-border-light);
  padding: 10px;
  box-shadow: 0px 0px 20px hsla(220, 90%, 56%, 1);
`;

export default CircleProjector;

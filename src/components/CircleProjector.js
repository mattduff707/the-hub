import React from 'react';
import styled from 'styled-components';

const CircleProjector = ({ className }) => {
  return (
    <Circle className={className}>
      <Light />
    </Circle>
  );
};

const Circle = styled.div`
  --projector-border-dark: hsl(0, 0%, 30%);
  --projector-border-light: hsl(0, 0%, 40%);
  --projector-background: hsl(0, 0%, 50%);
  position: absolute;

  border-radius: 50%;
  padding: 8px;
  background-color: var(--projector-background);
  border: 8px solid hsl(0, 0%, 30%);
  border-top: 6px solid var(--projector-border-light);
  border-left: 6px solid var(--projector-border-light);
  box-shadow: 0px 0px 4px black;
  @media (max-width: 1440px) {
    padding: 6px;
  }
  z-index: 20;
`;
const Light = styled.div`
  border-radius: 50%;
  border: var(--screen-border-thin);
  background-color: var(--screen-color);
  padding: 12px;
  box-shadow: 0px 0px 12px 6px var(--screen-color);
  @media (max-width: 1440px) {
    padding: 10px;
  }
`;

export default CircleProjector;

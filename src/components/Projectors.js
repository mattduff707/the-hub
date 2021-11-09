import React from 'react';
import styled from 'styled-components';
import CircleProjector from './CircleProjector';

const Projectors = () => {
  return (
    <>
      <UL />
      <UR />
      <LR />
      <LL />
    </>
  );
};
const UL = styled(CircleProjector)`
  top: 16px;
  left: 16px;
`;
const UR = styled(CircleProjector)`
  top: 16px;
  right: 16px;
`;
const LR = styled(CircleProjector)`
  bottom: 16px;
  right: 16px;
`;
const LL = styled(CircleProjector)`
  bottom: 16px;
  left: 16px;
`;

export default Projectors;

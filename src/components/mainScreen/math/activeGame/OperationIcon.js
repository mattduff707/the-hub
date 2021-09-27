import React from 'react';
import AdditionIcon from '../../../../icons/Addition';
import SubtractionIcon from '../../../../icons/Subtraction';
import MultiplicationIcon from '../../../../icons/Multiplication';
import styled from 'styled-components';

const OperationIcon = ({ operation }) => {
  return (
    <>
      {operation === 'addition' ? (
        <StyledAdditionIcon />
      ) : operation === 'subtraction' ? (
        <StyledSubtractionIcon />
      ) : (
        <StyledMultiplicationIcon />
      )}
    </>
  );
};
const StyledSubtractionIcon = styled(SubtractionIcon)`
  height: 16px;
  width: 16px;
  margin: 0px 4px;
`;
const StyledMultiplicationIcon = styled(MultiplicationIcon)`
  height: 16px;
  width: 16px;
  margin: 0px 4px;
`;
const StyledAdditionIcon = styled(AdditionIcon)`
  height: 16px;
  width: 16px;
  margin: 0px 4px;
`;

export default OperationIcon;

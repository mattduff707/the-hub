import React from 'react';
import styled from 'styled-components';

const Error = ({ children, tag }) => {
  return <StyledError as={tag}>{children}</StyledError>;
};

const StyledError = styled.p`
  border: var(--screen-border-thin);
  background: var(--screen-color);
  color: var(--danger);
  font-size: 3rem;
  padding: 10px;
  border-radius: 8px;
`;

export default Error;

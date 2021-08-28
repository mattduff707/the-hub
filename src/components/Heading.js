import React from 'react';
import styled from 'styled-components';

const Heading = ({ tag, children }) => {
  return <StyledHeading as={tag}>{children}</StyledHeading>;
};

const StyledHeading = styled.h2`
  font-size: 24px;
  text-shadow: var(--shadow-text);
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  padding: 5px 15px;
  margin-bottom: 20px;
`;

export default Heading;

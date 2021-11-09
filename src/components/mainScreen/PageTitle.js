import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ children, className, style }) => {
  return (
    <Wrapper style={style} className={className}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--color-text);
  background-color: var(--screen-color);
  border: var(--screen-border-thin);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  border-radius: 8px;
  padding: 20px 40px;
`;

export default PageTitle;

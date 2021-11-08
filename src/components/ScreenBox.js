import React from 'react';
import styled from 'styled-components';

const ScreenBox = ({ className, tag, children }) => {
  return (
    <Wrapper className={className} as={tag}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: var(--color-text);
  background-color: var(--screen-color);
  border: var(--screen-border-thin);
  border-radius: 8px;
`;

export default ScreenBox;

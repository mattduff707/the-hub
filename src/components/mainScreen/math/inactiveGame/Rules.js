import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesWrapper>
      <RulesTitle>How to play</RulesTitle>
      <RulesText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt sequi quo expedita inventore,
        impedit explicabo delectus minus quasi aspernatur laborum labore maiores ut quisquam fuga natus perspiciatis,
        nam molestiae.
      </RulesText>
    </RulesWrapper>
  );
};
const RulesWrapper = styled.div`
  letter-spacing: 2px;
  color: var(--color-text);
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  max-width: 500px;
`;
const RulesTitle = styled.h2`
  font-size: 1.8rem;
  text-shadow: var(--shadow-text);
  font-weight: 400;
  padding-bottom: 10px;
`;
const RulesText = styled.p`
  text-shadow: var(--shadow-text);
`;

export default Rules;

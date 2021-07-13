import React from "react";
import styled from "styled-components";

const Clock = () => {
  return (
    <Wrapper>
      <ClockContainer>
        <time>10:34</time>
      </ClockContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid blue; */
  height: 100px;
  display: flex;
  justify-content: center;
`;
const ClockContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  width: 250px;
  border-radius: 0px 0px 100% 100%;
  border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  box-shadow: var(--inset-shadow);
  background-color: var(--shadow-main);
  font-family: var(--font-family-main);
  color: var(--color-text);
  font-size: 4rem;
`;

export default Clock;

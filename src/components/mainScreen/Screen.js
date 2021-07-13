import React from "react";
import styled from "styled-components";

const Screen = () => {
  return (
    <Wrapper>
      <ScreenContainer></ScreenContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex: 5;
  /* border: 2px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;
const ScreenContainer = styled.div`
  border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  border-radius: 20px;
  background-color: var(--shadow-main);
  box-shadow: var(--inset-shadow);

  width: 100%;
  height: 100%;
`;

export default Screen;

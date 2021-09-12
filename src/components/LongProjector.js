import React from "react";
import styled from "styled-components";

const LongProjector = ({ bottom, top }) => {
  if (bottom) {
    return (
      <BottomIlluminate>
        <BottomWrapper>
          <Light />
        </BottomWrapper>
      </BottomIlluminate>
    );
  }
  if (top) {
    return (
      <TopIlluminate>
        <TopWrapper>
          <Light />
        </TopWrapper>
      </TopIlluminate>
    );
  }

  return (
    <Wrapper>
      <Light />
    </Wrapper>
  );
};

const Illuminate = styled.div`
  width: 80%;
  z-index: 20;
  position: absolute;
`;
const BottomIlluminate = styled(Illuminate)`
  border-radius: 15px 15px 50px 50px;
  transform: rotate(180deg);
  box-shadow: 0px 30px 20px var(--highlight-alternative-border-light);
  bottom: -20px;
`;
const TopIlluminate = styled(Illuminate)`
  border-radius: 15px 15px 50px 50px;
  box-shadow: 0px 30px 20px var(--highlight-alternative-border-light);
  top: -20px;
`;
const Wrapper = styled.div`
  height: 40px;
  border-radius: 30px 30px 30px 30px;

  background-color: var(--highlight-main);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Light = styled.div`
  background: var(--highlight-alternative);
  border: 2px solid var(--highlight-alternative-border-light);
  width: 80%;
  height: 12px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px hsla(220, 90%, 56%, 1);
`;

const TopWrapper = styled(Wrapper)`
  border-bottom: 5px solid var(--highlight-main-border-dark);
  border-right: 5px solid var(--highlight-main-border-dark);
  border-left: 5px solid var(--highlight-main-border-light);
  border-top: 3px solid var(--highlight-main-border-light);
  box-shadow: 0px 0px 5px var(--shadow-main);
`;
const BottomWrapper = styled(Wrapper)`
  border-bottom: 3px solid var(--highlight-main-border-light);
  border-right: 5px solid var(--highlight-main-border-light);
  border-left: 5px solid var(--highlight-main-border-dark);
  border-top: 5px solid var(--highlight-main-border-dark);
  box-shadow: 0px 0px 5px var(--shadow-main);
`;

export default LongProjector;

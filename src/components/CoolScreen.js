import React from "react";
import styled from "styled-components";

const CoolScreen = ({ children, sideScreen, className, clockScreenWrapper }) => {
  if (clockScreenWrapper) {
    return <ClockScreenWrapper className={className}>{children}</ClockScreenWrapper>;
  }
  if (sideScreen) {
    return <SideScreenWrapper className={className}>{children}</SideScreenWrapper>;
  }
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 99%;
  /* transform: translate(-6px, -7px); */
  height: 99%;
  /* max-height: 100%; */
  /* border: 2px solid red; */
  list-style: none;
  /* isolation: isolate; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(var(--color-alternative), var(--highlight-alternative-border-light));
  border-right: 2px solid var(--highlight-alternative-border-light);
  border-left: 2px solid var(--highlight-alternative-border-light);
  border-top: 2px solid var(--highlight-alternative-border-light);
  border-bottom: 2px solid var(--highlight-alternative-border-light);
  border-radius: 22px;
  box-shadow: 0px 0px 60px var(--color-alternative);
  opacity: 1;
  /* overflow-y: auto; */
`;
const SideScreenWrapper = styled(Wrapper)`
  background: linear-gradient(
    to bottom,
    var(--highlight-alternative-border-light),
    var(--color-alternative),
    var(--highlight-alternative-border-light)
  );
`;
const ClockScreenWrapper = styled(Wrapper)`
  background: linear-gradient(to top, var(--highlight-alternative-border-light) 30%, var(--color-alternative));
`;

export default CoolScreen;

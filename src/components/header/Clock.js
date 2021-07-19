import React from "react";
import styled from "styled-components";
import CoolScreen from "../CoolScreen";
import ScreenIndent from "../ScreenIndent";

const Clock = () => {
  return (
    <Wrapper>
      <ClockContainer>
        <ClockScreenIndent clock>
          <ClockCoolScreen clockScreenWrapper>
            <BorderWrapper>
              <ClockTime>10:34</ClockTime>
              <AMPM>
                <AM active={false}>AM</AM>
                <PM active={true}>PM</PM>
              </AMPM>
            </BorderWrapper>
          </ClockCoolScreen>
        </ClockScreenIndent>
      </ClockContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid blue; */
  height: 110px;
  display: flex;
  justify-content: center;
`;
const ClockContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  width: 250px;
  font-family: var(--font-family-main);
  color: var(--color-text);
  font-size: 4rem;
`;
const ClockScreenIndent = styled(ScreenIndent)`
  border-radius: 0px 0px 50% 50%;
`;
const ClockCoolScreen = styled(CoolScreen)`
  border-radius: 0px 0px 50% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  flex-direction: row;
`;
const BorderWrapper = styled.div`
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  background-color: var(--color-screen);
  display: flex;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
`;
const ClockTime = styled.time`
  font-family: var(--font-family-main);
  font-size: 40px;
  text-shadow: var(--shadow-text);
  border-radius: 8px;
`;
const AMPM = styled.span`
  padding-left: 10px;
`;
const AM = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) =>
    props.active ? "var(--color-text-highlight)" : "var(--color-text)"};
`;
const PM = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) =>
    props.active ? "var(--color-text-highlight)" : "var(--color-text)"};
  text-shadow: ${(props) =>
    props.active ? "var(--shadow-text-highlight)" : "var(--shadow-text)"};
`;

export default Clock;

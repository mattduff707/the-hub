import React from 'react';
import styled from 'styled-components';
import PageTitle from '../PageTitle';

const Math = () => {
  return (
    <Wrapper>
      <PageTitle>Math Blitz</PageTitle>
      <RulesWrapper>
        <RulesTitle>How to play</RulesTitle>
        <RulesText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt sequi quo expedita inventore,
          impedit explicabo delectus minus quasi aspernatur laborum labore maiores ut quisquam fuga natus perspiciatis,
          nam molestiae.
        </RulesText>
      </RulesWrapper>
      <SettingsWrapper>
        <SettingsTitle>Settings</SettingsTitle>
        <SettingsForm>
          <SettingContainer>
            <SettingsLabel for="time">Time (Minutes):</SettingsLabel>
            <TimeSetting id="time" name="time">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </TimeSetting>
          </SettingContainer>
          <SettingContainer>
            <OperationsTitle>Operations:</OperationsTitle>
            <OperationsLabel for="addition">+</OperationsLabel>
            <OperationsSetting type="checkbox" id="addition" name="operations" value="addition" />
            <OperationsLabel for="subtraction">-</OperationsLabel>
            <OperationsSetting type="checkbox" id="subtraction" name="operations" value="subtraction" />
            <OperationsLabel for="multiplication">x</OperationsLabel>
            <OperationsSetting type="checkbox" id="multiplication" name="operations" value="multiplication" />
          </SettingContainer>
          <SettingContainer>
            <SettingsLabel for="difficulty">Difficulty:</SettingsLabel>
            <DifficultySetting id="difficulty" name="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </DifficultySetting>
          </SettingContainer>
          <BtnWrapper>
            <StartBtn>Start</StartBtn>
          </BtnWrapper>
        </SettingsForm>
      </SettingsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
const SettingsWrapper = styled.div`
  letter-spacing: 2px;
  color: var(--color-text);
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
`;
const SettingsTitle = styled.h2`
  font-size: 1.8rem;
  text-shadow: var(--shadow-text);
  font-weight: 400;
  padding-bottom: 10px;
`;
const SettingsForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;
const SettingsLabel = styled.label`
  padding-right: 5px;
`;
const OperationsLabel = styled(SettingsLabel)`
  padding-right: 0px;
`;
const TimeSetting = styled.select`
  background: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  color: var(--color-text);
  font-size: 1rem;
  padding: 5px;
`;
const OperationsTitle = styled.p`
  padding-right: 5px;
`;
const OperationsSetting = styled.input`
  margin-right: 5px;
`;
const DifficultySetting = styled.select`
  background: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  color: var(--color-text);
  font-size: 1rem;
  padding: 5px;
  text-shadow: inherit;

  & > option {
    background-color: var(--color-screen);
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
`;
const StartBtn = styled.button``;

export default Math;

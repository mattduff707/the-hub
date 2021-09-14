import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';

const Settings = ({ handleGameStart }) => {
  return (
    <SettingsWrapper>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsForm>
        <SettingContainer>
          <SettingsLabel htmlFor="time">Time (Minutes):</SettingsLabel>
          <TimeSetting id="time" name="time">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5" defaultValue>
              5
            </option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </TimeSetting>
        </SettingContainer>
        <SettingContainer>
          <OperationsTitle>Operations:</OperationsTitle>
          <OperationsLabel htmlFor="addition">+</OperationsLabel>
          <OperationsSetting type="checkbox" id="addition" name="operations" value="addition" />
          <OperationsLabel htmlFor="subtraction">-</OperationsLabel>
          <OperationsSetting type="checkbox" id="subtraction" name="operations" value="subtraction" />
          <OperationsLabel htmlFor="multiplication">x</OperationsLabel>
          <OperationsSetting type="checkbox" id="multiplication" name="operations" value="multiplication" />
        </SettingContainer>
        <SettingContainer>
          <SettingsLabel htmlFor="difficulty">Difficulty:</SettingsLabel>
          <DifficultySetting id="difficulty" name="difficulty">
            <option value="easy">Easy</option>
            <option defaultValue value="medium">
              Medium
            </option>
            <option value="hard">Hard</option>
          </DifficultySetting>
        </SettingContainer>
        <BtnWrapper>
          <StartBtn onClick={handleGameStart}>Start</StartBtn>
        </BtnWrapper>
      </SettingsForm>
    </SettingsWrapper>
  );
};
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
const StartBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1.2rem;
`;

export default Settings;

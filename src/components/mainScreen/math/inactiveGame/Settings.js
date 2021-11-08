import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';
import Operations from './Operations';
import Time from './Time';
import Difficulty from './Difficulty';
import ScreenBox from '../../../ScreenBox';

const Settings = ({
  handleGameStart,
  handleLengthChange,
  gameLength,
  gameOperations,
  handleOperationsChange,
  gameDifficulty,
  handleDifficultyChange,
}) => {
  return (
    <SettingsWrapper>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsForm aria-label="Settings form" onSubmit={handleGameStart}>
        <SettingContainer>
          <Time gameLength={gameLength} handleLengthChange={handleLengthChange} />
        </SettingContainer>
        <SettingContainer>
          <Operations gameOperations={gameOperations} handleOperationsChange={handleOperationsChange} />
        </SettingContainer>
        <SettingContainer>
          <Difficulty gameDifficulty={gameDifficulty} handleDifficultyChange={handleDifficultyChange} />
        </SettingContainer>
        <BtnWrapper>
          <StartBtn isPlayable={gameOperations.length > 0} type="submit">
            Start
          </StartBtn>
        </BtnWrapper>
      </SettingsForm>
    </SettingsWrapper>
  );
};
const SettingsWrapper = styled(ScreenBox)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  letter-spacing: 2px;
`;
const SettingsTitle = styled.h2`
  font-size: 1.8rem;
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

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
`;
const StartBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1.2rem;
  background-color: ${(props) => !props.isPlayable && `var(--danger-bg)`};
  box-shadow: ${(props) => !props.isPlayable && `var(--danger-shadow)`};
  border: ${(props) => !props.isPlayable && `var(--danger-border-thin)`};
  cursor: ${(props) => !props.isPlayable && `not-allowed`};
  &:hover {
    background-color: ${(props) => !props.isPlayable && `var(--danger-bg)`};
    box-shadow: ${(props) => !props.isPlayable && `var(--danger-shadow)`};
    border: ${(props) => !props.isPlayable && `var(--danger-border-thin)`};
  }
`;

export default Settings;

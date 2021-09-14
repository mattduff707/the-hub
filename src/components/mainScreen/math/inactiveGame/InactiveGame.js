import React from 'react';
import PageTitle from '../../PageTitle';
import Rules from './Rules';
import Settings from './Settings';

const InactiveGame = ({ handleGameStart }) => {
  return (
    <>
      <PageTitle>Math Blitz</PageTitle>
      <Rules />
      <Settings handleGameStart={handleGameStart} />
    </>
  );
};

export default InactiveGame;

import styled from 'styled-components';

const Score = ({ valOne, valTwo, operation }) => {
  return (
    <ScoreWrapper>
      {operation}: {valOne} / {valTwo}
    </ScoreWrapper>
  );
};

const ScoreWrapper = styled.p`
  font-size: 1.5rem;
  padding: 5px 0px;
  text-transform: capitalize;
`;

export default Score;

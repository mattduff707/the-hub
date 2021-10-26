import React from 'react';
import styled from 'styled-components';
import useFetch from '../../../services/useFetch';
import APOD from './APOD';
import Heading from '../../Heading';
import PageTitle from '../PageTitle';
import Loading from '../../Loading';

const Home = () => {
  const { data, loading, error } = useFetch(process.env.REACT_APP_APOD_URL);

  if (error) {
    return (
      <AlertWrapper>
        <Error>Error!</Error>
      </AlertWrapper>
    );
  }
  if (data) {
    return (
      <Wrapper>
        <Title>Welcome, Matthew!</Title>
        <APOD data={data} loading={loading} error={error} />
      </Wrapper>
    );
  }
  return (
    <AlertWrapper>
      <Loading />
    </AlertWrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100%;
  /* border: 2px solid green; */
`;
const AlertWrapper = styled(Wrapper)`
  justify-content: center;
  min-height: 100%;
`;

const Title = styled(PageTitle)`
  margin-bottom: 40px;
`;
const Error = styled(Heading)`
  color: var(--hover-danger);
  text-shadow: var(--hover-danger-text-shadow);
`;

export default Home;

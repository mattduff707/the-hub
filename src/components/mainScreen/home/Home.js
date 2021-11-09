import React from 'react';
import styled from 'styled-components';
import useFetch from '../../../services/useFetch';
import APOD from './APOD';
import Loading from '../../Loading';
import Error from '../../Error';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  /* overflow: auto; */
  /* border: 2px solid green; */
`;
const AlertWrapper = styled(Wrapper)`
  justify-content: center;
  min-height: 100%;
`;

export default Home;

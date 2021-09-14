import React from 'react';
import styled from 'styled-components';
import useFetch from '../../../services/useFetch';
import APOD from './APOD';
import Heading from '../../Heading';
import PageTitle from '../PageTitle';

const Home = () => {
  const { data, loading, error } = useFetch(
    'https://api.nasa.gov/planetary/apod?api_key=kXzpTPi9EJQUUhl0fZVNK2S8owEeuPVogzGowgOR'
  );

  if (error) {
    return <Heading>Error!</Heading>;
  }
  if (data) {
    return (
      <Wrapper>
        <Title>Welcome, Matthew!</Title>
        <APOD data={data} loading={loading} error={error} />
      </Wrapper>
    );
  }
  return <Heading>Loading...</Heading>;
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* height: 100%; */
  width: 100%;
  /* border: 2px solid green; */
  /* overflow-y: auto; */
`;

const Title = styled(PageTitle)`
  margin-bottom: 40px;
`;

export default Home;

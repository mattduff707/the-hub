import React, { useEffect } from "react";
import styled from "styled-components";
import useFetch from "../../../services/useFetch";
import APOD from "./APOD";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=kXzpTPi9EJQUUhl0fZVNK2S8owEeuPVogzGowgOR"
  );

  console.log(data);

  if (data) {
    return (
      <Wrapper>
        <Title>Welcome, Matthew</Title>
        <APOD data={data} loading={loading} error={error} />
      </Wrapper>
    );
  }
  return <div>Error</div>;
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

const Title = styled.h1`
  font-size: 40px;
  text-shadow: var(--shadow-text);
  font-weight: 400;
  letter-spacing: 2px;
  color: var(--color-text);
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  border-radius: 8px;
  padding: 20px 40px;
  margin-bottom: 40px;
`;

export default Home;

import React from "react";
import styled from "styled-components";
import useFetch from "../../../services/useFetch";
import APOD from "./APOD";
import Heading from "../../Heading";
import Loading from "../../Loading";

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
  /* overflow: auto; */
  /* border: 2px solid green; */
`;
const AlertWrapper = styled(Wrapper)`
  justify-content: center;
  min-height: 100%;
`;
const Error = styled(Heading)`
  color: var(--danger-color);
`;

export default Home;

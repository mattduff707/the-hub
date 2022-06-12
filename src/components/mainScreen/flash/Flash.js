import React from "react";
import styled from "styled-components";
import PageTitle from "../PageTitle";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Flash = () => {
  return (
    <Wrapper>
      <PageTitle style={{ marginTop: "20px" }}>Flash</PageTitle>
    </Wrapper>
  );
};

export default Flash;

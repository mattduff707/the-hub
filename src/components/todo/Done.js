import React from "react";
import styled from "styled-components";

const Done = () => {
  return (
    <Wrapper>
      <h3>Done</h3>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  flex: 1;
  border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  border-radius: 20px;
  box-shadow: var(--inset-shadow);
  background-color: var(--shadow-main);
  margin-bottom: 20px;
`;

export default Done;

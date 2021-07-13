import React from "react";
import styled from "styled-components";
import CoolButton from "../CoolButton";

const Buttons = () => {
  return (
    <Wrapper>
      <ButtonList>
        <ButtonContainer>
          <CoolButton padding={"30px"}></CoolButton>
        </ButtonContainer>
        <ButtonContainer>
          <CoolButton padding={"30px"}></CoolButton>
        </ButtonContainer>
        <ButtonContainer>
          <CoolButton padding={"30px"}></CoolButton>
        </ButtonContainer>
        <ButtonContainer>
          <CoolButton padding={"30px"}></CoolButton>
        </ButtonContainer>
      </ButtonList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex: 1;
  /* border: 2px solid orange; */
  padding: 0px 40px 30px 40px;
`;
const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: var(--highlight-main);
  /* padding: 20px 0px 50px 0px; */
  height: 100%;
  border-radius: 20px;
  border: 4px solid var(--highlight-main-border-light);
  border-right: 8px solid var(--highlight-main-border-dark);
  border-bottom: 8px solid var(--highlight-main-border-dark);
  box-shadow: 3px 3px 3px var(--shadow-main);
`;
const ButtonContainer = styled.li`
  padding: 10px;
`;
// const CoolButton = styled.button`
//   background-color: red;
// `;

export default Buttons;

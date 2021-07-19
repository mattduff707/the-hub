import React from "react";
import styled from "styled-components";
import CoolButton from "../CoolButton";
import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <Wrapper>
      <ButtonList>
        <ButtonContainer>
          <NavLink exact to="/">
            <CoolButton padding={"30px"}></CoolButton>
          </NavLink>
          <LinkLabel>Home</LinkLabel>
        </ButtonContainer>
        <ButtonContainer>
          <NavLink to="/snippets">
            <CoolButton padding={"30px"}></CoolButton>
          </NavLink>
          <LinkLabel>Snippets</LinkLabel>
        </ButtonContainer>
        <ButtonContainer>
          <NavLink to="/math">
            <CoolButton padding={"30px"}></CoolButton>
          </NavLink>
          <LinkLabel>Math</LinkLabel>
        </ButtonContainer>
        <ButtonContainer>
          <NavLink to="/potd">
            <CoolButton padding={"30px"}></CoolButton>
          </NavLink>
          <LinkLabel>POTD</LinkLabel>
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
  border-left: 8px solid var(--highlight-main-border-light);
  border-right: 8px solid var(--highlight-main-border-dark);
  border-bottom: 8px solid var(--highlight-main-border-dark);
  box-shadow: 5px 5px 8px var(--shadow-main);
`;
const ButtonContainer = styled.li`
  padding: 10px;
  /* border: 2px solid red; */
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LinkLabel = styled.p`
  /* border: 2px solid blue; */
  margin-top: 10px;
`;
export default Buttons;

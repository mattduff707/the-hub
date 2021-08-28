import React from 'react';
import styled from 'styled-components';
import CoolButton from '../CoolButton';
import { NavLink } from 'react-router-dom';
import CoolScreen from '../CoolScreen';

const NavButtons = () => {
  return (
    <Wrapper>
      <ButtonList>
        <ButtonContainer>
          <CoolLink exact to="/">
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel>Home</LinkLabel>
              </LinkScreen>
            </LinkLabelContainer>
          </CoolLink>
        </ButtonContainer>
        <ButtonContainer>
          <CoolLink to="/snippets">
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel>Snippets</LinkLabel>
              </LinkScreen>
            </LinkLabelContainer>
          </CoolLink>
        </ButtonContainer>
        <ButtonContainer>
          <CoolLink to="/math">
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel>Math</LinkLabel>
              </LinkScreen>
            </LinkLabelContainer>
          </CoolLink>
        </ButtonContainer>
        <ButtonContainer>
          <CoolLink to="/potd">
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel>POTD</LinkLabel>
              </LinkScreen>
            </LinkLabelContainer>
          </CoolLink>
        </ButtonContainer>
      </ButtonList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  display: flex;

  justify-content: center;

  /* flex: 1; */
  /* border: 2px solid orange; */
  /* padding: 0px 40px 30px 40px; */
  /* height: 200px; */
`;
const ButtonList = styled.ul`
  width: 80%;
  height: 200px;
  padding-top: 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: var(--highlight-main);
  /* padding: 20px 0px 50px 0px; */
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
const CoolLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LinkLabelContainer = styled.div`
  width: 110px;
  border: 4px solid var(--shadow-main-border-dark);
  border-right: 4px solid var(--shadow-main-border-light);
  border-bottom: 4px solid var(--shadow-main-border-light);
  border-radius: 15px;
  background-color: var(--shadow-main);
  box-shadow: var(--inset-shadow);
  margin-top: 10px;
`;
const LinkScreen = styled(CoolScreen)`
  padding: 5px 10px;
  border-radius: 10px;
`;
const LinkLabel = styled.p`
  font-weight: 600;
  color: var(--color-text);
  text-shadow: 1px 1px 0px var();
  border: 2px solid var(--highlight-screen);
  background-color: var(--color-screen);
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  transition: border-color, box-shadow, background-color;
  transition-duration: 0.4s;
  transition-timing-function: ease;

  ${CoolLink}:hover & {
    border-color: var(--hover-main);
    background-color: var(--hover-main-bg);
    box-shadow: 0px 0px 10px 1px var(--hover-main);

    transition: border-color, box-shadow, background-color;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
`;
export default NavButtons;

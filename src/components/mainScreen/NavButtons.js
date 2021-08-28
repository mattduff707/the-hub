import React, { useState } from 'react';
import styled from 'styled-components';
import CoolButton from '../CoolButton';
import { NavLink } from 'react-router-dom';
import CoolScreen from '../CoolScreen';

const homePath = '/';
const snippetsPath = '/snippets';
const mathPath = '/math';
const potdPath = '/potd';
const NavButtons = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const handleNav = (e) => {
    const path = e.currentTarget.attributes.path.value;

    setCurrentPath(() => path);
  };
  return (
    <Wrapper>
      <ButtonList>
        <ButtonContainer>
          <CoolLink onClick={handleNav} path={homePath} exact to={homePath}>
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel isActive={homePath === currentPath}>Home</LinkLabel>
              </LinkScreen>
            </LinkLabelContainer>
          </CoolLink>
        </ButtonContainer>
        <ButtonContainer>
          <CoolLink onClick={handleNav} path={snippetsPath} to={snippetsPath}>
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel isActive={snippetsPath === currentPath}>Snippets</LinkLabel>
              </LinkScreen>
            </LinkLabelContainer>
          </CoolLink>
        </ButtonContainer>
        <ButtonContainer>
          <CoolLink onClick={handleNav} path={mathPath} to={mathPath}>
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel isActive={mathPath === currentPath}>Math</LinkLabel>
              </LinkScreen>
            </LinkLabelContainer>
          </CoolLink>
        </ButtonContainer>
        <ButtonContainer>
          <CoolLink onClick={handleNav} path={potdPath} to={potdPath}>
            <CoolButton padding={'28px'}></CoolButton>
            <LinkLabelContainer>
              <LinkScreen>
                <LinkLabel isActive={potdPath === currentPath}>POTD</LinkLabel>
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
  color: ${(props) => (props.isActive ? 'var(--hover-confirm)' : 'var(--color-text)')};
  text-shadow: ${(props) => (props.isActive ? 'var(--hover-confirm-shadow)' : 'var(--shadow-text)')};
  border: 2px solid var(--highlight-screen);
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  transition: border-color, box-shadow, background-color;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  background: var(--color-screen);

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

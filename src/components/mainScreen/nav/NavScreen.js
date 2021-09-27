import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ScreenIndent from '../../ScreenIndent';
import CoolScreen from '../../CoolScreen';
import NavButton from './NavButton';
import SnippetsIcon from '../../../icons/Snippets';
import BugIcon from '../../../icons/Bug';
import HomeIcon from '../../../icons/Home';
import MathIcon from '../../../icons/Math';

const homePath = '/';
const snippetsPath = '/snippets';
const mathPath = '/math';
const bugsPath = '/bugs';

const NavScreen = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const handleNav = (e) => {
    const path = e.currentTarget.attributes.path.value;

    setCurrentPath(() => path);
  };

  useEffect(() => {
    window.onpopstate = () => {
      setCurrentPath(() => window.location.pathname);
    };
  }, []);

  return (
    <Wrapper>
      <NavIndent nav>
        <CoolScreen clockScreenWrapper style={{ paddingTop: '0px' }}>
          <NavList>
            <NavButton isActive={homePath === currentPath} handleClick={handleNav} path={homePath} exact>
              <HomeIcon />
              Home
            </NavButton>
            <NavButton isActive={mathPath === currentPath} handleClick={handleNav} path={mathPath}>
              <MathIcon />
              Math
            </NavButton>
            <NavButton inactive isActive={snippetsPath === currentPath} handleClick={handleNav} path={snippetsPath}>
              <SnippetsIcon />
              Snippets
            </NavButton>
            <NavButton inactive isActive={bugsPath === currentPath} handleClick={handleNav} path={bugsPath}>
              <BugIcon />
              Bugs
            </NavButton>
          </NavList>
        </CoolScreen>
      </NavIndent>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 30px;
`;

const NavIndent = styled(ScreenIndent)`
  width: 100%;
  height: 100%;
  /* border: 2px solid red; */
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 100%;
  width: 100%;
`;

export default NavScreen;

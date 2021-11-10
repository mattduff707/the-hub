import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavButton from '../../NavButton';
import SnippetsIcon from '../../../icons/Snippets';
import BugIcon from '../../../icons/Bug';
import HomeIcon from '../../../icons/Home';
import MathIcon from '../../../icons/Math';
import { NavLink } from 'react-router-dom';

const homePath = '/';
const snippetsPath = '/snippets';
const mathPath = '/math';
const bugsPath = '/bugs';
console.log(<NavButton>Paragraph</NavButton>);
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
      <NavList>
        <NavLink exact path={homePath} onClick={handleNav} to={homePath}>
          <NavButton isActive={homePath === currentPath}>
            <p>Home</p>
            <HomeIcon />
          </NavButton>
        </NavLink>
        <NavLink to={mathPath} path={mathPath} onClick={handleNav}>
          <NavButton isActive={mathPath === currentPath}>
            <p>Math</p>
            <MathIcon />
          </NavButton>
        </NavLink>
        <NavLink to={snippetsPath} path={snippetsPath} onClick={handleNav}>
          <NavButton isActive={snippetsPath === currentPath}>
            <p>Snippets</p>
            <SnippetsIcon />
          </NavButton>
        </NavLink>
        <NavButton inactive isActive={bugsPath === currentPath} handleClick={handleNav}>
          <p>Bugs</p>
          <BugIcon />
        </NavButton>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: var(--screen-border);
`;
const NavList = styled.ul`
  /* padding-top: 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  width: 100%;
  overflow: hidden;
  & > a {
    text-decoration: none;
  }
  svg {
    width: 24px;
    height: 24px;
    /* padding-left: 5px; */
    margin-left: 5px;
  }
`;

export default NavScreen;

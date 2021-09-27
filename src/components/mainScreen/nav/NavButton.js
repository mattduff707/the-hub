import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavButton = ({ inactive, children, path, isActive, handleClick }) => {
  if (inactive) {
    return <InactiveLink style={{ padding: '5px' }}>{children}</InactiveLink>;
  }
  return (
    <Wrapper isActive={isActive}>
      <CoolLink onClick={handleClick} to={path} path={path}>
        {children}
      </CoolLink>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100px;
  color: ${(props) => (props.isActive ? 'var(--hover-confirm)' : 'var(--color-text)')};
  text-shadow: ${(props) => (props.isActive ? 'var(--hover-confirm-shadow)' : 'var(--shadow-text)')};
  border: 4px solid var(--highlight-screen);
  border-radius: 8px;
  box-shadow: var(--highlight-screen-shadow);
  background: var(--color-screen);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--hover-main-bg);
    border: 4px solid var(--hover-main);
    box-shadow: var(--hover-main-shadow);
    transition: background, border, box-shadow;
    transition-duration: 0.4s;
    transition-timing-function: ease;
  }
`;
const InactiveLink = styled(Wrapper)`
  text-shadow: var(--hover-danger-text-shadow);
  background: var(--hover-danger);
  border-color: var(--hover-danger-border-color);
  box-shadow: var(--hover-danger-shadow);
  cursor: not-allowed;
  &:hover {
    text-shadow: var(--hover-danger-text-shadow);
    background: var(--hover-danger);
    border-color: var(--hover-danger-border-color);
    box-shadow: var(--hover-danger-shadow);
  }
`;
const CoolLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
`;

export default NavButton;

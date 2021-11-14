import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SideNav = ({ snippets, url }) => {
  return (
    <Wrapper>
      {snippets.map((snippet) => (
        <NavLink to={url + snippet.path}>{snippet.title}</NavLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  & > a {
    color: red;
  }
`;

export default SideNav;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SnippetLink = ({ path, title }) => {
  const activeStyle = {
    color: "var(--highlight)",
  };
  return (
    <Wrapper>
      <SnippetTitle activeStyle={activeStyle} to={path}>
        {title}
      </SnippetTitle>
    </Wrapper>
  );
};
const Wrapper = styled.li`
  width: 100%;
  &:last-child {
    & > a {
      border-bottom: var(--screen-border-thin);
    }
  }
  &:first-child {
    & > a {
      border-top: var(--screen-border-thin);
    }
  }
`;

const SnippetTitle = styled(NavLink)`
  display: block;
  color: var(--color-text);
  text-decoration: none;
  width: 100%;
  border: var(--screen-border-thin);
  border-width: 1px;
  border-left: none;
  border-right: none;
  padding: 2px 5px;
  transition: var(--highlight-transition), color 0.2s ease;
  &:hover {
    border: var(--highlight-border-thin);
    border-left: none;
    border-right: none;
    border-width: 1px;
    background-color: var(--highlight-bg);
    box-shadow: var(--highlight-shadow);
    color: var(--color-text) !important;
  }
`;

export default SnippetLink;

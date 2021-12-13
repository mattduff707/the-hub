import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router";
import SnippetLink from "./SnippetLink";

const Category = ({ name, snippets }) => {
  const { url } = useRouteMatch();
  return (
    <Wrapper>
      <CategoryTitle>{name}</CategoryTitle>
      <SnippetsList>
        {snippets.map((snip) => (
          <SnippetLink
            key={snip.title + Math.random()}
            title={snip.title}
            path={url + snip.path}
          />
        ))}
      </SnippetsList>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  color: var(--color-text);
`;
const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  padding-left: 5px;
  width: 100%;
  background-color: var(--screen-color);
  /* border: var(--screen-border-thin);
  border-left: none;
  border-right: none; */
  text-align: center;
`;

const SnippetsList = styled.ol``;

export default Category;

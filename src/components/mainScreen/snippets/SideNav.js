import React from "react";
import styled from "styled-components";
import CategoryList from "./CategoryList";

const SideNav = ({ snippets, categories }) => {
  return (
    <Wrapper>
      <CategoryList snippets={snippets} categories={categories} />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  border-right: var(--screen-border);
  & > a {
    color: red;
  }
`;

export default SideNav;

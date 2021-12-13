import React from "react";
import styled from "styled-components";
import Category from "./Category";

const CategoryList = ({ categories, snippets }) => {
  return (
    <Wrapper>
      {categories.map((cat) => (
        <Category
          key={Math.random()}
          name={cat}
          snippets={snippets.filter((snip) => snip.category === cat)}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ol`
  list-style: none;
`;
export default CategoryList;

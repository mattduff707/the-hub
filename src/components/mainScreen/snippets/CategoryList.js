import React from "react";
import styled from "styled-components";
import Category from "./Category";

const CategoryList = ({ categories, snippets }) => {
  return (
    <Wrapper>
      {categories.map((cat) => (
        <Category
          name={cat.category}
          snippets={snippets.filter((snip) => snip.category === cat.category)}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ol`
  list-style: none;
`;
export default CategoryList;
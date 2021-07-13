import React from "react";
import styled from "styled-components";
import BookmarksList from "../components/bookmarks/BookmarksList";

const Bookmarks = () => {
  return (
    <Wrapper>
      <BookmarksList />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 4px solid green; */
  flex: 1;
  padding: 40px 40px 30px 0px;
`;

export default Bookmarks;

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
  height: 100%;
  /* padding: 0px 40px 30px 0px; */
  /* overflow: auto; */
  overflow: hidden;
  padding-top: 30px;
  border-left: 2px solid var(--screen-border);
`;

export default Bookmarks;

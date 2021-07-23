import React from "react";
import styled from "styled-components";
import ScreenIndent from "../components/ScreenIndent";
import CoolScreen from "../components/CoolScreen";
import BookmarksList from "../components/bookmarks/BookmarksList";

const Bookmarks = () => {
  return (
    <Wrapper>
      <ScreenIndent long>
        <CoolScreen sideScreen>
          <BookmarksList />
        </CoolScreen>
      </ScreenIndent>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 4px solid green; */
  height: 100%;
  flex: 1;
  padding: 0px 40px 30px 0px;
`;

export default Bookmarks;

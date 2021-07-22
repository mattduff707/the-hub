import React from "react";
import styled from "styled-components";
import Bookmark from "./Bookmark";
import bookmarksData from "../../data/bookmarksData";

const BookmarksList = () => {
  return (
    <Wrapper>
      {bookmarksData.map((i) => {
        return <Bookmark key={i.title} title={i.title} baseURL={i.baseURL} extensions={i.extensions} />;
      })}
      {/* <Bookmark baseURL={"#"} extensions={["Arrays", "Objects", "Promises"]} title="MDN Web Docs: JS" />
      <Bookmark baseURL={"#"} extensions={false} title="W3 Icon Reference" /> */}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px 10px;
`;

export default BookmarksList;

import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import CircleArrow from "../../icons/CircleArrow";
import BookmarkBtns from "./BookmarkBtns";
import IconBtn from "../IconBtn";
import ScreenBox from "../ScreenBox";
import DeleteConfirm from "./DeleteConfirm";

const Bookmark = ({ bookmark, setBookmarkEdit }) => {
  const [isDelete, setIsDelete] = useState(false);
  if (isDelete) {
    return (
      <Wrapper>
        <DeleteConfirm
          _id={bookmark._id}
          setIsDelete={setIsDelete}
          title={bookmark.title}
        />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <BaseAnchor href={bookmark.base_url} target="_blank">
        <Title>{bookmark.title}</Title>
        <IconBtn>
          <CircleArrow />
        </IconBtn>
      </BaseAnchor>
      {bookmark.search_url && <Search search_url={bookmark.search_url} />}
      <BookmarkBtns
        bookmark={bookmark}
        setBookmarkEdit={setBookmarkEdit}
        setIsDelete={setIsDelete}
      />
    </Wrapper>
  );
};

const Wrapper = styled(ScreenBox)`
  width: 100%;
  margin: 10px 0px;
  padding: 10px;
  &:nth-child(2) {
    margin-top: 0px;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
`;
const BaseAnchor = styled(Anchor)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--highlight-screen);
  padding-bottom: 5px;
  &:hover > button {
    color: var(--hover-main-icon);
    filter: drop-shadow(var(--hover-main-icon-shadow));
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  transition: color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ${Anchor}:hover & {
    transition: color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--hover-main);
  }
`;

export default Bookmark;

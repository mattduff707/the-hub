import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import CircleArrow from '../../icons/CircleArrow';
import BookmarkBtns from './BookmarkBtns';
import IconBtn from '../IconBtn';

const Bookmark = ({ bookmark, setBookmarkEdit }) => {
  return (
    <Wrapper>
      <BaseAnchor href={bookmark.base_url} target="_blank">
        <Title>{bookmark.title}</Title>
        <IconBtn>
          <CircleArrow />
        </IconBtn>
      </BaseAnchor>
      {bookmark.search_url && <Search search_url={bookmark.search_url} />}
      <BookmarkBtns bookmark={bookmark} setBookmarkEdit={setBookmarkEdit} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  border: 2px solid var(--highlight-screen);
  background-color: var(--color-screen);
  /* padding: 10px 10px 5px 10px; */
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  margin: 10px 0px;
  padding: 10px;
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
  text-shadow: var(--shadow-text);
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  transition: color, text-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ${Anchor}:hover & {
    transition: color, text-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--hover-main);
    text-shadow: var(--hover-main-text-shadow);
  }
`;

export default Bookmark;

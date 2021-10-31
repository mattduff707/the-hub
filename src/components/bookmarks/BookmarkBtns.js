import React from 'react';
import styled from 'styled-components';
import IconBtn from '../IconBtn';
import EditIcon from '../../icons/Edit';
import DeleteIcon from '../../icons/Delete';
import FavoriteIcon from '../../icons/Favorite';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookmarkActionCreators } from '../../state/actionCreators';

const BookmarkBtns = ({ setBookmarkEdit, bookmark, setIsDelete }) => {
  const dispatch = useDispatch();
  const { editBookmark } = bindActionCreators(bookmarkActionCreators, dispatch);

  const handleEdit = (e) => {
    e.preventDefault();
    setBookmarkEdit(bookmark);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setIsDelete(true);
  };
  const handleFavorite = (e) => {
    e.preventDefault();
    editBookmark({ ...bookmark, favorite: !bookmark.favorite });
  };

  return (
    <Wrapper>
      <IconBtn handleClick={handleEdit}>
        <EditIcon />
      </IconBtn>
      <IconBtn handleClick={handleDelete} danger>
        <DeleteIcon />
      </IconBtn>
      <FavoriteBtn confirm handleClick={handleFavorite}>
        <FavoriteIcon isFavorite={bookmark.favorite} />
      </FavoriteBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  & > button:nth-child(1) {
    margin-right: 10px;
  }
`;
const FavoriteBtn = styled(IconBtn)`
  margin-left: auto;
`;

export default BookmarkBtns;

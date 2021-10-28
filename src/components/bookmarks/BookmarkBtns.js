import React from 'react';
import styled from 'styled-components';
import IconBtn from '../IconBtn';
import EditIcon from '../../icons/Edit';
import DeleteIcon from '../../icons/Delete';

const BookmarkBtns = ({ setBookmarkEdit, bookmark, setIsDelete }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    setBookmarkEdit(bookmark);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setIsDelete(true);
  };

  return (
    <Wrapper>
      <IconBtn handleClick={handleEdit}>
        <EditIcon />
      </IconBtn>
      <IconBtn handleClick={handleDelete} danger>
        <DeleteIcon />
      </IconBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  & > button {
    padding: 0px 5px;
  }
`;

export default BookmarkBtns;

import React from 'react';
import styled from 'styled-components';
import IconBtn from '../IconBtn';
import EditIcon from '../../icons/Edit';
import DeleteIcon from '../../icons/Delete';

const BookmarkBtns = ({ setBookmarkEdit, bookmark }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    setBookmarkEdit(bookmark);
  };

  return (
    <Wrapper>
      <IconBtn handleClick={handleEdit}>
        <EditIcon />
      </IconBtn>
      <IconBtn danger>
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

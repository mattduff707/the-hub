import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { bookmarkActionCreators } from '../../state/actionCreators';
import Btn from '../Btn';
import Heading from '../Heading';

const DeleteConfirm = ({ title, setIsDelete, _id }) => {
  const dispatch = useDispatch();
  const { removeBookmark } = bindActionCreators(bookmarkActionCreators, dispatch);
  const handleDelete = (e) => {
    e.preventDefault();
    removeBookmark(_id);
    setIsDelete(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setIsDelete(false);
  };

  return (
    <Wrapper>
      <StyledHeading tag="h3">
        Delete <Highlight>{title}</Highlight>?
      </StyledHeading>
      <div>
        <StyledBtn handleClick={handleCancel}>No</StyledBtn>
        <StyledBtn handleClick={handleDelete}>Yes</StyledBtn>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledHeading = styled(Heading)`
  border: none;
  box-shadow: none;
  font-size: 1rem;
`;
const StyledBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1rem;
  margin: 0px 5px;
`;

const Highlight = styled.span`
  color: var(--hover-main);
  text-shadow: var(--hover-main-text-shadow);
`;

export default DeleteConfirm;

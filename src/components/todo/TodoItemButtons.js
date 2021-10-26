import React from 'react';
import styled from 'styled-components';
import CheckIcon from '../../icons/Check';
import DeleteIcon from '../../icons/Delete';
import EditIcon from '../../icons/Edit';
import CircleArrowIcon from '../../icons/CircleArrow';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actionCreators';
const TodoItemButtons = ({ isEditing, handleEdit, setIsEditing, itemId, textContent, completed }) => {
  const dispatch = useDispatch();
  const { removeTask, editTask, finishTask } = bindActionCreators(actionCreators, dispatch);
  const handleDelete = (e) => {
    e.preventDefault();
    removeTask(itemId);
  };
  const handleEditComplete = (e) => {
    e.preventDefault();
    editTask({ _id: itemId, newText: textContent });
    setIsEditing(false);
  };
  const handleComplete = (e) => {
    finishTask({ _id: itemId, completed: completed });
  };
  return (
    <ButtonWrapper>
      {isEditing ? (
        <EditDeleteBtn aria-label="cancel edit" isEditing={isEditing} onClick={handleEdit}>
          <DeleteIcon />
        </EditDeleteBtn>
      ) : (
        <EditBtn aria-label="edit todo" onClick={handleEdit}>
          <EditIcon />
        </EditBtn>
      )}

      <EditConfirmBtn aria-label="confirm edit" isEditing={isEditing} onClick={handleEditComplete}>
        <CheckIcon />
      </EditConfirmBtn>
      <DeleteBtn aria-label="delete todo" isEditing={isEditing} onClick={handleDelete}>
        <DeleteIcon />
      </DeleteBtn>

      <CompleteBtn aria-label="complete todo" onClick={handleComplete} isEditing={isEditing}>
        {completed ? <FlippedArrow /> : <CheckIcon />}
      </CompleteBtn>
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  padding-top: 5px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 26px;
  color: var(--color-text);
  text-shadow: var(--shadow-text);
  padding: 0px 5px;
  cursor: pointer;
  /* margin: 0px 5px; */
  /* border: 2px solid black; */
  transition: color, filter, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  &:hover {
    transition: color, filter, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
  & > * {
    width: 30px;
    height: 30px;
  }
`;

const EditBtn = styled(IconButton)`
  &:hover {
    color: var(--hover-main-text);
    filter: drop-shadow(var(--hover-main-icon-shadow));
  }
`;

const EditConfirmBtn = styled(IconButton)`
  display: ${(props) => (props.isEditing ? 'visible' : 'none')};
  &:hover {
    color: var(--hover-confirm);
    filter: drop-shadow(var(--hover-confirm-icon-shadow));
  }
`;
const EditDeleteBtn = styled(IconButton)`
  display: ${(props) => (props.isEditing ? 'visible' : 'none')};
  &:hover {
    color: var(--hover-danger);
    filter: drop-shadow(var(--hover-danger-icon-shadow));
  }
`;
const CompleteBtn = styled(IconButton)`
  display: ${(props) => (props.isEditing ? 'none' : 'visible')};
  &:hover {
    color: var(--hover-confirm);
    filter: drop-shadow(var(--hover-confirm-icon-shadow));
  }
`;
const DeleteBtn = styled(IconButton)`
  margin-left: auto;
  display: ${(props) => (props.isEditing ? 'none' : 'visible')};

  &:hover {
    color: var(--hover-danger);
    filter: drop-shadow(var(--hover-danger-icon-shadow));
  }
`;
const FlippedArrow = styled(CircleArrowIcon)`
  transform: rotate(180deg);
  width: 34px;
  height: 34px;
`;
// const StyledCheckIcon = styled(CheckIcon)`
//   width: 30px;
//   height: 30px;
// `;
// const StyledDeleteIcon = styled(DeleteIcon)`
//   width: 30px;
//   height: 30px;
// `;
// const StyledEditIcon = styled(EditIcon)`
//   width: 30px;
//   height: 30px;
// `;

export default TodoItemButtons;

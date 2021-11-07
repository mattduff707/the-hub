import React from "react";
import styled from "styled-components";
import CheckIcon from "../../icons/Check";
import DeleteIcon from "../../icons/Delete";
import EditIcon from "../../icons/Edit";
import CircleArrowIcon from "../../icons/CircleArrow";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskActionCreators } from "../../state/actionCreators";
import IconBtn from "../IconBtn";
const TodoItemButtons = ({
  isEditing,
  handleEdit,
  setIsEditing,
  itemId,
  textContent,
  completed,
}) => {
  const dispatch = useDispatch();
  const { removeTask, editTask, finishTask } = bindActionCreators(
    taskActionCreators,
    dispatch
  );
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
        <EditDeleteBtn
          danger
          aria-label="cancel edit"
          isEditing={isEditing}
          handleClick={handleEdit}
        >
          <DeleteIcon />
        </EditDeleteBtn>
      ) : (
        <IconBtn aria-label="edit todo" handleClick={handleEdit}>
          <EditIcon />
        </IconBtn>
      )}

      <EditConfirmBtn
        aria-label="confirm edit"
        isEditing={isEditing}
        handleClick={handleEditComplete}
        confirm
      >
        <CheckIcon />
      </EditConfirmBtn>
      <DeleteBtn
        aria-label="delete todo"
        isEditing={isEditing}
        handleClick={handleDelete}
        danger
      >
        <DeleteIcon />
      </DeleteBtn>

      <CompleteBtn
        aria-label="complete todo"
        handleClick={handleComplete}
        isEditing={isEditing}
        confirm
      >
        {completed ? <FlippedArrow /> : <CheckIcon />}
      </CompleteBtn>
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 0px;
`;

const EditConfirmBtn = styled(IconBtn)`
  display: ${(props) => (props.isEditing ? "visible" : "none")};
`;
const EditDeleteBtn = styled(IconBtn)`
  display: ${(props) => (props.isEditing ? "visible" : "none")};
  margin-right: 5px;
`;
const CompleteBtn = styled(IconBtn)`
  display: ${(props) => (props.isEditing ? "none" : "visible")};
  margin-left: 5px;
`;
const DeleteBtn = styled(IconBtn)`
  margin-left: auto;
  display: ${(props) => (props.isEditing ? "none" : "visible")};
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

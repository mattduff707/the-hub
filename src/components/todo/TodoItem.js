import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoContent from "./TodoContent";
import CheckIcon from "../../icons/Check";
import DeleteIcon from "../../icons/Delete";
import EditIcon from "../../icons/Edit";

const TodoItem = ({
  value,
  date_added,
  completed,
  itemId,
  deleteItem,
  confirmEdit,
  completeTask,
}) => {
  const [textContent, setTextContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem(itemId);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(() => !isEditing);
    setTextContent(value);
  };
  const handleComplete = (e) => {
    e.preventDefault();
    completeTask({ _id: itemId, completed: completed });
  };

  useEffect(() => {
    setTextContent(value);
  }, [value]);

  return (
    <Wrapper>
      <Content>
        <TodoContent
          value={value}
          handleChange={(e) => setTextContent(e.target.value)}
          textContent={textContent}
          isEditing={isEditing}
        />
      </Content>
      <ButtonWrapper>
        {isEditing ? (
          <EditDeleteBtn
            aria-label="cancel edit"
            isEditing={isEditing}
            onClick={handleEdit}
          >
            <StyledDeleteIcon />
          </EditDeleteBtn>
        ) : (
          <EditBtn aria-label="edit todo" onClick={handleEdit}>
            <StyledEditIcon />
          </EditBtn>
        )}

        <EditConfirmBtn
          aria-label="confirm edit"
          isEditing={isEditing}
          onClick={() => {
            confirmEdit(itemId, textContent);
            setIsEditing(false);
          }}
        >
          <StyledCheckIcon />
        </EditConfirmBtn>
        <DeleteBtn
          aria-label="delete todo"
          isEditing={isEditing}
          onClick={handleDelete}
        >
          <StyledDeleteIcon />
        </DeleteBtn>
        <CompleteBtn
          aria-label="complete todo"
          onClick={handleComplete}
          isEditing={isEditing}
        >
          <StyledCheckIcon />
        </CompleteBtn>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;
  border: 2px solid var(--highlight-screen);
  background-color: var(--color-screen);
  padding: 10px 10px 5px 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.article`
  text-shadow: var(--shadow-text);
  /* width: 75%; */
  font-size: 18px;
  padding-bottom: 5px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 2px solid var(--highlight-screen);
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
`;

const EditBtn = styled(IconButton)`
  &:hover {
    color: var(--hover-main-text);
    filter: drop-shadow(var(--hover-main-icon-shadow));
  }
`;

const EditConfirmBtn = styled(IconButton)`
  display: ${(props) => (props.isEditing ? "visible" : "none")};
  &:hover {
    color: var(--hover-confirm);
    filter: drop-shadow(var(--hover-confirm-icon-shadow));
  }
`;
const EditDeleteBtn = styled(IconButton)`
  display: ${(props) => (props.isEditing ? "visible" : "none")};
  &:hover {
    color: var(--hover-danger);
    filter: drop-shadow(var(--hover-danger-icon-shadow));
  }
`;
const CompleteBtn = styled(IconButton)`
  display: ${(props) => (props.isEditing ? "none" : "visible")};
  &:hover {
    color: var(--hover-confirm);
    filter: drop-shadow(var(--hover-confirm-icon-shadow));
  }
`;
const DeleteBtn = styled(IconButton)`
  margin-left: auto;
  display: ${(props) => (props.isEditing ? "none" : "visible")};

  &:hover {
    color: var(--hover-danger);
    filter: drop-shadow(var(--hover-danger-icon-shadow));
  }
`;
const StyledCheckIcon = styled(CheckIcon)`
  width: 30px;
  height: 30px;
`;
const StyledDeleteIcon = styled(DeleteIcon)`
  width: 30px;
  height: 30px;
`;
const StyledEditIcon = styled(EditIcon)`
  width: 30px;
  height: 30px;
`;

export default TodoItem;

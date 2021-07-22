import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoContent from "./TodoContent";

const TodoItem = ({ value, itemId, deleteItem, editing, startEdit, confirmEdit }) => {
  const iconCheck = "far fa-check-circle";
  const iconDelete = "far fa-times-circle";
  const iconEdit = "far fa-edit";

  const handleDelete = (e) => {
    e.preventDefault();
    deleteItem(itemId);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    startEdit(itemId);
    setTextContent(value);
  };

  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    setTextContent(value);
  }, [value]);

  // const handleEditChange = (e) => {
  //   setTextContent(e.currentTarget.value);
  // };
  // const handleEditSubmit = (e) => {
  //   confirmEdit(itemId, textContent);
  // };

  return (
    <Wrapper>
      <Content>
        <TodoContent
          value={value}
          handleChange={(e) => setTextContent(e.target.value)}
          textContent={textContent}
          editing={editing}
        />
      </Content>
      <ButtonWrapper>
        <EditBtn onClick={handleEdit}>
          <Icon className={editing ? iconDelete : iconEdit}></Icon>
        </EditBtn>
        <EditConfirmBtn editing={editing} onClick={() => confirmEdit(itemId, textContent)}>
          <i className={iconCheck}></i>
        </EditConfirmBtn>
        <DeleteBtn editing={editing} onClick={handleDelete}>
          <i className={iconDelete}></i>
        </DeleteBtn>
        <CompleteBtn editing={editing}>
          <i className={iconCheck}></i>
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
  margin-bottom: 10px;
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
  transition: color, text-shadow, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  &:hover {
    transition: color, text-shadow, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`;

const EditBtn = styled(IconButton)`
  &:hover {
    color: var(--hover-main-text);
    text-shadow: var(--hover-main-text-shadow-offset);
    transform: translate(-1px, -1px);
  }
`;

const EditConfirmBtn = styled(IconButton)`
  display: ${(props) => (props.editing ? "visible" : "none")};
`;
const CompleteBtn = styled(IconButton)`
  display: ${(props) => (props.editing ? "none" : "visible")};
  &:hover {
    color: var(--hover-confirm);
    text-shadow: var(--hover-confirm-text-shadow-offset);
    transform: translate(-1px, -1px);
  }
`;
const DeleteBtn = styled(IconButton)`
  margin-left: auto;
  display: ${(props) => (props.editing ? "none" : "visible")};

  &:hover {
    color: var(--hover-danger);
    text-shadow: var(--hover-danger-text-shadow-offset);
    transform: translate(-1px, -1px);
  }
`;

const Icon = styled.i`
  transform: translateY(-1px);
`;

export default TodoItem;

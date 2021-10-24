import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const List = ({ activeList, deleteItem, confirmEdit, completeTask }) => {
  return (
    <Wrapper>
      {activeList.map((task, index) => {
        return (
          <TodoItem
            itemId={task._id}
            key={index}
            value={task.value}
            date_added={task.date_added}
            deleteItem={deleteItem}
            confirmEdit={confirmEdit}
            completeTask={completeTask}
          />
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0px 10px 160px;
  overflow: auto;
`;

export default List;

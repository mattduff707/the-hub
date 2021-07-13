import React from "react";
import styled from "styled-components";

const BookmarksList = () => {
  return (
    <List>
      <h3>List</h3>
    </List>
  );
};

const List = styled.ul`
  border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  border-radius: 20px;
  background-color: var(--shadow-main);
  box-shadow: var(--inset-shadow);
  height: 100%;
  /* margin: 30px 0px; */
`;

export default BookmarksList;

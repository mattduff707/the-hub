import React from 'react';
import styled from 'styled-components';

const formatDate = (date) => {
  return new Date(date).toLocaleString([], { hour12: true, dateStyle: 'short', timeStyle: 'short' });
};
const TodoDate = ({ date_completed, date_added }) => {
  return (
    <Wrapper>
      <time dateTime={date_added}>{formatDate(date_added)}</time>

      {date_completed && (
        <time dateTime={date_completed}>
          {' - '}
          {formatDate(date_completed)}
        </time>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding: 5px 0px;
  /* display: flex; */
  font-size: 0.9rem;
  text-shadow: var(--shadow-text);
  color: var(--color-text);
`;
// const DateTime = styled.time``;
export default TodoDate;

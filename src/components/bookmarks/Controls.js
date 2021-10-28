import React from 'react';
import styled from 'styled-components';
import Btn from '../Btn';
import ScreenBox from '../ScreenBox';

const Controls = ({ setBookmarkAdd }) => {
  const handleClick = () => {
    setBookmarkAdd(true);
  };
  return (
    <Wrapper>
      <BtnWrap>
        <BookmarkBtn handleClick={handleClick}>New</BookmarkBtn>
        <BookmarkBtn>Search</BookmarkBtn>
      </BtnWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnWrap = styled(ScreenBox)`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 10px 20px;
`;
const BookmarkBtn = styled(Btn)`
  padding: 5px 10px;
  margin: 0px 10px;
  font-size: 1.2rem;
`;

export default Controls;

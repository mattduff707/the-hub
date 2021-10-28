import React from 'react';
import styled from 'styled-components';
import ScreenIndent from '../components/ScreenIndent';
import CoolScreen from '../components/CoolScreen';
import BookmarksList from '../components/bookmarks/BookmarksList';

const Bookmarks = () => {
  return (
    <Wrapper>
      <ScreenIndent long>
        <StyledScreen sideScreen>
          <BookmarksList />
        </StyledScreen>
      </ScreenIndent>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 4px solid green; */
  height: 100%;
  flex: 1;
  padding: 30px 40px 30px 0px;
`;
const StyledScreen = styled(CoolScreen)`
  padding-top: 40px;
`;

export default Bookmarks;

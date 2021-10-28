import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import CircleArrow from '../../icons/CircleArrow';

const Bookmark = ({ title, base_url, extensions, search_url }) => {
  return (
    <Wrapper>
      <BaseAnchor href={base_url} target="_blank">
        <Title>{title}</Title>
        <StyledCircleArrow />
      </BaseAnchor>
      {search_url ? <Search extensions={extensions} search_url={search_url} /> : <></>}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;

  border: 2px solid var(--highlight-screen);
  background-color: var(--color-screen);
  /* padding: 10px 10px 5px 10px; */
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  margin: 10px 0px;
`;

const Anchor = styled.a`
  text-decoration: none;
`;
const BaseAnchor = styled(Anchor)`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  width: 100%;
  font-size: 18px;
  text-shadow: var(--shadow-text);
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  ${Anchor}:hover & {
    transition: color, text-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--hover-main-text);
    text-shadow: var(--hover-main-text-shadow);
  }
`;
const StyledCircleArrow = styled(CircleArrow)`
  width: 34px;
  height: 34px;
  color: var(--color-text);
  ${Anchor}:hover & {
    transition: color, filter;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--hover-main-text);
    filter: drop-shadow(var(--hover-main-icon-shadow));
  }
`;

export default Bookmark;

import React from 'react';
import styled from 'styled-components';
import Extensions from './Extensions';
import Search from './Search';

const Bookmark = ({ title, baseURL, extensions, search }) => {
  return (
    <Wrapper>
      <BaseAnchor href={baseURL} target="_blank">
        <Title>{title}</Title>
        <AnchorIcon className="far fa-arrow-alt-circle-right"></AnchorIcon>
      </BaseAnchor>
      {search ? <Search extensions={extensions} search={search} /> : <></>}
      {extensions ? <Extensions extensions={extensions} baseURL={baseURL} /> : <></>}
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
  margin-bottom: 10px;
`;

const Anchor = styled.a`
  text-decoration: none;
`;
const BaseAnchor = styled(Anchor)`
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  /* border: 2px solid red; */
  transform: translateY(2px);
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

const Icon = styled.i`
  /* border: 2px solid red; */
  font-size: 26px;
  color: var(--color-text);
  text-shadow: var(--shadow-text);
  transition: color, text-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  cursor: pointer;
`;
const AnchorIcon = styled(Icon)`
  ${Anchor}:hover & {
    transition: color, text-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--hover-main-text);
    text-shadow: var(--hover-main-text-shadow);
  }
`;

export default Bookmark;

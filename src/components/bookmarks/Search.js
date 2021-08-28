import React, { useState } from 'react';
import styled from 'styled-components';

const Search = ({ search }) => {
  /* 
    Example data located in bookmarksData.js
     {
    title: 'MDN Docs',
    baseURL: 'https://developer.mozilla.org/en-US/',
    extensions: [
      { title: 'JS: Array', url: 'docs/Web/JavaScript/Reference/Global_Objects/Array' },
      { title: 'JS: Object', url: 'docs/Web/JavaScript/Reference/Global_Objects/Object' },
      { title: 'JS: Function', url: 'docs/Web/JavaScript/Reference/Global_Objects/Function' },
      { title: 'JS: async', url: 'docs/Web/JavaScript/Reference/Statements/async_function' },
    ],
    search: {
      searchURL: 'https://developer.mozilla.org/en-US/search?q=',
    },
     */
  const [searchText, setSearchText] = useState('');
  const handleChange = (e) => {
    setSearchText(() => e.target.value);
  };

  const handleSubmit = () => {
    window.open(search.searchURL + searchText, '_blank');
    setSearchText('');
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <TextInput value={searchText} onChange={handleChange} autoComplete="off" type="text" name="searchDocs" />
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  padding: 0px 5px 10px;
`;
const TextInput = styled.input`
  width: 100%;
  height: 20px;
  padding: 15px 10px;
  color: var(--color-text);
  background-color: var(--color-screen);
  border-radius: 8px;
  font-family: var(--font-family-main);
  /* letter-spacing: 2px; */
  font-weight: 600;
  outline: none;
  flex: 4;
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  font-size: 14px;
`;
const SubmitBtn = styled.button`
  cursor: pointer;
  color: var(--color-text);
  border: 2px solid var(--highlight-screen);
  flex: 1;
  background-color: var(--color-screen);
  margin-left: 10px;
  padding: 0px 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  font-family: var(--font-family-main);
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 600;
  transition: border-color, box-shadow, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  &:hover {
    /* text-shadow: var(--hover-main-shadow); */
    border-color: var(--hover-main);
    background-color: var(--hover-main-bg);
    box-shadow: 0px 0px 10px 1px var(--hover-main);

    transition: border-color, box-shadow, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
`;

export default Search;

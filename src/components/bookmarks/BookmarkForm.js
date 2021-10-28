import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { bookmarkActionCreators } from '../../state/actionCreators';
import Btn from '../Btn';
import ScreenBox from '../ScreenBox';

const BookmarkForm = ({
  title = '',
  base_url = '',
  search_url = '',
  favorite = false,
  _id = false,
  setBookmarkFormState,
}) => {
  const dispatch = useDispatch();
  const { addBookmark } = bindActionCreators(bookmarkActionCreators, dispatch);

  const [titleInput, setTitleInput] = useState('');
  const [baseInput, setBaseInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [favoriteInput, setFavoriteInput] = useState(false);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookmark({ title: titleInput, base_url: baseInput, search_url: searchInput, favorite: favoriteInput });
    setBookmarkFormState(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setBookmarkFormState(false);
  };

  return (
    <Wrapper>
      <FormWrap tag={'form'}>
        <InputWrap>
          <Label htmlFor="title">Name</Label>
          <TextInput
            onChange={(e) => handleChange(e, setTitleInput)}
            value={titleInput}
            type="text"
            autoComplete="off"
            id="title"
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="base">Base URL</Label>
          <TextInput onChange={(e) => handleChange(e, setBaseInput)} value={baseInput} autoComplete="off" id="base" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="search">Search URL</Label>
          <TextInput
            onChange={(e) => handleChange(e, setSearchInput)}
            value={searchInput}
            autoComplete="off"
            id="search"
          />
        </InputWrap>
        <InputWrap>
          <Label id="favorite">Favorite</Label>
          <Checkbox
            checked={favoriteInput}
            onChange={() => setFavoriteInput(!favoriteInput)}
            type="checkbox"
            id="favorite"
          />
        </InputWrap>
        <InputWrap>
          <StyledBtn handleClick={handleCancel}>Cancel</StyledBtn>
          <StyledBtn type="submit" handleClick={handleSubmit}>
            Submit
          </StyledBtn>
        </InputWrap>
      </FormWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 10px;
`;
const FormWrap = styled(ScreenBox)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 10px 0px;
`;
const Label = styled.label`
  color: var(--color-text);
  text-shadow: var(--shadow-text);
  font-weight: 600;
  letter-spacing: 2px;
  margin-right: 5px;
  white-space: nowrap;
  text-align: center;
  font-size: 0.9rem;
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
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  text-shadow: var(--shadow-text);
  letter-spacing: 2px;
  font-size: 0.9rem;
`;
const Checkbox = styled.input`
  margin-right: 5px;
  appearance: none;
  border: 2px solid var(--hover-danger);
  box-shadow: var(--hover-danger-shadow);
  border-radius: 2px;
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  &:checked {
    /* background: var(--hover-confirm); */
    box-shadow: var(--hover-confirm-shadow);
    border: var(--hover-confirm-border);
  }
  &:checked:before {
    content: '';
    border-right: var(--hover-confirm-border);
    border-bottom: var(--hover-confirm-border);
    height: 70%;
    width: 40%;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transform: rotate(45deg) translateY(-15%) translateX(-20%);
  }
`;
const StyledBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1rem;
  margin: 0px 5px;
`;

export default BookmarkForm;

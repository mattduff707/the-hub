import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { css } from 'styled-components';
import { bookmarkActionCreators } from '../../state/actionCreators';
import Btn from '../Btn';
import Heading from '../Heading';
import ScreenBox from '../ScreenBox';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';

const BookmarkForm = ({
  title = '',
  base_url = '',
  search_url = '',
  favorite = false,
  _id = false,
  setBookmarkFormState,
}) => {
  const dispatch = useDispatch();
  const { addBookmark, editBookmark } = bindActionCreators(bookmarkActionCreators, dispatch);

  const [titleInput, setTitleInput] = useState(title);
  const [baseInput, setBaseInput] = useState(base_url);
  const [searchInput, setSearchInput] = useState(search_url);
  const [favoriteInput, setFavoriteInput] = useState(favorite);
  const [missingInput, setMissingInput] = useState([]);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleInput && baseInput) {
      const newBookmark = {
        title: titleInput,
        base_url: baseInput,
        search_url: searchInput,
        favorite: favoriteInput,
        _id: _id,
      };
      if (_id) {
        editBookmark(newBookmark);
        setBookmarkFormState(false);
      } else {
        addBookmark(newBookmark);
        setBookmarkFormState(false);
      }
    } else {
      !titleInput && !baseInput
        ? setMissingInput([titleInput, baseInput])
        : !titleInput
        ? setMissingInput([titleInput])
        : setMissingInput([baseInput]);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setBookmarkFormState(false);
  };

  return (
    <Wrapper>
      <FormWrap tag={'form'}>
        <StyledHeading>{_id ? 'Edit Bookmark' : 'Add Bookmark'}</StyledHeading>
        <InputWrap>
          <Label required htmlFor="title">
            Name
          </Label>
          <StyledTextInput
            isMissing={missingInput.includes(titleInput)}
            onChange={(e) => handleChange(e, setTitleInput)}
            value={titleInput}
            type="text"
            autoComplete="off"
            id="title"
            placeholder={missingInput.includes(titleInput) && 'Required!'}
          />
        </InputWrap>
        <InputWrap>
          <Label required htmlFor="base">
            Base URL
          </Label>
          <StyledTextInput
            isMissing={missingInput.includes(baseInput)}
            onChange={(e) => handleChange(e, setBaseInput)}
            value={baseInput}
            autoComplete="off"
            id="base"
            placeholder={missingInput.includes(titleInput) && 'Required!'}
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="search">Search URL</Label>
          <StyledTextInput
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

const requiredStar = css`
  &:before {
    content: '*';
  }
`;

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
const StyledHeading = styled(Heading)`
  font-size: 1.2rem;
  padding-bottom: 2px;
  border: none;
  /* background-color: none; */
  box-shadow: none;
  border-radius: 0px;
  border-bottom: var(--screen-border-thin);
  align-self: center;
  margin-bottom: 5px;
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
  font-weight: 600;
  letter-spacing: 2px;
  margin-right: 5px;
  white-space: nowrap;
  text-align: center;
  font-size: 0.9rem;
  ${(props) => props.required && requiredStar}
`;
const StyledTextInput = styled(TextInput)`
  padding: 5px 10px;
  border: ${(props) => props.isMissing && '2px solid var(--danger)'};

  box-shadow: ${(props) => props.isMissing && 'var(--danger-shadow)'};
  background: ${(props) => props.isMissing && 'var(--danger-bg)'};
  &:focus {
    /* border: ${(props) => props.isMissing && '2px solid var(--danger)'}; */

    box-shadow: ${(props) => props.isMissing && 'none'};
    background: ${(props) => props.isMissing && 'var(--screen-color-bright)'};
  }
`;
// const Checkbox = styled.input`
//   margin-right: 5px;
//   appearance: none;
//   border: 2px solid var(--hover-main);
//   box-shadow: var(--hover-main-shadow);
//   border-radius: 2px;
//   width: 20px;
//   height: 20px;
//   display: inline-block;
//   position: relative;
//   &:checked {
//     /* background: var(--hover-confirm); */
//     box-shadow: var(--hover-confirm-shadow);
//     border: var(--hover-confirm-border);
//   }
//   &:checked:before {
//     content: "";
//     border-right: var(--hover-confirm-border);
//     border-bottom: var(--hover-confirm-border);
//     height: 70%;
//     width: 40%;
//     overflow: hidden;
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     top: 2px;
//     margin: auto;
//     transform: rotate(45deg) translateY(-15%) translateX(-20%);
//   }
// `;
const StyledBtn = styled(Btn)`
  padding: 5px 10px;
  font-size: 1rem;
  margin: 0px 5px;
`;

export default BookmarkForm;

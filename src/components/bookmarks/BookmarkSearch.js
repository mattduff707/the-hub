import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import SearchIcon from "../../icons/Search";

const BookmarkSearch = ({ searchText, setSearchText }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <Wrapper>
      <IconWrap>
        <StyledSearchIcon isActive={searchText} />
      </IconWrap>
      <StyledTextInput value={searchText} onChange={handleChange} id="search" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  padding: 0px 10px 20px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: var(--screen-border);
`;
const IconWrap = styled.div`
  position: absolute;
  left: 18px;
  top: 9px;
`;
const StyledSearchIcon = styled(SearchIcon)`
  color: ${(props) =>
    props.isActive ? "var(--hover-main)" : "var(--color-text)"};
  filter: ${(props) =>
    props.isActive
      ? "drop-shadow(var(--hover-main-icon-shadow))"
      : "drop-shadow(var(--shadow-icon))"};

  width: 16px;
  height: 16px;
`;
const StyledTextInput = styled(TextInput)`
  padding-left: 30px;
`;

export default BookmarkSearch;

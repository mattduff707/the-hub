import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../Btn";
import TextInput from "../TextInput";

const Search = ({ search_url }) => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(() => e.target.value);
  };

  const handleSubmit = () => {
    window.open(search_url + searchText, "_blank");
    setSearchText("");
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <StyledTextInput
        value={searchText}
        onChange={handleChange}
        autoComplete="off"
        type="text"
        name="searchDocs"
      />
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;
const StyledTextInput = styled(TextInput)`
  width: 100%;
  height: 20px;
  padding: 15px 10px;

  /* color: var(--color-text);
  background-color: var(--color-screen);
  border-radius: 8px;
  font-family: var(--font-family-main); */
  /* letter-spacing: 2px; */
  font-weight: 600;
  outline: none;
  flex: 4;
  /* border: 2px solid var(--highlight-screen); */
  /* box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light); */
  letter-spacing: 2px;
  font-size: 0.9rem;
`;
const SubmitBtn = styled(Btn)`
  flex: 1;
  font-size: 1rem;
  margin-left: 10px;
  padding: 0px 5px;
`;

export default Search;

import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../../Btn";
import TextInput from "../../TextInput";
import CategoryInput from "./CategoryInput";
import CodeInput from "./CodeInput";

const SnippetForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  // const [newCategory, setNewCategory] = useState("");
  const [codeSnippets, setCodeSnippets] = useState([
    { value: "", lang: "css" },
  ]);

  const handleTitleInput = (e) => {
    e.preventDefault();
    setTitleInput(e.target.value);
  };

  const handleCategoryInput = (e) => {
    e.preventDefault();
    setCategoryInput(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    e.preventDefault();
    setDescriptionInput(e.target.value);
  };

  const handleAddCode = (e) => {
    e.preventDefault();
    setCodeSnippets(() => [
      ...codeSnippets,
      { value: "", lang: "", id: codeSnippets.length },
    ]);
  };

  return (
    <Wrapper>
      <FormTitle>New Snippet</FormTitle>
      <Label>
        Title:
        <TextInput onChange={handleTitleInput} value={titleInput} />
      </Label>
      <Label>
        Category:
        <CategoryInput
          categoryInput={categoryInput}
          setCategoryInput={setCategoryInput}
        />
      </Label>
      <Label>
        Description:
        <TextArea onChange={handleDescriptionInput} value={descriptionInput} />
      </Label>
      {codeSnippets.map((snip, index) => (
        <CodeInput
          id={index}
          value={snip.value}
          lang={snip.lang}
          codeSnippets={codeSnippets}
          setCodeSnippets={setCodeSnippets}
        />
      ))}
      <CodeBtn handleClick={handleAddCode}>Add Code</CodeBtn>
      <SubmitBtn type="submit">Submit</SubmitBtn>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px 20px;
`;
const FormTitle = styled.h2`
  text-align: center;
  padding: 10px 0px 20px;
  align-self: center;
`;
const Label = styled.label`
  /* max-width: 300px; */
  display: flex;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > * {
    margin-left: 5px;
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  color: var(--color-text);
  min-width: 600px;
  font-size: 1rem;
  margin-left: 5px;
  background-color: var(--screen-color);
  border: var(--screen-border-thin);
  border-radius: 8px;
  outline: none;
  padding: 10px;
  &:focus {
    border: var(--highlight-border-thin);
  }
`;
const CodeBtn = styled(Btn)`
  padding: 5px 10px;
  align-self: center;
`;
const SubmitBtn = styled(Btn)`
  font-size: 1.4rem;
  padding: 10px 20px;
  margin-top: 20px;
  align-self: center;
`;

export default SnippetForm;

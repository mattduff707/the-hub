import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../../Btn";
import TextInput from "../../TextInput";
import CodeInput from "./CodeInput";

const SnippetForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [codeSnippets, setCodeSnippets] = useState([{ value: "", lang: "" }]);
  const handleTitleInput = (e) => {
    e.preventDefault();
    setTitleInput(e.target.value);
  };
  const handleDescriptionInput = (e) => {
    e.preventDefault();
    setDescriptionInput(e.target.value);
  };
  return (
    <Wrapper>
      <FormTitle>New Snippet</FormTitle>
      <Label>
        Title:
        <TextInput onChange={handleTitleInput} />
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
      <CodeBtn>Add Code</CodeBtn>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormTitle = styled.h2`
  text-align: center;
  padding: 10px 0px;
`;
const Label = styled.label`
  /* max-width: 300px; */
  display: flex;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & > input {
    margin-left: 5px;
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  color: var(--color-text);
  width: 400px;
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
`;

export default SnippetForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import Btn from "../../Btn";
import TextInput from "../../TextInput";
import CategoryInput from "./CategoryInput";
import CodeInput from "./CodeInput";
import { snippetActionCreators } from "../../../state/actionCreators";

const SnippetForm = () => {
  const defaultCodeSnippetsState = [{ value: "", lang: "css" }];

  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [codeSnippets, setCodeSnippets] = useState(defaultCodeSnippetsState);

  const resetAllInputStates = () => {
    setTitleInput("");
    setDescriptionInput("");
    setCategoryInput("");
    setCodeSnippets(defaultCodeSnippetsState);
  };

  const dispatch = useDispatch();
  const { addSnippet } = bindActionCreators(snippetActionCreators, dispatch);

  const handleTitleInput = (e) => {
    e.preventDefault();
    setTitleInput(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = `/${titleInput.split(" ").join("-")}`;
    addSnippet({
      title: titleInput,
      category: categoryInput,
      description: descriptionInput,
      codeArr: codeSnippets,
      path: path,
    });
    resetAllInputStates();
  };

  return (
    <Wrapper name="snippetForm" onSubmit={handleSubmit}>
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

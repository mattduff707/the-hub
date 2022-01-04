import React from "react";
import theme from "prism-react-renderer/themes/okaidia";
import Code from "./Code";
import Btn from "../../Btn";
import { bindActionCreators } from "redux";
import { snippetActionCreators } from "../../../state/actionCreators";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Snippet = ({ title, category, codeArr, _id, description }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { removeSnippet } = bindActionCreators(snippetActionCreators, dispatch);

  const handleDelete = (e) => {
    e.preventDefault();
    history.push("/snippets");
    removeSnippet(_id);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Category>{category}</Category>
      <Description>{description}</Description>
      {codeArr.map((snippet) => (
        <Code
          key={Math.random()}
          code={snippet.value}
          language={snippet.lang}
          theme={theme}
        />
      ))}
      <Btn handleClick={handleDelete}>Delete</Btn>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  color: var(--color-text);
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const Category = styled.h2`
  font-size: 1.5rem;
`;
const Description = styled.p`
  font-size: 1rem;
`;
export default Snippet;

import React from "react";
import theme from "prism-react-renderer/themes/okaidia";
import Code from "./Code";
import Btn from "../../Btn";
import { bindActionCreators } from "redux";
import { snippetActionCreators } from "../../../state/actionCreators";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Snippet = ({ title, category, codeArr, _id, state }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { removeSnippet } = bindActionCreators(snippetActionCreators, dispatch);

  const handleDelete = (e) => {
    e.preventDefault();
    history.push("/snippets");
    removeSnippet(_id);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{category}</h2>
      {codeArr.map((snippet) => (
        <Code
          key={Math.random()}
          code={snippet.value}
          language={snippet.lang}
          theme={theme}
        />
      ))}
      <Btn handleClick={handleDelete}>Delete</Btn>
    </div>
  );
};

export default Snippet;

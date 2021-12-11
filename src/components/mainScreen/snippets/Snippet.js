import React from "react";
import theme from "prism-react-renderer/themes/okaidia";
import Code from "./Code";

const Snippet = ({ title, category, codeArr }) => {
  debugger;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{category}</h2>
      {codeArr.map((snippet) => (
        <Code code={snippet.value} language={snippet.lang} theme={theme} />
      ))}
    </div>
  );
};

export default Snippet;

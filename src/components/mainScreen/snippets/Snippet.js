import React from "react";
import theme from "prism-react-renderer/themes/okaidia";
import Code from "./Code";

const Snippet = ({ value, title, category, codeArr }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{category}</h2>
      <Code code={value} language={"jsx"} theme={theme} />
    </div>
  );
};

export default Snippet;

import useFetch from "../../../services/useFetch";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";
import Btn from "../../Btn";
import axios from "axios";

const Snippets = () => {
  const [snippets, setSnippets] = useState([]);
  const [input, setInput] = useState(``);
  const sliceString = (str) => {
    const newStr = str
      .trim()
      .slice(3, str.length - 5)
      .trim();
    return newStr;
  };

  const { data, loading, error } = useFetch(process.env.REACT_APP_SNIPPETS_URL);
  console.log(data, loading, error);
  // useEffect(() => {
  //   setTimeout(() => Prism.highlightAll(), 0);
  // });
  useEffect(() => {
    setSnippets(() => data);
  }, [data]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error!!!</h2>;
  }

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} />
      <Btn
        handleClick={() =>
          axios
            .post(process.env.REACT_APP_SNIPPETS_URL, {
              snippet: input,
            })
            .then((res) => console.log(res))
        }
      >
        Test
      </Btn>
      {snippets.map((snippet) => (
        <Highlight
          {...defaultProps}
          theme={theme}
          code={snippet.value}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      ))}
    </div>
  );
};

export default Snippets;

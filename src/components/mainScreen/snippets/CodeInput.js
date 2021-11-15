import React from "react";
import Editor from "react-simple-code-editor";
import { Line, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";
import styled from "styled-components";

const CodeInput = ({ id, lang, value, setCodeSnippets, codeSnippets }) => {
  const handleLangChange = (e) => {
    setCodeSnippets(() =>
      codeSnippets.map((snip, index) => {
        if (index === id) {
          return { ...snip, lang: e.target.value };
        }
        return snip;
      })
    );
  };

  const handleCodeChange = (code) => {
    setCodeSnippets(() =>
      codeSnippets.map((snip, index) => {
        if (index === id) {
          return { ...snip, value: code };
        }
        return snip;
      })
    );
  };

  const highlight = (code) => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </>
      )}
    </Highlight>
  );

  const style = {
    width: "100%",
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    fontSize: "0.8rem",
    ...theme.plain,
  };

  return (
    <Wrapper>
      <select value={lang} onChange={handleLangChange} name={"lang" + id}>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
        <option value="javascript">JavaScript</option>
        <option value="jsx">React</option>
      </select>
      <Editor
        value={value}
        onValueChange={handleCodeChange}
        highlight={highlight}
        style={style}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0px 20px 20px;
  width: 100%;
`;

export default CodeInput;

import React from "react";
import Editor from "react-simple-code-editor";
import { Line, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";
import styled from "styled-components";
import IconBtn from "../../IconBtn";
import DeleteIcon from "../../../icons/Delete";

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
      codeSnippets.map((snip) => {
        if (snip.id === id) {
          return { ...snip, value: code };
        }
        return snip;
      })
    );
  };

  const handleRemove = () => {
    if (codeSnippets.length > 1) {
      setCodeSnippets(() => codeSnippets.filter((snip) => id !== snip.id));
    }
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
      <ButtonWrap>
        <select value={lang} onChange={handleLangChange} name={"lang" + id}>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
          <option value="jsx">React</option>
        </select>
        <SnipTitle>Code Snippet {id + 1}</SnipTitle>
        {id > 0 && (
          <IconBtn handleClick={handleRemove} danger>
            <DeleteIcon />
          </IconBtn>
        )}
      </ButtonWrap>
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
  padding: 20px;
  width: 100%;
  border: var(--screen-border-thin);
  border-radius: 8px;
  margin-bottom: 20px;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  position: relative;
`;
const SnipTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
`;

export default CodeInput;

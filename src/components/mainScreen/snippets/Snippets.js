// import useFetch from "../../../services/useFetch";
import { Switch, Route, useRouteMatch } from "react-router";
// import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import { useSelector } from "react-redux";
import Loading from "../../Loading";
import Error from "../../Error";
import Snippet from "./Snippet";
// import { useState } from "react";
// import { Pre, Line, LineNo, LineContent } from "./styles";
// import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/okaidia";

const Snippets = () => {
  const state = useSelector((state) => state.snippets);
  console.log(state);

  const { url } = useRouteMatch();

  if (state.loading) {
    return <Loading />;
  }

  if (state.error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <SideNav snippets={state.snippets} url={url} />
      <div>
        <Switch>
          {state.snippets.map((snippet) => (
            <Route path={`${url}${snippet.path}`}>
              <Snippet
                value={snippet.value}
                category={snippet.category}
                title={snippet.title}
              />
            </Route>
          ))}
        </Switch>
      </div>
      {/* {snippets.map((snippet) => (
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
      ))} */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 1fr;
`;

export default Snippets;

import React, { useState } from "react";
import styled from "styled-components";

const Extensions = ({ extensions, baseURL }) => {
  const [isExtended, setIsExtended] = useState(false);

  const handleClick = () => {
    setIsExtended(() => !isExtended);
  };

  return (
    <ExtensionsWrapper>
      <ExtensionsList isExtended={isExtended}>
        {extensions.map((i) => {
          return (
            <ExtensionAnchor key={i.title} href={baseURL + i.url} target="_blank">
              <Extension>{i.title}</Extension>
            </ExtensionAnchor>
          );
        })}
      </ExtensionsList>
      <ExtendBtn onClick={handleClick}>
        <ExtendIcon className={isExtended ? "fas fa-caret-up" : "fas fa-caret-down"}></ExtendIcon>
      </ExtendBtn>
    </ExtensionsWrapper>
  );
};
const ExtensionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ExtensionsList = styled.div`
  height: ${(props) => (props.isExtended ? "auto" : "0px")};
  transition: height 1s ease;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${(props) => (props.isExtended ? "5px 0px" : "0px")};
  border-top: 2px solid var(--highlight-screen);
  border-bottom: 2px solid var(--highlight-screen);
  overflow: hidden;
`;
const Anchor = styled.a`
  text-decoration: none;
`;
const ExtensionAnchor = styled(Anchor)`
  margin: 5px 5px;
  padding: 5px 6px 5px 8px;
  border-radius: 8px;
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  transition: border-color, box-shadow, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  &:hover {
    /* text-shadow: var(--hover-main-shadow); */
    border-color: var(--hover-main);
    background-color: var(--hover-main-bg);
    box-shadow: 0px 0px 10px 1px var(--hover-main);

    transition: border-color, box-shadow, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
`;
const Extension = styled.p`
  font-size: 16px;
  text-shadow: var(--shadow-text);
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  /* border: 2px solid red; */
`;
const ExtendBtn = styled.button`
  background: none;
  border: none;
  width: 100%;
  /* border-top: 2px solid var(--highlight-screen); */

  cursor: pointer;
`;
const Icon = styled.i`
  /* border: 2px solid red; */
  font-size: 26px;
  color: var(--color-text);
  text-shadow: var(--shadow-text);
  transition: color, text-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  cursor: pointer;
`;
const ExtendIcon = styled(Icon)`
  ${ExtendBtn}:hover & {
    transition: color, text-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--hover-main-text);
    text-shadow: var(--hover-main-text-shadow);
  }
`;

export default Extensions;

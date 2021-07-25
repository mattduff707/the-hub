import React, { useState } from "react";
import styled from "styled-components";

const APOD = ({ data, loading, error }) => {
  const [isExtended, setIsExtended] = useState(false);

  const handleClick = () => {
    setIsExtended(() => !isExtended);
  };

  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Subtitle>{data.copyright}</Subtitle>
      <Image src={data.url} />
      <ExtensionBtn onClick={handleClick}>
        Description<ExtensionIcon className={isExtended ? "fas fa-caret-up" : "fas fa-caret-down"}></ExtensionIcon>
      </ExtensionBtn>
      <ExtensionWrapper isExtended={isExtended}>
        <Description>{data.explanation}</Description>
      </ExtensionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 10px 20px 5px 20px;
  border-radius: 8px;
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-height: 800px; */
  /* overflow-y: auto; */
`;
const Title = styled.h2`
  text-shadow: var(--shadow-text);
  letter-spacing: 2px;
  color: var(--color-text);
  padding-bottom: 10px;
  text-align: center;
  font-size: 24px;
`;
const Subtitle = styled.h3`
  text-shadow: var(--shadow-text);
  letter-spacing: 2px;
  color: var(--color-text);
  padding-bottom: 10px;
  text-align: center;
  font-size: 18px;
`;
const Image = styled.img`
  max-width: 100%;
  margin: 0px auto;
  height: auto;
  display: block;
  border-radius: 8px;
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
`;
const Description = styled.div`
  text-shadow: var(--shadow-text);
  letter-spacing: 2px;
  color: var(--color-text);
  font-family: var(--font-family-main);
  font-size: 16px;
  /* border: 2px solid black; */
  /* height: 200px; */
`;
const ExtensionWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.isExtended ? "auto" : "0px")};
  /* border: 2px solid red; */
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const ExtensionBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: var(--shadow-text);
  letter-spacing: 2px;
  color: var(--color-text);
  font-family: var(--font-family-main);
  font-size: 16px;
`;
const ExtensionIcon = styled.i`
  font-size: 30px;
`;

export default APOD;

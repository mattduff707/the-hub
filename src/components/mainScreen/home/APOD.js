import React, { useState } from 'react';
import styled from 'styled-components';
import DownArrow from '../../../icons/DownArrow';
import UpArrow from '../../../icons/upArrow';

const APOD = ({ data, loading, error }) => {
  const [isExtended, setIsExtended] = useState(false);
  const handleClick = () => {
    setIsExtended(() => !isExtended);
  };

  const image = 'image';
  const video = 'video';
  if (data.media_type === image) {
    return (
      <Wrapper>
        <Title>{data.title}</Title>
        <Subtitle>{data.copyright}</Subtitle>
        <Image src={data.url} />
        <ExtensionBtn onClick={handleClick}>
          Description{isExtended ? <StyledUpArrow /> : <StyledDownArrow />}
        </ExtensionBtn>
        <ExtensionWrapper isExtended={isExtended}>
          <Description>{data.explanation}</Description>
        </ExtensionWrapper>
      </Wrapper>
    );
  }
  if (data.media_type === video) {
    return (
      <Wrapper>
        <Title>{data.title}</Title>
        <Subtitle>{data.copyright}</Subtitle>
        <StyledFrame src={data.url}></StyledFrame>
        <ExtensionBtn onClick={handleClick}>
          Description{isExtended ? <StyledUpArrow /> : <StyledDownArrow />}
        </ExtensionBtn>
        <ExtensionWrapper isExtended={isExtended}>
          <Description>{data.explanation}</Description>
        </ExtensionWrapper>
      </Wrapper>
    );
  }
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
const StyledFrame = styled.iframe`
  width: 100%;
  margin: 0px auto;
  height: 500px;
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
  height: auto;
  display: ${(props) => (props.isExtended ? 'flex' : 'none')};
  /* border: 2px solid red; */
  padding: 5px 0px 10px;
  /* display: flex; */
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
  transition: color, text-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    transition: color, text-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--hover-main-text);
    text-shadow: var(--hover-main-text-shadow);
  }
`;
const StyledUpArrow = styled(UpArrow)`
  transition: fill, filter;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ${ExtensionBtn}:hover & {
    fill: var(--hover-main-icon);
    filter: drop-shadow(var(--hover-main-icon-shadow));
    transition: fill, filter;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`;
const StyledDownArrow = styled(DownArrow)`
  transition: fill, filter;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ${ExtensionBtn}:hover & {
    fill: var(--hover-main-icon);
    filter: drop-shadow(var(--hover-main-icon-shadow));
    transition: fill, filter;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
`;
// const StyledArrowDown = styled(ArrowDown)`
//   height: 24px;
//   width: 24px;
//   filter: drop-shadow(var(--shadow-icon));
// `;
// const StyledArrowUp = styled(ArrowUp)`
//   height: 24px;
//   width: 24px;
//   filter: drop-shadow(var(--shadow-icon));
// `;

export default APOD;

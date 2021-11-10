import React, { useState } from 'react';
import styled from 'styled-components';
import DownArrowIcon from '../../../icons/DownArrow';
import UpArrowIcon from '../../../icons/upArrow';
import IconBtn from '../../IconBtn';
import ScreenBox from '../../ScreenBox';

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
        <BtnWrap>
          <ExtensionBtn handleClick={handleClick}>
            Description
            {isExtended ? <StyledUpArrowIcon /> : <StyledDownArrowIcon />}
          </ExtensionBtn>
        </BtnWrap>
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
        <ExtensionBtn handleClick={handleClick}>
          Description
          {isExtended ? <StyledUpArrowIcon /> : <StyledDownArrowIcon />}
        </ExtensionBtn>
        <ExtensionWrapper isExtended={isExtended}>
          <Description>{data.explanation}</Description>
        </ExtensionWrapper>
      </Wrapper>
    );
  }
};

const Wrapper = styled(ScreenBox)`
  width: 100%;
  /* height: 100%; */
  padding: 10px 20px 5px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-height: 800px; */
  /* overflow-y: auto; */
`;
const Title = styled.h2`
  letter-spacing: 2px;
  color: var(--color-text);
  padding-bottom: 10px;
  text-align: center;
  font-size: 24px;
`;
const Subtitle = styled.h3`
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
  border: var(--screen-border-thin);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
`;
const StyledFrame = styled.iframe`
  width: 100%;
  margin: 0px auto;
  height: 500px;
  display: block;
  border-radius: 8px;
  border: var(--screen-border);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
`;
const Description = styled.div`
  letter-spacing: 2px;
  color: var(--color-text);
  font-family: var(--font-family-main);
  font-size: 16px;
  /* border: 2px solid black; */
  /* height: 200px; */
`;
const BtnWrap = styled.div`
  width: 100%;
  color: var(--color-text);
  display: flex;
  justify-content: center;
  padding: 10px 0px 5px;
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
const ExtensionBtn = styled(IconBtn)`
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
  font-family: var(--font-family-main);
  font-size: 1.2rem;
  transition: color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  &:hover {
    transition: color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    color: var(--highlight);
  }
`;

const StyledDownArrowIcon = styled(DownArrowIcon)`
  height: 30px;
  width: 30px;
`;
const StyledUpArrowIcon = styled(UpArrowIcon)`
  height: 30px;
  width: 30px;
`;

export default APOD;

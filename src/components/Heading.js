import React from "react";
import styled from "styled-components";

const Heading = ({ tag, children, className }) => {
  return (
    <StyledHeading className={className} as={tag}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h2`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  /* background-color: var(--color-screen); */
  border: var(--screen-border);
  border-top: none;
  border-radius: 0px 0px 12px 12px;
  /* box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light); */
  /* padding: 0px 15px 15px; */
  /* margin-bottom: 20px; */
  padding: 10px 20px;
`;

export default Heading;

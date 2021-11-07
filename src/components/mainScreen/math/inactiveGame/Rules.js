import React from "react";
import styled from "styled-components";

const Rules = ({ isDisabled }) => {
  return (
    <RulesWrapper>
      <RulesTitle>How to play</RulesTitle>
      <RulesText>
        Goal: Answer as many basic operations as you can in the time selected.
      </RulesText>
      <br />
      <RulesText>
        Once a question is answered, the correct answer will be highlighted and
        shown below the operation. The cursor will automatically move to the
        next question.
      </RulesText>
      <RulesText>
        <Highlight isConfirm>Correct</Highlight>
      </RulesText>
      <RulesText>
        <Highlight isDanger>Incorrect</Highlight>
      </RulesText>
      <br />
      <RulesText>
        The difficulty setting will determine the operands in each question.
      </RulesText>
      <br />
      <RulesText>
        <OperationRule isDanger={isDisabled}>
          You must select at least one operation.
        </OperationRule>
      </RulesText>
    </RulesWrapper>
  );
};
const RulesWrapper = styled.div`
  letter-spacing: 2px;
  color: var(--color-text);
  background-color: var(--color-screen);
  border: 2px solid var(--highlight-screen);
  box-shadow: 0px 0px 10px 4px var(--highlight-alternative-border-light);
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px 20px;
  max-width: 600px;
`;
const RulesTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  padding-bottom: 10px;
`;
const RulesText = styled.p``;
const Highlight = styled.span`
  transition: color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  color: ${(props) =>
    props.isDanger
      ? "var(--hover-danger)"
      : props.isConfirm
      ? "var(--hover-confirm)"
      : "var(--color-text)"};
`;
const OperationRule = styled(Highlight)`
  display: flex;
  flex-direction: column;
  &:after {
    content: "";
    margin-top: 4px;
    width: ${(props) => (props.isDanger ? "100%" : "0px")};
    height: 2px;
    background-color: var(--hover-danger);
    box-shadow: ${(props) =>
      props.isDanger ? "var(--hover-danger-shadow)" : "none"};
    transition: width;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
`;

export default Rules;

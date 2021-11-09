import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ className, id, checked, onChange, name, value }) => {
  return (
    <>
      <StyledCheckbox
        type="checkbox"
        value={value}
        className={className}
        onChange={onChange}
        checked={checked}
        id={id}
        name={name}
      />
    </>
  );
};
const StyledCheckbox = styled.input`
  margin-right: 5px;
  appearance: none;
  border: var(--highlight-border-thin);
  border-radius: 2px;
  width: 21px;
  height: 21px;
  display: inline-block;
  position: relative;
  transition: border-color 0.2s ease;
  &:checked {
    border: var(--confirm-border-thin);
  }
  &:before {
    content: '';
    border-right: var(--confirm-border-thin);
    border-bottom: var(--confirm-border-thin);
    height: 70%;
    width: 40%;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 1px;
    margin: auto;
    transform: rotate(45deg) translateY(-15%) translateX(-20%);
    transition: opacity 0.2s ease;
    opacity: ${(props) => (props.checked ? '1' : '0')};
  }
`;

export default Checkbox;

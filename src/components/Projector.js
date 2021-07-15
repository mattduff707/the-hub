import React from "react";
import styled from "styled-components";

const Projector = ({
  top,
  left,
  right,
  bottom,
  rotation,
  shadow,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
}) => {
  return (
    <Wrapper
      style={{
        "--position-top": top,
        "--position-right": right,
        "--position-bottom": bottom,
        "--position-left": left,
        "--rotation": rotation,
        "--shadow": shadow,
        "--border-top": borderTop,
        "--border-right": borderRight,
        "--border-bottom": borderBottom,
        "--border-left": borderLeft,
      }}
    >
      <Light />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: var(--position-top);
  right: var(--position-right);
  bottom: var(--position-bottom);
  left: var(--position-left);

  transform: rotate(var(--rotation));
  width: 60px;
  height: 35px;
  border-radius: 15px 50px 50px 15px;
  background-color: var(--highlight-main);
  border-top: var(--border-top);
  border-left: var(--border-left);
  border-bottom: var(--border-bottom);
  border-right: var(--border-right);
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Light = styled.div`
  background: var(--highlight-alternative);
  border: 1px solid var(--highlight-alternative-border-light);
  width: 70%;
  height: 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px hsla(220, 90%, 56%, 1);
`;

export default Projector;

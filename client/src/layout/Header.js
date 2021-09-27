import React from "react";
import styled from "styled-components";

import Clock from "../components/header/Clock";

const Header = () => {
  return (
    <Wrapper>
      <Clock />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  /* margin-bottom: 40px; */

  /* z-index: 1; */
`;
export default Header;

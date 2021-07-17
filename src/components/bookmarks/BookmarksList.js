import React from "react";
import styled from "styled-components";
import CoolScreen from "../CoolScreen";
import ScreenIndent from "../ScreenIndent";

const BookmarksList = () => {
  return (
    <Wrapper>
      <ScreenIndent long>
        <CoolScreen sideScreen>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni
            sint illum excepturi cupiditate consectetur nisi odio accusantium
            vero optio eum consequatur exercitationem, eligendi esse tempora
            beatae fugit voluptate ex.
          </p> */}
        </CoolScreen>
      </ScreenIndent>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  /* border: 10px solid var(--shadow-main-border-dark);
  border-right: 6px solid var(--shadow-main-border-light);
  border-bottom: 6px solid var(--shadow-main-border-light);
  border-radius: 20px;
  background-color: var(--shadow-main);
  box-shadow: var(--inset-shadow);
  height: 100%; */
  /* margin: 30px 0px; */
  height: 100%;
`;

export default BookmarksList;

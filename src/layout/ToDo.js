import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Done from "../components/todo/Done";
import NotDone from "../components/todo/NotDone";

const ToDo = () => {
  const [notDoneArr, setNotDoneArr] = useState(["Second Todo", "Third Todo"]);
  const [doneArr, setDoneArr] = useState(["First Todo"]);

  useEffect(() => {
    // window.localStorage.clear();
    // const doneArr = ["Second Item", "Third Item"];
    // const notDoneArr = ["First Item"];
    // window.localStorage.setItem("doneArr", JSON.stringify(doneArr));
    // window.localStorage.setItem("notDoneArr", JSON.stringify(notDoneArr));
    // const windowStorage = JSON.parse(window.localStorage.getItem("doneArr"));
    // console.log(windowStorage);
    // setnotDoneArr(JSON.parse(window.localStorage.getItem("notDoneArr")));
    // setdoneArr(JSON.parse(window.localStorage.getItem("doneArr")));
    // console.log(notDoneArr, doneArr);
  }, []);

  return (
    <Wrapper>
      <NotDone notDoneArr={notDoneArr} />
      <Done doneArr={doneArr} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid green; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0px 30px 40px;
`;

export default ToDo;

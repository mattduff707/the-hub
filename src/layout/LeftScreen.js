import React from "react";
import styled from "styled-components";
import TodoList from "../components/todo/TodoList";
import CoolScreen from "../components/CoolScreen";
import ScreenIndent from "../components/ScreenIndent";

const LeftScreen = () => {
  // const [notDoneArr, setNotDoneArr] = useState(["Second Todo", "Third Todo"]);
  // const [doneArr, setDoneArr] = useState(["First Todo"]);

  // useEffect(() => {
  //   // window.localStorage.clear();
  //   // const doneArr = ["Second Item", "Third Item"];
  //   // const notDoneArr = ["First Item"];
  //   // window.localStorage.setItem("doneArr", JSON.stringify(doneArr));
  //   // window.localStorage.setItem("notDoneArr", JSON.stringify(notDoneArr));
  //   // const windowStorage = JSON.parse(window.localStorage.getItem("doneArr"));
  //   // console.log(windowStorage);
  //   // setnotDoneArr(JSON.parse(window.localStorage.getItem("notDoneArr")));
  //   // setdoneArr(JSON.parse(window.localStorage.getItem("doneArr")));
  //   // console.log(notDoneArr, doneArr);
  // }, []);

  return (
    <Wrapper>
      <ScreenIndent long>
        <CoolScreen sideScreen>
          <TodoList />
        </CoolScreen>
      </ScreenIndent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 4px solid green; */
  flex: 1;
  height: 100%;
  padding: 0px 0px 30px 40px;
`;

export default LeftScreen;

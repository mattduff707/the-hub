import axios from "axios";
import { api } from "../../constants";

const reducer = (
  state = { loading: true, error: false, tasklist: [], donelist: [] },
  action
) => {
  switch (action.type) {
    case "INIT_TASKLIST":
      console.log(action.payload);
      return {
        loading: false,
        error: false,
        tasklist: action.payload.tasksResponse,
        donelist: action.payload.doneResponse,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasklist: [...state.tasklist, action.payload],
      };
    case "REMOVE_TASK":
      const filteredList = state.tasklist.filter(
        (task) => task._id !== action.payload
      );
      return { ...state, tasklist: filteredList };
    case "EDIT_TASK":
      const editedList = state.tasklist.map((task) => {
        if (task._id === action.payload._id) {
          task.value = action.payload.newText;
          return task;
        }
        return task;
      });
      return { ...state, tasklist: editedList };
    case "FINISH_TASK":
      return {
        ...state,
        donelist: [...state.donelist, action.payload],
      };
    case "ERROR":
      return {
        loading: false,
        error: action.payload,
        tasklist: [...state.tasklist],
      };
    default:
      return state;
  }
};

export async function fetchTodos(dispatch) {
  const tasksResponse = await axios.get(api).then((res) => res.data);
  const doneResponse = await axios
    .get(api + "donelist/")
    .then((res) => res.data);
  dispatch({ type: "INIT_TASKLIST", payload: { tasksResponse, doneResponse } });
}

export default reducer;

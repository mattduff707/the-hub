import axios from "axios";
import { api } from "../../constants";
export const addTask = (text) => {
  return (dispatch) => {
    let newTask = {
      value: text,
      date_added: new Date().toLocaleString([], {
        hour12: true,
        dateStyle: "short",
        timeStyle: "short",
      }),
      completed: false,
      date_completed: false,
    };
    return axios
      .post(api, newTask)
      .then((res) => {
        newTask._id = res.data;
        return dispatch({
          type: "ADD_TASK",
          payload: newTask,
        });
      })
      .catch((err) => console.log(err.message));
  };
};

export const removeTask = (_id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: _id,
    });
    return axios.delete(api + _id).then((res) => {
      console.log(res);
    });
  };
};

export const editTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_TASK",
      payload: task,
    });
    return axios.patch(api + task._id, { value: task.newText });
  };
};

export const finishTask = (task) => {
  return (dispatch) => {
    const taskObj = {
      _id: task._id,
      completed: !task.completed,
      date_completed: new Date().toLocaleString([], {
        hour12: true,
        dateStyle: "short",
        timeStyle: "short",
      }),
    };
    dispatch({ type: "TOGGLE_COMPLETE", payload: taskObj });
    return axios.patch(api + `done/${task._id}`, taskObj);
  };
};

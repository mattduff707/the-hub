import axios from "axios";
import { api } from "../../constants";
export const addTask = (text) => {
  return (dispatch) => {
    let newTask = {
      value: text,
      date_added: new Date(),
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
    // dispatch({
    //   type: 'ADD_TASK',
    //   payload: { value: text, date_added: 'now', _id: taskId },
    // });
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
    let doneTask = {
      value: task.value,
      date_added: task.date_added,
      date_completed: new Date(),
    };
    return axios
      .post(api + "donelist/", doneTask)
      .then((res) => {
        doneTask._id = res.data;
        return dispatch({ type: "FINISH_TASK", payload: doneTask });
      })
      .catch((err) => console.log(err.message));
  };
};

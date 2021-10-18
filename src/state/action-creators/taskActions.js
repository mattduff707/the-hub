import axios from 'axios';
import { api } from '../../constants';
export const addTask = (text) => {
  return (dispatch) => {
    return axios
      .post(api, { value: text, date_added: 'now' })
      .then((res) => dispatch({ type: 'ADD_TASK', payload: { value: text, date_added: 'now', _id: res.data } }))
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
      type: 'REMOVE_TASK',
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
      type: 'EDIT_TASK',
      payload: task,
    });
    return axios.patch(api + task._id, { value: task.newText });
  };
};

import axios from 'axios';

export async function fetchTodos(dispatch) {
  const tasksResponse = await axios.get(process.env.REACT_APP_TASKLIST_URL).then((res) => res.data);

  dispatch({ type: 'INIT_TASKLIST', payload: { tasksResponse } });
}
export const addTask = (text) => {
  return (dispatch) => {
    let newTask = {
      value: text,
      date_added: new Date(),
      completed: false,
      date_completed: false,
    };
    return axios
      .post(process.env.REACT_APP_TASKLIST_URL, newTask)
      .then((res) => {
        newTask._id = res.data;
        return dispatch({
          type: 'ADD_TASK',
          payload: newTask,
        });
      })
      .catch((err) => console.log(err.message));
  };
};

export const removeTask = (_id) => {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: _id,
    });
    return axios.delete(process.env.REACT_APP_TASKLIST_URL + _id).then((res) => {
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
    return axios.patch(process.env.REACT_APP_TASKLIST_URL + task._id, { value: task.newText });
  };
};

export const finishTask = (task) => {
  return (dispatch) => {
    const taskObj = {
      _id: task._id,
      completed: !task.completed,
      date_completed: new Date(),
    };
    dispatch({ type: 'TOGGLE_COMPLETE', payload: taskObj });
    return axios.patch(process.env.REACT_APP_TASKLIST_URL + `done/${task._id}`, taskObj);
  };
};

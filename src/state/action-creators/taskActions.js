export const addTask = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'ADD_TASK',
      payload: text,
    });
  };
};

export const removeTask = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: id,
    });
  };
};

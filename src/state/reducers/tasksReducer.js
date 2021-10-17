import axios from 'axios';

const reducer = (state = { loading: true, error: false, tasklist: [] }, action) => {
  switch (action.type) {
    case 'INIT_TASKLIST':
      return { loading: false, tasklist: action.payload };
    case 'ADD_TASK':
      return { loading: false, error: false, tasklist: [...state.tasklist, action.payload] };
    case 'ERROR':
      return { loading: false, error: action.payload, tasklist: [...state.tasklist] };
    // case 'REMOVE_TASK':
    //   return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export async function fetchTodos(dispatch) {
  const response = await axios.get('https://the-hub-server.herokuapp.com/tasklist/').then((res) => res.data);

  dispatch({ type: 'INIT_TASKLIST', payload: response });
}

export default reducer;

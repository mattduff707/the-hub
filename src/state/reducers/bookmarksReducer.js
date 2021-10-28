const reducer = (state = { loading: true, error: false, bookmarks: [] }, action) => {
  switch (action.type) {
    case 'INIT_BOOKMARKS':
      console.log(action.payload);
      return {
        loading: false,
        error: false,
        bookmarks: action.payload.response,
      };
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    // case 'REMOVE_TASK':
    //   const filteredList = state.tasklist.filter((task) => task._id !== action.payload);
    //   return { ...state, tasklist: filteredList };
    // case 'EDIT_TASK':
    //   const editedList = state.tasklist.map((task) => {
    //     if (task._id === action.payload._id) {
    //       task.value = action.payload.newText;
    //       return task;
    //     }
    //     return task;
    //   });
    //   return { ...state, tasklist: editedList };
    // case 'TOGGLE_COMPLETE':
    //   const editedListComplete = state.tasklist.map((task) => {
    //     if (task._id === action.payload._id) {
    //       if (task.date_completed) {
    //         task.date_completed = false;
    //         task.completed = !task.completed;
    //         return task;
    //       }
    //       task.completed = !task.completed;
    //       task.date_completed = action.payload.date_completed;
    //       return task;
    //     }
    //     return task;
    //   });
    //   return { ...state, tasklist: editedListComplete };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

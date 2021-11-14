import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import bookmarksReducer from "./bookmarksReducer";
import snippetsReducer from "./snippetsReducer";

const reducers = combineReducers({
  tasks: tasksReducer,
  bookmarks: bookmarksReducer,
  snippets: snippetsReducer,
});

export default reducers;

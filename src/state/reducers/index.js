import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import bookmarksReducer from "./bookmarksReducer";
import snippetsReducer from "./snippetsReducer";
import flashReducer from "./flashReducer";

const reducers = combineReducers({
  tasks: tasksReducer,
  bookmarks: bookmarksReducer,
  snippets: snippetsReducer,
  flash: flashReducer,
});

export default reducers;

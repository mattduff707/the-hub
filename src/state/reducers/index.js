import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import bookmarksReducer from './bookmarksReducer';

const reducers = combineReducers({
  tasks: tasksReducer,
  bookmarks: bookmarksReducer,
});

export default reducers;

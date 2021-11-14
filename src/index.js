import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { fetchTodos } from "./state/action-creators/taskActions";
import { fetchBookmarks } from "./state/action-creators/bookmarkActions";
import { fetchSnippets } from "./state/action-creators/snippetActions";

store.dispatch(fetchTodos);
store.dispatch(fetchBookmarks);
store.dispatch(fetchSnippets);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

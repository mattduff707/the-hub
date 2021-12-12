import axios from "axios";

export async function fetchBookmarks(dispatch) {
  const response = await axios
    .get(process.env.REACT_APP_BOOKMARKS_URL)
    .then((res) => res.data);

  dispatch({ type: "INIT_BOOKMARKS", payload: { response } });
}

export const addBookmark = (bookmarkObj) => {
  return (dispatch) => {
    return axios
      .post(process.env.REACT_APP_BOOKMARKS_URL, bookmarkObj)
      .then((res) => {
        const newObj = {
          title: bookmarkObj.title,
          base_url: bookmarkObj.base_url,
          search_url: bookmarkObj.search_url,
          favorite: bookmarkObj.favorite,
          _id: res.data,
        };
        return dispatch({ type: "ADD_BOOKMARK", payload: newObj });
      })
      .catch((err) => console.log(err));
  };
};
export const editBookmark = (bookmarkObj) => {
  return (dispatch) => {
    dispatch({
      type: "EDIT_BOOKMARK",
      payload: bookmarkObj,
    });
    return axios.patch(
      process.env.REACT_APP_BOOKMARKS_URL + bookmarkObj._id,
      bookmarkObj
    );
  };
};
export const removeBookmark = (_id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_BOOKMARK",
      payload: _id,
    });
    return axios
      .delete(process.env.REACT_APP_BOOKMARKS_URL + _id)
      .then((res) => {
        console.log(res);
      });
  };
};

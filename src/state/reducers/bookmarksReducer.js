const sortBookmarks = (x, y) => {
  return x.title.localeCompare(y.title);
};

const reducer = (state = { loading: true, error: false, bookmarks: [] }, action) => {
  switch (action.type) {
    case 'INIT_BOOKMARKS':
      return {
        loading: false,
        error: false,
        bookmarks: action.payload.response.sort(sortBookmarks),
      };
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload].sort(sortBookmarks),
      };
    case 'REMOVE_BOOKMARK':
      const filteredList = state.bookmarks.filter((bookmark) => bookmark._id !== action.payload);
      return { ...state, bookmarks: filteredList };
    case 'EDIT_BOOKMARK':
      const editedList = state.bookmarks
        .map((bookmark) => {
          if (bookmark._id === action.payload._id) {
            bookmark.title = action.payload.title;
            bookmark.base_url = action.payload.base_url;
            bookmark.search_url = action.payload.search_url;
            bookmark.favorite = action.payload.favorite;
            return bookmark;
          }
          return bookmark;
        })
        .sort(sortBookmarks);

      return { ...state, bookmarks: editedList };
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

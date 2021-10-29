const sortBookmarks = (x, y) => {
  return x.title.localeCompare(y.title);
};
const createSortedList = (arr) => {
  const favoritesList = arr.filter((bookmark) => bookmark.favorite).sort(sortBookmarks);
  const othersList = arr.filter((bookmark) => !bookmark.favorite).sort(sortBookmarks);
  return [...favoritesList, ...othersList];
};

const reducer = (state = { loading: true, error: false, bookmarks: [] }, action) => {
  switch (action.type) {
    case 'INIT_BOOKMARKS':
      return {
        loading: false,
        error: false,
        bookmarks: createSortedList(action.payload.response),
      };
    case 'ADD_BOOKMARK':
      return {
        ...state,
        bookmarks: createSortedList([...state.bookmarks, action.payload]),
      };
    case 'REMOVE_BOOKMARK':
      const filteredList = state.bookmarks.filter((bookmark) => bookmark._id !== action.payload);
      return { ...state, bookmarks: filteredList };
    case 'EDIT_BOOKMARK':
      const editedList = state.bookmarks.map((bookmark) => {
        if (bookmark._id === action.payload._id) {
          bookmark.title = action.payload.title;
          bookmark.base_url = action.payload.base_url;
          bookmark.search_url = action.payload.search_url;
          bookmark.favorite = action.payload.favorite;
          return bookmark;
        }
        return bookmark;
      });
      return { ...state, bookmarks: createSortedList(editedList) };
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

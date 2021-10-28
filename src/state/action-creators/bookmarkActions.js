import axios from 'axios';

export async function fetchBookmarks(dispatch) {
  const response = await axios.get(process.env.REACT_APP_BOOKMARKS_URL).then((res) => res.data);

  dispatch({ type: 'INIT_BOOKMARKS', payload: { response } });
}

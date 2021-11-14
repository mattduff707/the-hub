import axios from "axios";

export async function fetchSnippets(dispatch) {
  const snippetsResponse = await axios
    .get(process.env.REACT_APP_SNIPPETS_URL)
    .then((res) => res.data);

  dispatch({ type: "INIT_SNIPPETS", payload: { snippetsResponse } });
}

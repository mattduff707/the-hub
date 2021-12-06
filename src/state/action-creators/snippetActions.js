import axios from "axios";

export async function fetchSnippets(dispatch) {
  const snippetsResponse = await axios
    .get(process.env.REACT_APP_SNIPPETS_URL)
    .then((res) => res.data);
  const categoriesArr = snippetsResponse.map((snippetObj) => {
    return snippetObj.category;
  });
  const uniqueCategoriesArr = [...new Set(categoriesArr)];

  dispatch({
    type: "INIT_SNIPPETS",
    payload: { snippetsResponse, categories: uniqueCategoriesArr },
  });
  // dispatch({ type: "INIT_CATEGORIES", payload: {} });
}

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
}

export const addSnippet = (snippet) => {
  return (dispatch) => {
    return axios
      .post(process.env.REACT_APP_SNIPPETS_URL, snippet)
      .then((res) => {
        const snippetWithId = {
          title: snippet.title,
          category: snippet.category,
          description: snippet.description,
          codeArr: snippet.codeArr,
          _id: res.data,
          path: snippet.path,
        };
        return dispatch({ type: "ADD_SNIPPET", payload: snippetWithId });
      })
      .catch((err) => console.log(err));
  };
};

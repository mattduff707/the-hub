const reducer = (
  state = { loading: true, error: false, snippets: [] },
  action
) => {
  if (action.type === "INIT_SNIPPETS") {
    return {
      loading: false,
      error: false,
      snippets: action.payload.snippetsResponse,
      categories: action.payload.categories,
    };
  }
  return state;
};

export default reducer;

const reducer = (
  state = { loading: true, error: false, snippets: [] },
  action
) => {
  if (action.type === "INIT_SNIPPETS") {
    console.log("hit");
    return {
      loading: false,
      error: false,
      snippets: action.payload.snippetsResponse,
    };
  }
  return state;
};

export default reducer;

const reducer = (
  state = { loading: true, error: false, snippets: [], categories: [] },
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
  if (action.type === "ADD_SNIPPET") {
    if (state.categories.includes(action.payload.category)) {
      return { ...state, snippets: [...state.snippets, action.payload] };
    }
    return {
      ...state,
      snippets: [...state.snippets, action.payload],
      categories: [...state.categories, action.payload.category],
    };
  }
  if (action.type === "REMOVE_SNIPPET") {
    const stateWithSnippetRemoved = state.snippets.filter(
      (snippet) => snippet._id !== action.payload
    );
    return { ...state, snippets: stateWithSnippetRemoved };
  }
  if (action.type === "REMOVE_CATEGORY") {
  }
  return state;
};

export default reducer;

import { FLASH_ACTIONS } from "../action-creators/flashActions";

const reducer = (
  state = { loading: true, fetched: false, error: false, cards: [] },
  action
) => {
  switch (action.type) {
    case FLASH_ACTIONS.INIT:
      return { ...state, loading: false, cards: action.payload };
    default:
      return state;
  }
};

export default reducer;

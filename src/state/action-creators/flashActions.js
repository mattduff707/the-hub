import axios from "axios";

export const FLASH_ACTIONS = {
  INIT: "INIT_FLASH",
};

export async function fetchFlashcards(dispatch) {
  const response = await axios
    .get(process.env.REACT_APP_FLASH_URL)
    .then((res) => res.data);

  dispatch({ type: FLASH_ACTIONS.INIT, payload: response });
}

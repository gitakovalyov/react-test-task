import {SAVE_ITEMS} from "../constants/TestTask";

const initialState = {
  items: {}
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_ITEMS:
        return Object.assign({}, ...state, {items: action.data});
        default:
            return state;
    }
};

export default Reducer;

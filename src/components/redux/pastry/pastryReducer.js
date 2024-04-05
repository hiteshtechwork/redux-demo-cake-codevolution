import { BUY_PASTRY } from "./pastryTypes";

const initialStatePastry = {
  numOfPastry: 8,
};

const pastryReducer = (state = initialStatePastry, action) => {
  switch (action.type) {
    case BUY_PASTRY:
      return { ...state, numOfPastry: state.numOfPastry - 1 };

    default:
      return state;
  }
};

export default pastryReducer;

import { BUY_ICECREAM } from "./iceCreamType";

const initialStateIceCream = {
  numOfIceCream: 20,
};
const iceCreamReducer = (state = initialStateIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      console.log(state.numOfIceCream);
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;

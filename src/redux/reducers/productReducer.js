import { ActionTypes } from "../constants/action-types";
const intialState = {
  //products: [],
  products: [
    {
        id: 1,
        title: "Test1",
        category: "Cloths"
    }
  ],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
      //return { ...state, products: payload };
    default:
      return state;
  }
};


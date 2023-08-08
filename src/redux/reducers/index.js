import { combineReducers } from "redux";
import { productsReducer} from "./productReducer";
//import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  //product: selectedProductsReducer,
});
export default reducers;
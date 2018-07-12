import {combineReducers} from "redux";
import testReducer from "./testReducer";
import articleReducer from "./articleReducer";
import productReducer from "./productReducer"

const rootReducer = combineReducers({
  test : testReducer,
  article: articleReducer,
  products:productReducer
});



export default rootReducer;
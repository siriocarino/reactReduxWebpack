import {combineReducers} from "redux";
import testReducer from "./testReducer";
import articleReducer from "./articleReducer";
import productReducer from "./productReducer"
import catReducer from "./catReducer"

const rootReducer = combineReducers({
  test : testReducer,
  article: articleReducer,
  products:productReducer,
  catReducer:catReducer
});



export default rootReducer;
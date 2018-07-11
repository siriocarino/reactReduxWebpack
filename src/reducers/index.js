import {combineReducers} from "redux";
import testReducer from "./testReducer";
import articleReducer from "./articleReducer";


const rootReducer = combineReducers({
  test : testReducer,
  article: articleReducer
});



export default rootReducer;
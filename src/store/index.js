import { createStore } from "redux";
import rootReducer from "../reducers/index";
const reduxDevTools =   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // dubugger redux



const store = createStore(rootReducer,reduxDevTools);


export default store;





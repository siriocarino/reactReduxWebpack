import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'; // for applyMiddleware
import rootReducer from "../reducers/index";
const reduxDevTools =   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // dubugger redux
import { testMiddleWare } from '../middleware/index'
import logger from 'redux-logger'


const store = createStore(
     rootReducer,
     reduxDevTools,
     applyMiddleware(
          testMiddleWare,
          logger,
          thunk
     )
);




export default store;





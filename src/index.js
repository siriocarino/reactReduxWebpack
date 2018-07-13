import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";

import './materialize.min.scss';



store.subscribe(() => {
  console.log(store.getState());
});





render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById("app")
   );

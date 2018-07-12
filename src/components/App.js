import React from "react";
import ListComponent from "./List";
import Form from "./Form";
import SampleComponent from './SampleComponent'



const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align"><SampleComponent /></div>
        <div className="col s4"><Form /></div>
        <div className="col s8"><ListComponent /></div>

      </div>
    </div>
  );
};
export default App;
import React from "react";
import ListComponent from "./List";
import Form from "./Form";
import SampleComponent from './SampleComponent'



const App = () => {
  return (
    <div className="container">
      <div><SampleComponent /></div>
      <div><ListComponent /></div>
      <div><Form /></div>
    </div>
  );
};
export default App;
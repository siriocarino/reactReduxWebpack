import React from "react";
import ListComponent from "./List";
import Form from "./Form";
import SampleComponent from './SampleComponent'



const App = () => {
  return (
    <div>
      <h2>Sample Component</h2>
       <SampleComponent />
      <h2>Articles</h2>
      <ListComponent />
      <h2>Add a new article</h2>
      <Form />
    </div>
  );
};
export default App;
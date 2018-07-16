
import React from "react";
export const DumbComponent = (props) => {

     const { text, onChange } = props;
     
     return (
       <div>
         <p>Your text: {text}</p>
         <input value={text} onChange={onChange} />
       </div>
     );
   
   };
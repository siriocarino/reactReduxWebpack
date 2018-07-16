import React from "react";
import { connect } from "react-redux";
import { updateText } from "../actions/index";
import { DumbComponent } from "./DumbComponent";

class SmartContainer extends React.Component {
     render() {
       const { text, updateText } = this.props;
       return (
         <DumbComponent text={text} onChange={updateText} />
       );
     }
   }
   
   const mapStateToProps = (state) => ({
     text: state.text
   });
   
   const mapDispatchToProps = (dispatch) => ({
     updateText: (evt) => dispatch(updateText(evt.target.text))
   });
   
   export default connect(mapStateToProps, mapDispatchToProps)(SmartContainer);
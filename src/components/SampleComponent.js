import React, {Component} from "react";
import {connect} from "react-redux";

const mapState = state => ({
    name : state.test.name,
    data : state.test.data,
});



class SampleComponent extends Component {
   
    render() {
        const {name, data} = this.props;

        return (
            <div>
                Data from Redux: {name} {data} 
            </div>
            
        );
    }
}

export default connect(mapState)(SampleComponent);
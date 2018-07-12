import React, {Component} from "react";
import {connect} from "react-redux";

const mapState = state => ({
    name : state.test.name,
    data : state.test.data,
});

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';


class SampleComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          hits: [],
          isLoading: false,

        };
      }
    
    
      componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API + DEFAULT_QUERY)
        //   .then(response => response.json())
        //   .then(data => this.setState({ hits: data.hits }));

          .then((response) => response.json())
          .then((data) => {
              console.log(data.hits)
             
            return  this.setState(  { hits: data.hits, isLoading: false })
          })
          .catch(error => this.setState({ error, isLoading: false }));


      }
    

    render() {
        const {name, data} = this.props;
        const { hits } = this.state;

        if (isLoading) {
          return <p>Loading ...</p>;
        }
        
        return (
            <div>
                Data from Redux: {name} {data} 

 {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}

            </div>
            
        );
    }
}

export default connect(mapState)(SampleComponent);
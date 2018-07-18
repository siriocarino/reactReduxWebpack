import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/index";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    if(products){
      return (
        <div>
        <ul>
          {products.map(product =>
           <li key={product.data.id}>{product.data.id}</li>
         )}
        </ul>
  
        </div>
      )
    }
    return(
      <div></div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items.children,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);
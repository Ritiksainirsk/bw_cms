import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

import Const from '../../util/Constants';
import FieldProduct from './FieldProduct';

class FieldProducts extends React.Component {
  
  constructor(props) {
    super(props);
    this.products = reactLocalStorage.getObject(Const.Model).product.options;
    
    this.state = { products: [this.product], inValid: {} };
  }

  addProduct = () => {
    const products = [...this.state.products];
    products.push(this.product);
    this.setState({ ...this.state, products: [...products] });
  }

  deleteProduct = i => {
    let products = [...this.state.products];
    products = products.filter( (_, index) => index !== i);
    this.setState({ ...this.state, products: [...products] });
  }

  getProductList = () => {
    return this.state.products.map((product, i) => 
      <FieldProduct key={`sales_product_${i}`} index={i} len={this.state.products.length - 1}
        product={product} addProduct={this.addProduct} deleteProduct={this.deleteProduct} />
    );
  }

  render() {
    const products = this.getProductList();

    return (
      <div className="col">
        <table>
          <thead>
            <th>Name</th> <th>Price</th> <th>Quantity</th> <th>Service</th> <th>Before Discount</th>
            <th>Discount</th> <th>Discount %</th> <th>Before tax</th> <th>Tax %</th> <th>Total</th>
            <th>Action</th>
          </thead>
          <tbody> {products} </tbody>
        </table>
      </div>
    );
  }
}
export default FieldProducts;
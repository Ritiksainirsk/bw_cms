import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import AsyncSelect from 'react-select/async';
import { FaTrash, FaPlus } from 'react-icons/fa';

import Util from '../../util/Util';

class FieldProduct extends React.Component {
  
  constructor(props) {
    super(props);

    let product = props.products.find(product => product.value === props.product.id);
    product = product === undefined ? 0 : product;
    this.state = { ...props.product , product};
  }

  onChange = (field, value) => {
    let product = {...this.state};
    if(field === 'product') { product.price = value.price; product.quantity = 1; }
    //else if(field !== 'product' && value !== '') { value = Util.round(parseFloat(value), 2); }
    product[field] = value;
    product = this.setData(product, field);
    this.props.onValueChange(product, this.props.index);
    this.setState({ ...this.state, ...product });
  }

  setData = (product, field) => {
    product.prediscount = Util.round(product.price * parseInt(product.quantity), 2);
    if(field === 'discountp') {
      product.discount = Util.round(product.prediscount * (parseFloat(product.discountp) / 100), 2);
    } else if(field === 'discount') {
      product.discountp = Util.round((parseFloat(product.discount) / product.prediscount) * 100, 2);
    }
    product.pretax = Util.round(product.prediscount - parseFloat(product.discount), 2);
    if(field === 'commissionp') {
      product.commission = Util.round(product.pretax * (parseFloat(product.commissionp) / 100), 2);
    } else if(field === 'commission') {
      product.commissionp = Util.round((parseFloat(product.commission) / product.pretax) * 100, 2);
    }
    product.total = Util.round(product.pretax * ( 1 + (parseFloat(product.tax) / 100)), 2);
    return product;
  }

  onSearch = (text, callback) => {
    let products = [];
    if(text.length > 2) {
      products = this.props.products.filter(product => product.label.replace(' ', '')
        .toLowerCase().includes(text.replace(' ', '').toLowerCase()));
    }
    callback(products);
  }

  render() {
    const product = this.state;
    const props = this.props;
    const unit = product.product ? this.props.units.find(
      unit => unit.value === product.product.unit_measure) : null;
    return (
      <tr>
        <td>
          <AsyncSelect cacheOptions isMulti={false} loadOptions={this.onSearch}
            onChange={select => this.onChange('product', select)} value={product.product} />
        </td>
        <td> 
          { product.product &&
            <FormControl type="text" placeholder="Price" value={product.price}
              onChange={event => this.onChange('price', event.target.value)} />
          }
        </td>
        <td>
          { product.product &&
            <FormControl type="text" placeholder="Quantity" value={product.quantity}
              onChange={event => this.onChange('quantity', event.target.value)} />
          }
          { unit && <span>{unit.label}</span>}
        </td>
        {/*
        <td>
          { product.product &&
          <FormControl type="text" placeholder="Service" value={product.service}
            onChange={event => this.onChange('service', event.target.value)} />
          }
        </td>
        */}
        <td> {product.prediscount} </td>
        <td>
          { product.product &&
            <FormControl type="text" placeholder="Discount" value={product.discount}
              onChange={event => this.onChange('discount', event.target.value)} />
          }
        </td>
        <td>
          { product.product &&
            <FormControl type="text" placeholder="Discount %" value={product.discountp}
              onChange={event => this.onChange('discountp', event.target.value)} />
          }
        </td>
        <td> {product.pretax} </td>
        <td>
          { product.product &&
            <FormControl type="text" placeholder="Commission" value={product.commission}
              onChange={event => this.onChange('commission', event.target.value)} />
          }
        </td>
        <td>
          { product.product &&
            <FormControl type="text" placeholder="Commission %" value={product.commissionp}
              onChange={event => this.onChange('commissionp', event.target.value)} />
          }
        </td>
        <td>
          { product.product &&
            <FormControl type="text" placeholder="Tax" value={product.tax}
              onChange={event => this.onChange('tax', event.target.value)} />
          }
        </td>
        <td>{product.total}</td>
        <td>
          { props.len === props.index && <FaPlus onClick={props.addProduct} /> }
          { props.index < props.len && <FaTrash onClick={() => props.deleteProduct(props.index)} /> }
        </td>
      </tr>
    );
  }
}
export default FieldProduct;
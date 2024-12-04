import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import AsyncSelect from 'react-select/async';
import { FaTrash, FaPlus } from 'react-icons/fa';

import Util from '../../util/Util';

class FieldProperty extends React.Component {
  
  constructor(props) {
    super(props);

    let property = props.property.find(property => property.value === props.property.id);
    property = property === undefined ? 0 : property;
    this.state = { ...props.property , property};
  }

  onChange = (field, value) => {
    let property = {...this.state};
    if(field === 'property') { property.price = value.price; property.quantity = 1; }
    //else if(field !== 'property' && value !== '') { value = Util.round(parseFloat(value), 2); }
    property[field] = value;
    property = this.setData(property, field);
    this.props.onValueChange(property, this.props.index);
    this.setState({ ...this.state, ...property });
  }

  setData = (property, field) => {
    property.prediscount = Util.round(property.price * parseInt(property.quantity), 2);
    if(field === 'discountp') {
      property.discount = Util.round(property.prediscount * (parseFloat(property.discountp) / 100), 2);
    } else if(field === 'discount') {
      property.discountp = Util.round((parseFloat(property.discount) / property.prediscount) * 100, 2);
    }
    property.pretax = Util.round(property.prediscount - parseFloat(property.discount), 2);
    if(field === 'commissionp') {
      property.commission = Util.round(property.pretax * (parseFloat(property.commissionp) / 100), 2);
    } else if(field === 'commission') {
      property.commissionp = Util.round((parseFloat(property.commission) / property.pretax) * 100, 2);
    }
    property.total = Util.round(property.pretax * ( 1 + (parseFloat(property.tax) / 100)), 2);
    return property;
  }

  onSearch = (text, callback) => {
    let propertys = [];
    if(text.length > 2) {
      propertys = this.props.propertys.filter(property => property.label.replace(' ', '')
        .toLowerCase().includes(text.replace(' ', '').toLowerCase()));
    }
    callback(propertys);
  }

  render() {
    const property = this.state;
    const props = this.props;
    const unit = property.property ? this.props.units.find(
      unit => unit.value === property.property.unit_measure) : null;
    return (
      <tr>
        <td>
          <AsyncSelect cacheOptions isMulti={false} loadOptions={this.onSearch}
            onChange={select => this.onChange('property', select)} value={property.property} />
        </td>
        <td> 
          { property.property &&
            <FormControl type="text" placeholder="Price" value={property.price}
              onChange={event => this.onChange('price', event.target.value)} />
          }
        </td>
        <td>
          { property.property &&
            <FormControl type="text" placeholder="Quantity" value={property.quantity}
              onChange={event => this.onChange('quantity', event.target.value)} />
          }
          { unit && <span>{unit.label}</span>}
        </td>
        {/*
        <td>
          { property.property &&
          <FormControl type="text" placeholder="Service" value={property.service}
            onChange={event => this.onChange('service', event.target.value)} />
          }
        </td>
        */}
        <td> {property.prediscount} </td>
        <td>
          { property.property &&
            <FormControl type="text" placeholder="Discount" value={property.discount}
              onChange={event => this.onChange('discount', event.target.value)} />
          }
        </td>
        <td>
          { property.property &&
            <FormControl type="text" placeholder="Discount %" value={property.discountp}
              onChange={event => this.onChange('discountp', event.target.value)} />
          }
        </td>
        <td> {property.pretax} </td>
        <td>
          { property.property &&
            <FormControl type="text" placeholder="Commission" value={property.commission}
              onChange={event => this.onChange('commission', event.target.value)} />
          }
        </td>
        <td>
          { property.property &&
            <FormControl type="text" placeholder="Commission %" value={property.commissionp}
              onChange={event => this.onChange('commissionp', event.target.value)} />
          }
        </td>
        <td>
          { property.property &&
            <FormControl type="text" placeholder="Tax" value={property.tax}
              onChange={event => this.onChange('tax', event.target.value)} />
          }
        </td>
        <td>{property.total}</td>
        <td>
          { props.len === props.index && <FaPlus onClick={props.addproperty} /> }
          { props.index < props.len && <FaTrash onClick={() => props.deleteproperty(props.index)} /> }
        </td>
      </tr>
    );
  }
}
export default FieldProperty;
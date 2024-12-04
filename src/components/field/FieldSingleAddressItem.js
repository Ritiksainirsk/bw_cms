import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

import FieldCity from './FieldCity';
import FieldState from './FieldState';
import FieldCountry from './FieldCountry';
import Const from '../../util/Constants';
import RegEx from '../../util/RegEx';

class FieldSingleAddressItem extends React.Component {
  
  constructor(props) {
    super(props);
    let city = undefined, state = undefined, country = undefined;
    if(props.value.city) city =  FieldCity.getCityById(props.value.city);
    if(props.value.state) state = FieldState.getStateById(props.value.state);
    if(props.value.country) country = FieldCountry.getCountryById(props.value.country);

    this.state = { street: props.value.street ? props.value.street : '',
      city, state, country, pin: props.value.pin ? props.value.pin : '', inValid: {} };  
  }

  handleChange = (field, text) => {
    const tmp = {...this.state};
    tmp[field] = text;
    this.props.onUpdate(this.props.index, { ...tmp });
    this.setState({ ...tmp });
  }

  onCitySelected = city => {
    if(city) {
      const state = FieldState.getStateById(city.state_id);
      const country = FieldCountry.getCountryById(state.country_id);
      this.props.onUpdate(this.props.index, { ...this.state, city, state, country });
      this.setState({ ...this.state, city, state, country });
    } else {
      this.props.onUpdate(this.props.index, { ...this.state, city: 0, state: 0, country: 0 });
      this.setState({ ...this.state, city: 0, state: 0, country: 0 });
    }
  }
  onStateSelected = state => {
    if(state) {
      const country = FieldCountry.getCountryById(state.country_id);
      this.props.onUpdate(this.props.index, { ...this.state, state, country });
      this.setState({ ...this.state, state, country });
    } else {
      this.props.onUpdate(this.props.index, { ...this.state, state: 0, country: 0 });
      this.setState({ ...this.state, state: 0, country: 0 });
    }
  }
  onCountrySelected = country => {
    this.props.onUpdate(this.props.index, { ...this.state, country });
    this.setState({ ...this.state, country });
  }

  render() {
    const inValid = this.state.inValid;
    return (
      <div className="row row-cols-3 addressdiv col-md-12">
        <div className="col">
          <div className="form-group">
            <label>Address</label>{RegEx.showError(inValid, Const.Street)}
            <FormControl type="text" placeholder="Address" value={this.state.street}
              className={`mr-sm-2 ${RegEx.class(inValid, Const.Street)}`}
              onChange={event => this.handleChange(Const.Street, event.target.value)} />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>City</label>{RegEx.showError(inValid, Const.City)}
            <FieldCity defaultValue={this.state.city}
              onCitySelected={this.onCitySelected} isMulti={false} />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>State</label>{RegEx.showError(inValid, Const.State)}
            <FieldState defaultValue={this.state.state}
              onStateSelected={this.onStateSelected} isMulti={false} />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Country</label>{RegEx.showError(inValid, Const.Country)}
            <FieldCountry defaultValue={this.state.country}
              onSelected={this.onCountrySelected} isMulti={false} />
          </div>
        </div>
        <div className="col ">
          <div className="form-group">
            <label>Pin Code</label>{RegEx.showError(inValid, Const.Pin)}
            <FormControl type="text" placeholder="Pin Code" value={this.state.pin}
              className={`mr-sm-2 ${RegEx.class(inValid, Const.Pin)}`}
              onChange={event => this.handleChange(Const.Pin, event.target.value)}/>
          </div>
        </div>
      </div>
    );
  }
}
export default FieldSingleAddressItem;
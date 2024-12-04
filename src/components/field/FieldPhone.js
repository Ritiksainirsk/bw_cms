import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import FormControl from 'react-bootstrap/FormControl';
import Select from 'react-select';

import CountryCodes from '../../util/CountryCode';
import RegEx from '../../util/RegEx';
import Const from '../../util/Constants';

class FieldPhone extends React.Component {

  static Phone = 'phone';
  static Code = 'code';
  
  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.Key = props.id;

    this.deCode = reactLocalStorage.getObject(Const.LoggedInUser).default_code;
    this.deCode = CountryCodes.find(code => code.value === this.deCode);
    
    let code = this.deCode;
    let value = this.props.value;
    if(value && value !== '') {
      const values = value ? value.split(Const.Hhn) : [];
      if(values.length === 1) { code = this.deCode; value = values[0]; }
      else { code = CountryCodes.find(code => code.value === values[0]); value = values[1]; }
    }
    this.state = { code: code, value: value, inValid: this.props.inValid };
  }

  handleChange = (field, value) => {
    if(field === FieldPhone.Phone) {
      this.props.onValueChange(this.Key, this.state.code.value + Const.Hhn + value);
      this.setState({...this.state, value:value, inValid:RegEx.isPhone(value, this.regex)});
    } else if(field === FieldPhone.Code) {
      this.props.onValueChange(this.Key, value.value + Const.Hhn + this.state.value);
      this.setState({...this.state, code:value });
    }
  }

  render() {
    if(!this.visible || !this.editable) return null;

    let inValid = this.state.inValid;
    if(this.editable && RegEx.isKeyPresent(this.props.inValid, this.Key)){
      inValid = this.props.inValid;
    }

    return (
      <div className="col">
        <div className="form-group">
          <label>{this.LabelName}</label> { RegEx.showError(inValid, this.Key) }
          <div className="phone-code">
            <Select value={this.state.code} options={CountryCodes} isSearchable={true}
              onChange={seletced => this.handleChange(FieldPhone.Code, seletced)}
              isDisabled={!this.editable} />
            <FormControl type="text" placeholder={this.LabelName} value={this.state.value}
              className={`mr-sm-2 ${RegEx.class(inValid, this.Key)}`} readOnly={!this.editable}
            onChange={event => this.handleChange(FieldPhone.Phone, event.target.value)} />
          </div>
        </div>
      </div>
    );
  }
}
export default FieldPhone;
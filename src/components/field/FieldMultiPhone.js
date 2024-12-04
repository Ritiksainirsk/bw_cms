import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import Scroll from 'react-scroll';

import Const from '../../util/Constants';
import FieldMultiPhoneItem from './FieldMultiPhoneItem';
import RegEx from '../../util/RegEx';

class FieldMultiPhone extends React.Component {

  static Phone = 'phone';
  static Code = 'code';

  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.Key = props.id;

    this.code = reactLocalStorage.getObject(Const.LoggedInUser).default_code;
    let value = props.value;
    value = value && value !== '' && value !== '~~' ?
    value.substring(1, value.length - 1) : '';
    this.values = value !== '' ? value.split(Const.Opt) : [ `${this.code}${Const.Hhn}` ];
    this.state = { inValid: props.inValid, changed: false };
  }
  
  UNSAFE_componentWillReceiveProps(props) {
    if(JSON.stringify(this.state.inValid) !== JSON.stringify(props.inValid)) {
      this.setState({ ...this.state, inValid: props.inValid ? props.inValid : {} })
    }
  }

  delete = index => {
    this.values = this.values.filter((_, i) => i !== index);
    const value  = `${Const.Opt}${this.values.join(Const.Opt)}${Const.Opt}`;
    this.props.onValueChange(this.props.id, value);
    this.setState({ ...this.state, changed: !this.state.changed });
  }

  update = (index, val) => {
    this.values[index] = val;
    const value  = `${Const.Opt}${this.values.join(Const.Opt)}${Const.Opt}`;
    this.props.onValueChange(this.props.id, value);
  }

  add = () => {
    this.values.push('');
    const value  = `${Const.Opt}${this.values.join(Const.Opt)}${Const.Opt}`;
    this.props.onValueChange(this.props.id, value);
    this.setState({ ...this.state, changed: !this.state.changed });
  }

  render() {
    if(!this.visible || !this.editable) return null;

    let valueList = [];
    for(let i = 0; i < this.values.length; i++) {
      valueList.push(
        <FieldMultiPhoneItem key={`mul_${this.props.id}_${i}`} index={i}
          value={this.values[i]} add={this.add} delete={this.delete}
          onChange={this.update} code={this.code} validate={this.regex}
          LabelName={this.LabelName}
          inValid={{}} />);
    }
    
    return (
      <div className="col contactinfodiv">
        <Scroll.Element name={this.Key} />
        <label>{this.LabelName} {RegEx.showError(this.state.inValid, this.Key)}</label> 
        {valueList}
      </div>
    );
  }
}
export default FieldMultiPhone;
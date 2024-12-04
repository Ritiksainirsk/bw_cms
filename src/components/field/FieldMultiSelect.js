import React from 'react';
import Scroll from 'react-scroll';
import Select from 'react-select';

import Const from '../../util/Constants';
import RegEx from '../../util/RegEx';
import FieldController from '../../controller/FieldController';

class FieldMultiSelect extends React.Component {
  
  constructor(props) {
    super(props);
    if(props.field) {
      this.visible = props.field.visible === Const.True;
      this.editable = props.field.editable === Const.True;
      this.LabelName = props.field.label_name;
      this.regex = props.field.validate;
      this.Key = props.id;
      this.options = FieldController.getOptions(props.field);
      const values = this.props.value ? this.props.value: '';
      this.selections = this.options.filter(opt => values.includes(Const.Opt+opt.value+Const.Opt));
      this.state = { selections: this.selections, inValid: {} };
    } else {
      this.visible = false;
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.options = FieldController.getOptions(props.field);
    const visible = props.field.visible === Const.True;
    const editable = props.field.editable === Const.True;
    if(visible !== this.visible || editable !== this.editable || this.props.value !== props.value ) {
      this.visible = props.field.visible === Const.True;
      this.editable = props.field.editable === Const.True;
      this.LabelName = props.field.label_name;
      this.regex = props.field.validate;
      this.Key = props.id;
      const values = props.value ? props.value: '';
      const selections = this.options.filter(opt => values.includes(Const.Opt+opt.value+Const.Opt));
      this.setState({ ...this.state, selections, inValid: {} });
    }
  }

  onChange = (selections) => {
    let value  = '';
    for(let i = 0; i < selections.length; i++) { value = value + selections[i].value + '~'; }
    value = value !== '' ? '~' + value : '';
    let inValid = { };
    if(!RegEx.isDate(value, this.regex)) inValid[this.Key] = 'Invalid Data';
    this.props.onValueChange(this.Key, value);
    this.setState({ selections: selections, inValid: { ...inValid } });
  }

  render() {
    if(!this.visible || !this.editable) return null;
    
    let inValid = this.state.inValid;
    if(this.editable && RegEx.isKeyPresent(this.props.inValid, this.Key)) {
      inValid = this.props.inValid;
    }

    return (
      <div className="col">
        <div className={`form-group ${RegEx.class(inValid, this.Key)}`}>
          <Scroll.Element name={this.Key} />
          <label>{this.LabelName}</label> {RegEx.showError(inValid, this.Key)}
          <Select value={this.state.selections} onChange={this.onChange}
            options={this.options} isDisabled={!this.editable} isSearchable={true}
            isClearable={true} isMulti={true} />
        </div>
      </div>
    );
  }
}
export default FieldMultiSelect;
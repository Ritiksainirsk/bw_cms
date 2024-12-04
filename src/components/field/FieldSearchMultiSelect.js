import React from 'react';
import Scroll from 'react-scroll';
import AsyncSelect from 'react-select/async';

import Const from '../../util/Constants';
import RegEx from '../../util/RegEx';
import FieldController from '../../controller/FieldController';

class FieldSearchMultiSelect extends React.Component {
  
  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.Key = props.id;

    this.options = FieldController.getOptions(props.field);
    const values = this.props.value !== undefined ? this.props.value: '';
    try {
      this.selections = this.options.filter(opt => values.includes(Const.Opt+opt.value+Const.Opt));
    } catch(err) { this.selections = []; }
    this.state = { selections: this.selections, inValid: {} };
  }

  onChange = selections => {
    let value  = '';
    for(let i = 0; i < selections.length; i++) { value = value + selections[i].value + '~'; }
    value = value !== '' ? '~' + value : '';
    let inValid = { };
    if(!RegEx.isDate(value, this.regex)) inValid[this.Key] = 'Invalid Data';
    this.props.onValueChange(this.Key, value);
    this.setState({ selections: selections, inValid: { ...inValid } });
  }

  onSearch = (text, callback) => {
    let options = [];
    if(text.length > 2) {
      options = this.options.filter(option => option.label.replace(' ', '')
        .toLowerCase().includes(text.replace(' ', '').toLowerCase()));
    }
    callback(options);
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
          <AsyncSelect cacheOptions loadOptions={this.onSearch}
            onChange={this.onChange} value={this.state.selections}
            isDisabled={!this.editable} isClearable={true} isMulti={true} />
        </div>
      </div>
    );
  }
}
export default FieldSearchMultiSelect;
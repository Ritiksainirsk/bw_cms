import React from 'react';
import Scroll from 'react-scroll';
import AsyncSelect from 'react-select/async';
import PropertyAPI from '../../api/PropertyAPI';

import Const from '../../util/Constants';
import RegEx from '../../util/RegEx';

class FieldSearchSelect extends React.Component {
  
  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.Key = props.id;

    this.state = { value: '', inValid: {} };
  }

  UNSAFE_componentWillReceiveProps(props) {
    const visible = props.field.visible === Const.True;
    const editable = props.field.editable === Const.True;
    if(props.value !== this.state.value || visible !== this.visible || editable !== this.editable) {
      this.visible = props.field.visible === Const.True;
      this.editable = props.field.editable === Const.True;
      this.LabelName = props.field.label_name;
      this.regex = props.field.validate;
      this.Key = props.id;
      if(props.value) {
        PropertyAPI.get(props.value, res =>
          this.setState( { ...this.state, value: { ...res, label: res.name, value: res.id }})); 
      } else {
        this.setState({ ...this.state, value: '', inValid: {} });
      }
    }
  }

  componentDidMount() {
    if(this.props.value) {
      PropertyAPI.get(this.props.value, res =>
        this.setState( { ...this.state, value: { ...res, label: res.name, value: res.id }}));
    }
  }

  onChange = selection => {
    const value  = selection ? selection.value : '';
    let inValid = { };
    if(!RegEx.isMatch(value, false, this.regex)) { inValid[this.Key] = 'Invalid Data'; }
    this.props.onValueChange(this.Key, value, selection);
    this.setState({ value: selection, inValid: { ...inValid } });
  }

  onSearch = (text, callback) => {
    const list = { filters: [{field: "name", condition: "in", value: text}], 
      pagination: { currentPage: 1, perPage: 5 },  sorting: { field: 'id', order: -1 }};

    if(this.props.project) {
      list.filters.push({field: "project", condition: "in", type: "select", 
        value: `~${this.props.project}~`})
    } else {
      list.filters.push({field: "project", condition: "empty", type: "select" })
    }
    PropertyAPI.list(list, res => {
      callback(res.data.map(item => { return { ...item, label: item.name, value: item.id }}))
    }, ()=> callback([])); 
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
          <AsyncSelect cacheOptions loadOptions={this.onSearch} onChange={this.onChange}
            value={this.state.value} isDisabled={!this.editable} isClearable={true} />
        </div>
      </div>
    );
  }
}
export default FieldSearchSelect;
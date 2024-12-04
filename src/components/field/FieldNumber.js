import React from 'react';
import Scroll from 'react-scroll';
import FormControl from 'react-bootstrap/FormControl';

import RegEx from '../../util/RegEx';
import Const from '../../util/Constants';

class FieldNumber extends React.Component {
  
  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    this.mandatory = props.field.form_mandate === Const.True;
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.Key = props.id;
    
    this.state = { value: props.value, inValid: props.inValid };
  }

  handleChange = value => {
    let inValid = { };
    if(!RegEx.isMatch(value, this.mandatory, this.regex)) inValid[this.Key] = 'Invalid Data';
    this.props.onValueChange(this.Key, value);
    this.setState({ value: value, inValid: { ...inValid } });
  }

  render() {
    if(!this.visible || !this.editable) return null;

    let inValid = this.state.inValid;
    if(this.editable && RegEx.isKeyPresent(this.props.inValid, this.Key)) {
      inValid = this.props.inValid;
    }

    return (
      <div className="col">
        <div className="form-group">
          <Scroll.Element name={this.Key} />
          <label>{this.LabelName}</label> { RegEx.showError(inValid, this.Key) }
          <FormControl type="number" placeholder={this.LabelName}
            value={this.state.value} name={this.Key} readOnly={!this.editable}
            className={`mr-sm-2 ${RegEx.class(inValid, this.Key)}`}
            onChange={event => this.handleChange(event.target.value)} />
        </div>
      </div>
    );
  }
}
export default FieldNumber;
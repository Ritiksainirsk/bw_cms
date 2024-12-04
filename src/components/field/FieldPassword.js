import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

import Const from '../../util/Constants';
import RegEx from '../../util/RegEx';

class FieldText extends React.Component {
  
  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.Key = props.id;

    this.state = { value: this.props.value, inValid: this.props.inValid };
  }

  handleChange = value => {
    let inValid = { };
    if(!RegEx.isMatch(value, this.regex)) inValid[this.Key] = 'Invalid Data';
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
          <label>{this.LabelName}</label> { RegEx.showError(inValid, this.Key) }
          <FormControl type="text" placeholder={this.LabelName} value={this.state.value}
            className={`mr-sm-2 ${RegEx.class(inValid, 'label_name')}`}
            onChange={event => this.handleChange(event.target.value)}
            readOnly={!this.editable} />
        </div>
      </div>
    );
  }
}
export default FieldText;
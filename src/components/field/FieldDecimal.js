import React from 'react';
import Scroll from 'react-scroll';
import FormControl from 'react-bootstrap/FormControl';

import RegEx from '../../util/RegEx';
import Const from '../../util/Constants';

class FieldDecimal extends React.Component {
  
  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    this.mandatory = props.field.form_mandate === Const.True;
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.Key = props.id;
    
    this.state = { value: props.value, inValid: props.inValid, text: '' };
  }

  UNSAFE_componentWillReceiveProps(props) {
    if(props.value !== this.state.value) {
      this.setState({ ...this.state, value: props.value, text: this.getText(props.value), 
        inValid: props.inValid });
    }
  }

  getText = value => {
    let text = '';
    try {
      let val = parseFloat(value);
      let tmp;
      if(val >= 10000000) {
        tmp = ((val - (val % 10000000))/10000000);
        text +=  tmp + 'Cr ';
        val = val - (tmp * 10000000);
        
      }
      if(val < 10000000 && val >= 100000) {
        tmp = ((val - (val % 100000))/100000);
        text += ((val - (val % 100000))/100000) + 'Lc ';
        val = val - (tmp * 100000);
      }
      if(val < 100000 && val >= 1000) {
        tmp = ((val - (val % 1000))/1000);
        text += ((val - (val % 1000))/1000) + 'Th ';
        val = val - (tmp * 1000);
      }
      if(val < 1000 && val >= 100) {
        tmp = ((val - (val % 100))/100);
        text += ((val - (val % 100))/100) + 'H ';
        val = val - (tmp * 100);
      }
      if(val > 0) { text += val; }
    } catch(e) {}
    return text;
  }

  handleChange = value => {
    let inValid = { };
    if(!RegEx.isMatch(value, this.mandatory, this.regex)) inValid[this.Key] = 'Invalid Data';
    this.props.onValueChange(this.Key, value);
    this.setState({ value: value, inValid: { ...inValid }, text: this.getText(value) });
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
          <label>{this.LabelName} { this.state.text !== '' && `: ${this.state.text}` }</label>
          { RegEx.showError(inValid, this.Key) }
          <FormControl type="number" placeholder={this.LabelName}
            value={this.state.value} name={this.Key} readOnly={!this.editable}
            className={`mr-sm-2 ${RegEx.class(inValid, this.Key)}`}
            onChange={event => this.handleChange(event.target.value)} />
        </div>
      </div>
    );
  }
}
export default FieldDecimal;
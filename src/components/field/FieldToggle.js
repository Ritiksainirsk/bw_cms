import React from 'react';
import Scroll from 'react-scroll';
import Form from 'react-bootstrap/Form';

import Const from '../../util/Constants';

class FieldToggle extends React.Component {
  
  constructor(props) {
    super(props);
    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
    
    this.state = { value: props.value === Const.True };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.checked });
    if(this.props.onValueChange !== undefined) {
      this.props.onValueChange(this.props.id, event.target.checked ? Const.True : Const.False);
    }
  }

  render() {
    if(!this.visible || !this.editable) return null;
    return (
      <div className="col">
        <div className="form-group checkInline">
          <Scroll.Element name={this.Key} />
          <Form.Check onChange={this.handleChange} checked={this.state.value}
            readOnly={!this.editable}/>
          <label>{this.props.field.label_name}</label>
        </div>
      </div>
    );
  }
}
export default FieldToggle;
import React from 'react';

class FieldLabel extends React.Component {
  render() {
    if(!this.props.field) {
      return null;
    }
    if(this.props.field.visible !== Const.True) return null;
    return (
      <div className="col">
        <div className="form-group">
          <label>{this.props.field.label_name}</label> <br />
          <label>{this.props.value}</label>
        </div>
      </div>
    );
  }
}
export default FieldLabel;
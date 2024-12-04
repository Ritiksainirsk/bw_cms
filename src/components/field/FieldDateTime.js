import React from 'react';
import DateTimePicker from 'react-datetime-picker';

class Date extends React.Component {
  
  UNSAFE_componentWillReceiveProps(props) {}

  handleChange = (date) => {}

  render() {

    return (
      <div className="col">
        <div className="form-group">
          <label> Label Name</label>
          <DateTimePicker
            value={this.state.value} format="dd-MM-y hh:mm:ss a" onChange={this.handleChange}
            disabled={!this.editable} />
        </div>
      </div>
    );
  }
}
export default Date;
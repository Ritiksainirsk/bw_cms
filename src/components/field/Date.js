import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateField = ({ name, placeholder, handleChange, value }) => {
  return (
    <div className="col">
      <div className="form-group">
        <DatePicker
          selected={value}
          className="form-control"
          dateFormat="dd/MM/yyyy"
          minDate={new Date("1990-01-01")}
          maxDate={new Date()}
          placeholderText={placeholder}
          showMonthDropdown
          showYearDropdown
          onChange={(value) => handleChange(value, name)}
        />
      </div>
    </div>
  );
}

export default DateField;

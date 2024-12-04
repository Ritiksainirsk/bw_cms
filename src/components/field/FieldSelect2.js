import React from 'react'
import { Select } from 'antd';

const FieldSelect = ({disabled, rowname, name, options, placeholder, handleChange, widthValue, minWidthValue,preselected}) => {
  return (
    <Select
      disabled={disabled || false}
      suffixIcon={null}
      placeholder={placeholder}
      defaultValue={preselected}
      style={{width: widthValue || 200, minWidth: minWidthValue || "auto"}}
      onChange={(value) => handleChange(rowname, name, value)}
      options={options}
    />
  )
}

export default FieldSelect
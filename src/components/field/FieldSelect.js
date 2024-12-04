import React from 'react'
import { Select } from 'antd';

const FieldSelect = ({name, options, placeholder, handleChange, widthValue, minWidthValue}) => {
  return (
    <Select
      suffixIcon={null}
      placeholder={placeholder}
      style={{width: widthValue || 200, minWidth: minWidthValue || "auto"}}
      onChange={(value) => handleChange(value, name)}
      options={options}
    />
  )
}

export default FieldSelect
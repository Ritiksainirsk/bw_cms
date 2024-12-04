import React from 'react';
import { Select } from 'antd';

const MultiSelectWithSearch = ({options, name, placeholder, handleChange, selected }) => {
  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      mode="multiple"
      showSearch
      suffixIcon={null}
      style={{width: '100%'}}
      placeholder={placeholder ?? "Please select"}
      optionFilterProp="children"
      filterOption={filterOption}
      maxTagCount='responsive'
      defaultValue={selected[name]}
      onChange={(value) => handleChange(value, name)}
      options={options}
    />
  )
}

export default MultiSelectWithSearch
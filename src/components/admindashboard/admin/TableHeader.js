import React from 'react';

const TableHeader = ({columns}) => {
  const headers = columns.map((item, i ) => {
    return <th scope="col">{item['name']}</th>
  })
  return (
    <tr>
        <th scope="col"><input className="form-checkbox form-check-input" type="checkbox" id="remember"/></th>
        {headers}
        <th scope="col"></th>
    </tr>
  )
}

export default TableHeader


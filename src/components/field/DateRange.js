import React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';


const { RangePicker } = DatePicker;

const rangePresets = [
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Yesterday',
    value: [dayjs().add(-1, 'd'), dayjs().add(-1, 'd')],
  },
  {
    label: 'Today',
    value: [dayjs(), dayjs().endOf('day')],
  },
];
const DateRange = ({name, handleFilter}) => (
  <RangePicker 
    placement="bottomLeft"
    presets={rangePresets} 
    onChange={(date, datestring) => handleFilter(date, datestring, name)} 
  />
);
export default DateRange;
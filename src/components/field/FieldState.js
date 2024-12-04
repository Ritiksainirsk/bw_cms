import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import AsyncSelect from 'react-select/async';

import Const from '../../util/Constants';

class FieldState extends React.Component {
  
  constructor(props) {
    super(props);
    this.states = reactLocalStorage.getObject(Const.States);
  }

  onSearch = (text, callback) => {
    let states = [];
    if(text.length > 2) {
      states = this.states.filter(state =>
        state.label.replace(' ', '').toLowerCase().includes(text.replace(' ', '').toLowerCase()));
    }
    callback(states);
  }

  render() {
    return (
      <AsyncSelect cacheOptions isMulti={this.props.isMulti}
        isClearable={true} loadOptions={this.onSearch}
        onChange={selected => this.props.onStateSelected(selected)}
        value={this.props.defaultValue} />
    );
  }

  static getStateById = stateId => {
    return reactLocalStorage.getObject(Const.States).find(
      state => parseInt(state.value) === parseInt(stateId));
  }
}
export default FieldState;
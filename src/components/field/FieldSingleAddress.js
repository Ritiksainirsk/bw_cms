import React from 'react';
import Scroll from 'react-scroll';
import RegEx from '../../util/RegEx';

import FieldSingleAddressItem from './FieldSingleAddressItem';
import Const from '../../util/Constants';

class FieldSingleAddress extends React.Component {
  
  constructor(props) {
    super(props);
    this.LabelName = props.field.label_name;
    this.regex = props.field.validate;
    this.values = !props.value || props.value.length === 0 ? [{ }] : props.value;
    this.state = { changed: false, inValid: props.inValid ? props.inValid : {} };

    this.visible = props.field.visible === Const.True;
    this.editable = props.field.editable === Const.True;
  }

  UNSAFE_componentWillReceiveProps(props) {
    if(JSON.stringify(this.state.inValid) !== JSON.stringify(props.inValid)) {
      this.setState({ ...this.state, inValid: props.inValid ? props.inValid : {} })
    }
  }
  
  onAdd = () => {
    this.values.push({ });
    this.setState({ ...this.state, changed: !this.state.changed });
  }

  onDelete = index => {
    this.values = this.values.filter((_, i) => i !== index);
    this.setState({ ...this.state, changed: !this.state.changed });
  }

  onUpdate = (index, address) => {
    this.values[index].street = address.street;
    this.values[index].city = address.city ? address.city.value : 0;
    this.values[index].state = address.state ? address.state.value : 0;
    this.values[index].country = address.country ? address.country.value : 0;
    this.values[index].pin = address.pin;
    this.props.onValueChange(this.props.id, this.values);
  }

  render() {
    if(!this.visible || !this.editable) return null;
    
    let valueList = [];
    for(let i = 0; i < this.values.length; i++) {
      valueList.push(<FieldSingleAddressItem key={`mul_${this.props.id}_${i}`} index={i} onAdd={this.onAdd}
        value={this.values[i]} onDelete={this.onDelete} onUpdate={this.onUpdate} />);
    }
    return (
      <>
        <div className="formhead col-md-12"><h2>Address Information</h2></div>
        <Scroll.Element name={this.props.id} />
        { RegEx.showError(this.state.inValid, this.props.id) }
        {valueList}
      </>
    );
  }
}
export default FieldSingleAddress;
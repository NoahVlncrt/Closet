import React, { Component } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Picker extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdowntoggle_text: 'All'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
    const style = {
      padding: "5px"
    }
    return (
      <Dropdown onChange={(event) => {console.log(event)}} isOpen={this.state.dropdownOpen} toggle={this.toggle} id="picker_clothes" style={style}>
        <DropdownToggle caret>
          {this.state.dropdowntoggle_text}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Shorts</DropdownItem>
          <DropdownItem>Pants</DropdownItem>
          <DropdownItem>Shirt</DropdownItem>
          <DropdownItem>Jacket</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    )
  }
}

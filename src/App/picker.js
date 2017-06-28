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
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  ChangeSelection = (event) => {
    this.setState({dropdowntoggle_text: event})
    this.props.triggerFilterChange(event)
  }

  render(){
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} id="picker_clothes">
        <DropdownToggle caret>
          {this.state.dropdowntoggle_text}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.ChangeSelection.bind(this, 'All')}>All</DropdownItem>
          <DropdownItem onClick={this.ChangeSelection.bind(this, 'Shorts')}>Shorts</DropdownItem>
          <DropdownItem onClick={this.ChangeSelection.bind(this, 'Pants')}>Pants</DropdownItem>
          <DropdownItem onClick={this.ChangeSelection.bind(this, 'Shirt')}>Shirt</DropdownItem>
          <DropdownItem onClick={this.ChangeSelection.bind(this, 'Jacket')}>Jacket</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    )
  }
}

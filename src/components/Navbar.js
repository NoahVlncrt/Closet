import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse} from 'reactstrap';

export default class NewNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="primary" inverse toggleable>
          <NavbarBrand href="/">Closet</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/settings">Settings</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  };
};

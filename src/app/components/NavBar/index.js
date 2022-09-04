import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} color="dark" dark>
        <NavbarBrand href="/dashboard">Demo App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/visualize">Omega Labs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/visualize">Qaly Pharmacy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/visualize">Shivani's Kitchen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/visualize">Abhinaya Agencies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/visualize">Maha Agencies</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contacts
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>About us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

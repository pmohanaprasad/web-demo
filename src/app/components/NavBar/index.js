import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
              <NavLink href="/labs">Omega Labs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pharmacye">Qaly Pharmacy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kitchen">Shivani's Kitchen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/harishagencies">Harish Agencies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mahaagencies">Maha Agencies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  NavLink,
} from "reactstrap";
import "./Navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className='pl-5 pr-5 position-absolute fixed-top text-white' light expand='lg'>
      <NavbarBrand href='/' className='ms-5 text-white'>
        Hillside
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ms-auto me-5' navbar>
          <NavItem className='me-2 mt-1'><NavLink href="#home-section">Home</NavLink></NavItem>
          <NavItem className='me-2 mt-1'><NavLink href="#activites-section">Activites</NavLink></NavItem>
          <NavItem className='me-2 mt-1'><NavLink href="#gallery-section">Gallery</NavLink></NavItem>
          <NavItem className='me-2 mt-1'><NavLink href="#contact-section">Contact</NavLink></NavItem>
          <NavItem className='me-2'>
            <button className='btn btn-outline-dark'>Reserve Now</button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;

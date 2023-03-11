import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
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
          <NavItem className='me-2 mt-1'>Home</NavItem>
          <NavItem className='me-2 mt-1'>Activites</NavItem>
          <NavItem className='me-2 mt-1'>Gallery</NavItem>
          <NavItem className='me-2 mt-1'>Contact</NavItem>
          <NavItem className='me-2'>
            {/* <FontAwesomeIcon icon='fa-solid fa-calendar' /> */}
            <button className='btn btn-outline-dark'>Reserve Now</button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;

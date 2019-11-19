import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
// import styled from 'styled-component';
import {DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu';


// const styles = styled.div`

// `;


function Navigation() {

    return(
<section>
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" fixed="top">
  <Navbar.Brand href="#home">HOME</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">ABOUT</Nav.Link>
      <Nav.Link href="#pricing">CONTACT</Nav.Link>
      <DropdownMenu userName="Chris Smith">
        <MenuItem text="Home" location="/home" />
        <MenuItem text="Edit Profile" location="/profile" />
        <MenuItem text="Change Password" location="/change-password" />
        <MenuItem text="Privacy Settings" location="/privacy-settings" />
      </DropdownMenu>

      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</section>

     
    
    )
    }

export default Navigation;
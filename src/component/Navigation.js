import React from 'react';
import { Nav ,Navbar } from 'react-bootstrap';
import "../nav.css";


import { } from 'react-router-dom';

// import styled from 'styled-component';
//import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';


// const styles = styled.div`

// `;


function Navigation() {

  return (
    <section>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" fixed="top" className="nav">
        <Navbar.Brand href="/" className="logo"> SOO-CLEAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav> 
             <Nav.Link to="/">HOME </Nav.Link>
            <Nav.Link href="/About">ABOUT </Nav.Link>
            <Nav.Link href="/Reason">REASON </Nav.Link>
            <Nav.Link href="/Cleanoffice">OFFICE </Nav.Link>
            <Nav.Link href="/Carpet"> CARPET </Nav.Link>
            <Nav.Link href="/Mable"> MARBLE </Nav.Link>
            <Nav.Link href="/Other"> OTHERS </Nav.Link>
            <Nav.Link href="/Client"> CLIENT </Nav.Link>
            <Nav.Link href="/Contact"> CONTACT </Nav.Link>
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/"></Nav.Link>
            <Nav.Link href="/"></Nav.Link> 
             {/* <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/About">
             About
            </NavLink>
            <NavLink activeClassName="active" to="/Reason">
              Reason
            </NavLink>
            <NavLink activeClassName="active" to="/Carpet">
             Carpet
            </NavLink>
            <NavLink activeClassName="active" to="/Other">
              Other
            </NavLink>
            <NavLink activeClassName="active" to="/Client">
              Client
            </NavLink> */} 
          </Nav> 
        </Navbar.Collapse>
      </Navbar>
    </section>



  )
}

export default Navigation;
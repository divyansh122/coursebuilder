import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GiStack } from "react-icons/gi";
import { CiLink } from "react-icons/ci";
import { MdFileUpload } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CourseBuilder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="ADD + " className='ml-10 dropdown_css' id="basic-nav-dropdown dropdown_css">
              <NavDropdown.Item onClick={() => navigate('/create-module')}>
                <GiStack /> Create Module
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <CiLink /> Add links
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <MdFileUpload /> Upload
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

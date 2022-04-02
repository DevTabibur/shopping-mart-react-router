import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { BsCart2, BsHeart } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <Navbar
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <div className="header-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Nav.Link href="/" className="text-black">HOME</Nav.Link>
              <Nav.Link href="/blog" className="text-black">BLOG</Nav.Link>
              <Nav.Link href="/men" className="text-black">MEN</Nav.Link>
              <Nav.Link href="/women" className="text-black">WOMEN</Nav.Link>
              <Nav.Link href="/kids" className="text-black">KIDS</Nav.Link>
              <Nav.Link href="/contact" className="text-black">CONTACT</Nav.Link>
              <Nav.Link href="/about" className="text-black">ABOUT</Nav.Link>
            </Nav>

            <Nav className="d-flex">

              <Nav.Link href="/profile">
                <CgProfile className="header-icons"/>
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <BsHeart className="header-icons"  />
              </Nav.Link>
              <Nav.Link href="/cart">
                <BsCart2 className="header-icons" />
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

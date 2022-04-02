import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { BsCart2, BsHeart } from "react-icons/bs";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="py-3 header" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className="header-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Link className="header-links" to="/home">HOME</Link>
              <Link className="header-links" to="/blog">BLOG</Link>
              <Link className="header-links" to="/men">MEN</Link>
              <Link className="header-links" to="/shirt">SHIRT</Link>
              <Link className="header-links" to="/women">WOMEN</Link>
              <Link className="header-links" to="/kids">KIDS</Link>
              <Link className="header-links" to="/contact">CONTACT</Link>
              <Link className="header-links" to="/about">ABOUT</Link>
            </Nav>

            <Nav className="d-flex">
              <Nav.Link href="/profile">
                <CgProfile className="header-icons" />
              </Nav.Link>
              <Nav.Link href="/wishlist">
                <BsHeart className="header-icons" />
              </Nav.Link>
              <Nav.Link href="/cart">
                <BsCart2 className="header-icons" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

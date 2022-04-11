// @ts-nocheck
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../src/Assets/images/logo.png";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
import { BsCart2, BsHeart } from "react-icons/bs";
import { Routes, Route, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Header = () => {
  const [user, setUser] = useState({})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
    console.log("header", user);
  } else {
    // User is signed out
    // ...
  }

  console.log(user.photoURL);
});

const signOut = ()  =>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

  return (
    <>
      <Navbar className="py-3 header" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="home">
            <div className="header-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Link className="header-links" to="/home">HOME</Link>
              <Link className="header-links" to="/blog">BLOG</Link>
              <Link className="header-links" to="/shop">SHOP</Link>
              <Link className="header-links" to="/contact">CONTACT</Link>
              <Link className="header-links" to="/about">ABOUT</Link>
              

            </Nav>

            <Nav className="d-flex">
              { user? <Nav.Link onClick={signOut}>
                <img  className="header-icons-login-img" src={user?.photoURL} alt="avatar" />
              </Nav.Link> :
                <Nav.Link href="/login">
                <CgProfile className="header-icons" />
              </Nav.Link>
              }
              <Nav.Link href="/wishlist">
                <BsHeart className="header-icons" />
              </Nav.Link>
              <Link to="/cart">
                <BsCart2 className="header-icons" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

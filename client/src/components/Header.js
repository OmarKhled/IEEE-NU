import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../static/images/IEEE-NU-Logo.png";
import ChangeNavbar from "./change-navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <header>
        <ChangeNavbar />
        <Container className="px-5" style={{ maxWidth: "65.125rem" }}>
          <a className="header-links pr-3" href="https://www.ieee.org/">
            IEEE.org
          </a>
          <a
            className="header-links pr-3"
            href="https://ieeexplore.ieee.org/Xplore/home.jsp"
          >
            IEEE Explore Digital Library
          </a>
          <a
            className="header-links pr-3"
            href="https://standards.ieee.org/?_ga=2.166069502.1382483501.1627826864-1802152504.1622396110"
          >
            IEEE Standards
          </a>
          <a
            className="header-links pr-3"
            href="https://spectrum.ieee.org/?_ga=2.202702929.1382483501.1627826864-1802152504.1622396110"
          >
            IEEE Spectrum
          </a>
          <a
            className="header-links pr-3"
            href="https://www.ieee.org/sitemap.html"
          >
            More Sites
          </a>
        </Container>
        <hr></hr>
      </header>
      <Navbar
        className="fixed-top navbar changeBackground"
        color="dark"
        dark
        expand="lg"
      >
        <div className="glass"></div>
        <Container className="px-5" style={{ maxWidth: "65.125rem" }}>
          <NavLink className="navbar-brand" to="/">
            <img alt="IEEENU" src={logo} width="60" />
          </NavLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="sticky mr-auto" navbar>
              <NavItem>
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/about-us"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>About Us</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  to="/tecnicalLounge"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>Technical Lounge</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  to="/academy"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>Academy</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/events"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>Events</span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  to="/membership"
                  className="nav-link"
                  activeClassName="active"
                >
                  <span>Membership</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

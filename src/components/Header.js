import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from '../static/images/IEEE-NU-Logo.png'
import ThemeToggeler from './ThemeToggeler';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        
        <header>
          <Container className="px-5" style={{maxWidth: "65.125rem"}}>
            <span className="pr-3">
              IEEE.org
            </span>
            <span className="pr-3">
              IEEE Explore Digital Library 
            </span>
            <span className="pr-3">
              IEEE Standards
            </span>
            <span className="pr-3">
              IEEE Spectrum
            </span>
            <span className="pr-3">
              More Sites
            </span>
          </Container>
        </header>
        <Navbar className="fixed-top navbar changeBackground" color="dark" dark expand="lg">
          <div className="glass"></div>
          <Container className="px-5" style={{maxWidth: "65.125rem"}}>
            <NavLink className="navbar-brand" to="/">
              <img alt="Logo" src={logo} width="60" />
            </NavLink>
            <NavbarToggler
              onClick={toggle}
            />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="sticky" className="mr-auto" navbar>
                <NavItem>
                  <NavLink
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
                    to="/gallery"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <span>Technical Lounge</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    to="/contact-us"
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
                    to="/section"
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
    )
}

export default Header

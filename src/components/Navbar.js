import React from 'react'
import { Navbar, NavbarBrand, Container } from 'reactstrap'
import logo from '../static/images/IEEE-NU-Logo-White.png'

const Nav = () => {
    return (
        <Navbar color="dark" light>
            <Container>
                <NavbarBrand href="/">
                    <img src={logo} alt="" width="50"/>
                </NavbarBrand>
            </Container>    
        </Navbar>
    )
}

export default Nav

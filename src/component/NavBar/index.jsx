import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
// <div className="d-flex justify-content-end flex-grow-1"></div>

const NavBar = () => {
    return (
        <Navbar expand="md "  className='navbar navbar-dark bg-dark'>
            <Container fluid>
                <Navbar.Brand>Resume Maker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0 w-100"  navbarScroll >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/signup">Make Resume</Nav.Link>
                        <Nav.Link href="/jobsection_dashboard">Job Section</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="/signup" >Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar
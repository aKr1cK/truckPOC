import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);

// function logout() {
//     const navigate = useNavigate();
//     navigate('/login');
// }

const logout = () => {
    // const navigate = useNavigate();
    // navigate('/login');
}

const isAuthenticated = true;

const Header = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">My Website</Navbar.Brand>
            {isAuthenticated ? <>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Button variant="danger" onClick={() => {
                            logout();
                        }}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </> : <></>}
        </Container>
    </Navbar>
);

export default Header;

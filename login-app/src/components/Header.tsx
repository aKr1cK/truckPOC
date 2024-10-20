import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/userSlice';
import truckLogo from '../truckLogo.png'; // Adjust path as needed

const Header = ({callLogout,handleLinkClick}: any) => {
    const isAuthenticated = useSelector((state: any) => state.user.isAuthenticated);
    const logout = () => {
        alert('loginCHILD');
        callLogout();
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand><img src={truckLogo} alt="Truck Logo" style={{ width: '100px', height: '100px' }} /></Navbar.Brand>
                {isAuthenticated ? <>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={()=>handleLinkClick('Home')}>Home</Nav.Link>
                            <Nav.Link onClick={()=>handleLinkClick('Solution')}>Solution</Nav.Link>
                            <Button variant="danger" onClick={() => {
                                logout();
                            }}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </> : <></>}
            </Container>
        </Navbar>
    )
};

export default Header;

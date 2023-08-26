import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useAuth } from '../../../pages/LogIn/contexts/AuthContext';
import PopOver from '../PopOver/PopOver';
import './NavBar.css'

const NavBar = () => {
    const { currentUser } = useAuth();
    const { user } = useContext(UserContext)

    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                        <Navbar.Brand as={Link} to="/">
                        <span className="fw-bold">MEDIA <span className="colorHighLight">TRAVEL</span>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} exact to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                        <NavDropdown title="pages" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/pages/flight">Flights</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pages/hotels">Hotels</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pages/cars">Rent a Car</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pages/cruises">Cruises</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/my-offer">My Offer</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard/profile">Dashboard</Nav.Link>
                        <Nav.Link>
                            {user || currentUser ?
                                <div className="navPop">
                                    <PopOver/>
                                </div>
                                :
                                <Button as={Link} to="/login" className="navLogBtn">Login</Button>
                            }
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/"> Recipe App</Navbar.Brand>
            <Navbar.Collapse>
                <Nav className='mr-auto'>
                    <Nav.Link as={Link} to="/">All Recipes</Nav.Link>
                    <Nav.Link as={Link} to="/add-recipe">Add Recipe</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;

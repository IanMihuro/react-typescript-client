import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import * as Routes from '../../utils/Routes';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header(): JSX.Element {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#">REACT-TYPESCRIPT-CLIENT</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href={Routes.SIGN_UP}>Sign Up</Nav.Link>
                <Nav.Link href={Routes.SIGN_IN}>Sign In</Nav.Link>
                <Nav.Link href={Routes.ADD_USER}>Add User</Nav.Link>
                <Nav.Link href={Routes.VIEW_USERS}>View Users</Nav.Link>
            
            </Nav>
        </Navbar>
        
    )
}

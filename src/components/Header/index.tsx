import React from "react";
import * as Routes from "../../utils/Routes";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header(): JSX.Element {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      className="justify-content-between"
      style={{
        marginBottom: "10px"
      }}
    >
      <Nav>
        <Navbar.Brand href="#">REACT-TYPESCRIPT-CLIENT</Navbar.Brand>
        <Nav.Link href={Routes.ADD_USER}>Add User</Nav.Link>
        <Nav.Link href={Routes.VIEW_USERS}>View Users</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href={Routes.SIGN_UP}>Sign Up</Nav.Link>
        <Nav.Link href={Routes.SIGN_IN}>Sign In</Nav.Link>
      </Nav>
    </Navbar>
  );
}

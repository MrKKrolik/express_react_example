import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { observer } from 'mobx-react-lite'
const NavBar = observer(() => {
    return (
    <Navbar bg="light" variant="light">
        <Nav className="me-auto">
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/groups">Groups</Nav.Link>
        </Nav>
    </Navbar>
    )
})
export default NavBar;
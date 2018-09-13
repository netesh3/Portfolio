import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logoN from './logoN.png';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }



    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/"><img src={logoN} className="App-logo" alt="logo"/></NavbarBrand>
            <NavbarBrand tag={Link} to="/">Portfolio</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/netesh3">Technology Stack</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/netesh3">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/netesh3">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/netesh3">GitHub</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://twitter.com/ImNetesh3">Twitter</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://facebook.com/neteshchiku">Facebook</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://facebook.com/neteshchiku">Contact me</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    }
}
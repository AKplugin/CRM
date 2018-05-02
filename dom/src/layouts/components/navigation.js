import React, { Component } from 'react';
import { Button } from 'antd';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/authAction';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        // this.setState({
        //     isOpen: !this.state.isOpen
        // });
    }

    logout() {
        this.props.logoutUser();
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">CRM</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={this.logout}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default connect(null, actions)(Navigation);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import StaffListComponent from './components/staffListComponent';
import Navigation from './components/navigation';
import SidebarComponent from './components/sidebarComponent';

class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // if (!this.props.staff.user) {
        //     return <Redirect to="/login" />
        // }
        return (
            <div>
                <div className="nav-bar-element">
                    <Navigation />
                </div>
                <div className="content-element">
                    <SidebarComponent />
                    <div className="dashboard-area-element">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { ...item };
}

export default connect(mapStateToProps, actions)(DashboardComponent);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import * as actions from './actions';
import LoginComponent from './layouts/loginComponent';
import DashboardComponent from './layouts/dashboardComponent';
import StaffComponent from './layouts/staffComponent';
import StaffListComponent from './layouts/components/staffListComponent';
import EventComponent from './layouts/Events/EventComponent';

class App extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('Authorization')) {
            this.props.storeUser(localStorage.getItem('Authorization'));
        }
    }

    render() {
        return (
            <div className="rootLayout">
                <BrowserRouter>
                    <div className="rootLayout">
                        <Switch>
                            <Route exact path='/' render={() => (
                                this.props.staff.user ? (<Redirect to="/dashboard" />) : (<LoginComponent />)
                            )} />
                            <Route exact path="/login" component={LoginComponent} />
                            <DashboardComponent>
                                <Route exact path="/dashboard" component={StaffListComponent} />
                                <Route exact path="/staff/:id" component={StaffComponent} />
                                <Route exact path="/events" component={EventComponent} />
                            </DashboardComponent>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { staff: item.staff };
}

export default connect(mapStateToProps, actions)(App);
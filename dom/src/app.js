import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import * as actions from './actions';
import LoginComponent from './layouts/loginComponent';
import DashboardComponent from './layouts/dashboardComponent';
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
        let fakeAuth = '';
        const ProtectedRoute = ({ Component = Component, ...rest, auth = auth }) => {
            if (auth) {
                return <Route exact {...rest} render={() => <Component />} />
            } else {
                return <Redirect path="/login" />
            }
        }

        return (
            <div className="rootLayout">
                <BrowserRouter>
                    <div className="rootLayout">
                        <Switch>
                            <Route exact path="/login" component={LoginComponent} />
                            <DashboardComponent>
                                <ProtectedRoute path="/dashboard" Component={StaffListComponent} />
                                <ProtectedRoute path="/events" Component={EventComponent} />
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
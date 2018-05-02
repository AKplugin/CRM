import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as actions from './actions';
import LoginComponent from './layouts/loginComponent';
import DashboardComponent from './layouts/dashboardComponent';
import StaffListComponent from './layouts/Staffs/staffListComponent';
import StaffComponent from './layouts/Staffs/staffComponent';
import EventComponent from './layouts/Events/EventComponent';

class App extends Component {

    render() {

        if (localStorage.getItem('Authorization') && !axios.defaults.headers.common['Authorization']) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
            // this.props.storeUser(axios.defaults.headers.common['Authorization']);
        }

        return (
            <div className="rootLayout">
                <BrowserRouter>
                    <div className="rootLayout">
                        <Switch>
                            <Route exact path="/login" component={LoginComponent} />
                            <DashboardComponent>
                                <Route path="/dashboard" component={StaffListComponent} />
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
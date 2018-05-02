import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions/authAction';
const FormItem = Form.Item;

class LoginComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            useremail: '',
            password: ''
        }
        this.fireLogin = this.fireLogin.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    fireLogin(e) {
        if (this.state.useremail && this.state.password) {
            this.props.fetchLogin(this.state);
        } else {
            alert("Enter the correct details")
        }
    }

    changeValue(e) {
        switch (e.target.id) {
            case 'useremail':
                this.setState({
                    useremail: e.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                });
                break;
            default:
                break;
        }
    }

    render() {
        if (this.props.staff.user) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="formLayout">
                <Form className="login-form" method="post">
                    <FormItem>
                        <Input id="useremail" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="useremail" onChange={this.changeValue} />
                    </FormItem>
                    <FormItem>
                        <Input id="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={this.changeValue} />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.fireLogin}>
                            Log in
                    </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(item) {
    return { staff: item.staff };
}

export default connect(mapStateToProps, actions)(LoginComponent);